//log('==> The Land RPG mod v1.0.0')
"use strict";

if (!state.theLandRPG) {
    state.theLandRPG = {
        version: 1.0,
        chars: {}
    }
}

const listMartialSkills = ['doubleattack','dualwielding','keenshot','martialrage','meleefocus','twohandedwielding'];

const paramSetCharId = 'setcharid';
const paramCharId = 'charid'
const paramFullResources = 'full';
const paramStartTurn = 'startturn';
const paramConcentrate = 'concentrate';
const paramMoveRange = 'moverange';
const paramSpell = 'spell';
const paramAttack = 'attack';
const paramTargets = 'targets';
const paramTargetParams = 'targetparams';

const listParamHasValue = [paramSetCharId,paramCharId,paramMoveRange,paramSpell,paramAttack,paramTargets,paramTargetParams];

function doGetAttrByName(iCharId,iAttrName) {
    var theAttr = findObjs({
                            type: 'attribute',
                            characterid: iCharId,
                            name: iAttrName
    }, {caseInsensitive: true})[0];
    if (!theAttr) {
        theAttr = createObj('attribute', {
                        characterid: iCharId,
                        name: iAttrName
        });
    }

    return theAttr.get('current');
};

function doSetAttrByName(iCharId,iAttrName,iValue) {
    var theAttr = findObjs({
                            type: 'attribute',
                            characterid: iCharId,
                            name: iAttrName
    }, {caseInsensitive: true})[0];
    if (!theAttr) {
        theAttr = createObj('attribute', {
                        characterid: iCharId,
                        name: iAttrName
        });
    }

    return theAttr.set('current',iValue);
};

function doGetAttrByNameWithDefault(iCharId,iAttrName,iDefault) {
    var theValue = iDefault;
    var theAttr = findObjs({
                            type: 'attribute',
                            characterid: iCharId,
                            name: iAttrName
    }, {caseInsensitive: true})[0];
    if (theAttr) {
        theValue = theAttr.get('current');
    }

    return theValue;
};

function addMax(iCur,iAdd,iMax) {
    let theCur = iCur;
    theCur = theCur+iAdd;
    if (theCur>iMax) {
        theCur = iMax;
    }

    return theCur;
}

on('chat:message',function(msg){

    function setDefaultCharVars(iCharId) {
        //init vars
        if (!state.theLandRPG.chars[iCharId]) {
            state.theLandRPG.chars[iCharId] = {
                'oldRadius1': 0,
                'oldColor1': '#ffff00',
                'oldIsSquare1': false,
                'oldRadius2': 0,
                'oldColor2': '#59e594',
                'oldIsSquare2': false,
                'isMoveRangeOn': false
            }
        };
    }

    // These functions parse the chat input.
    parseParams = function (iContent) {
        // Input:	content - string of the form command --opts1 --opts2  value --opts3.
        //					values come separated by whitespace.
        //			hasValue - array of all options which come with a value
        // Output:	object containing key:true if key is not in hasValue. and containing
        //			key:value otherwise
        return iContent.replace(/<br\/>/g, "") // delete added HTML line breaks
            .replace(/\s+$/g, "") // delete trailing whitespace
            .replace(/\s*{{((?:.|\n)*)\s+}}$/, " $1") // replace content wrapped in curly brackets
            .replace(/\\([{}])/g, "$1") // add escaped brackets
            .split(/\s+--/)
            .slice(1)
            .reduce((m, arg) => {
                const kv = arg.split(/\s(.+)/);
                if (listParamHasValue.includes(kv[0])) {
                    m[kv[0]] = kv[1] || "";
                } else {
                    m[arg] = true;
                }
                return m;
            }, {});
    };

    function setCharId(iParams) {
        const characters = findObjs({type:'character'});
        const theChars = characters.map(theChar => {
            return {'id':theChar.get('id'),'name':theChar.get('name')};
        });
        const theCharName = iParams[paramSetCharId];
        log(theCharName);
        log(theChars);
        theChars.forEach(theChar => {
            if (theCharName===theChar.name) {
                const theCharId = doGetAttrByName(theChar.id,'header-character-id');
                const theIdField = findObjs({ type: 'attribute', characterid: theChar.id, name: 'header-character-id' })[0];
                theIdField.set('current',theChar.id);
                setDefaultCharVars(theChar.id);
                log(state.theLandRPG);
            };
        });
    };

    function setResources(iCharId,iParams) {
        const curMana = parseInt(doGetAttrByName(iCharId,'curmana'));
        const curStamina = parseInt(doGetAttrByName(iCharId,'curstamina'));
        const curHealth = parseInt(doGetAttrByName(iCharId,'curhealth'));

        const maxMana = parseInt(doGetAttrByName(iCharId,'chaosseed-combatstats-mana-total'));
        const maxStamina = parseInt(doGetAttrByName(iCharId,'chaosseed-combatstats-stamina-total'));
        const maxHealth = parseInt(doGetAttrByName(iCharId,'chaosseed-combatstats-health-total'));

        //concentrate
        if (iParams[paramConcentrate]) {
            const theConc = parseInt(doGetAttrByName(iCharId,'chaosseed-skills-concentration-total'));
            doSetAttrByName(iCharId,'curmana',addMax(curMana,theConc,maxMana));
            doSetAttrByName(iCharId,'curstamina',addMax(curStamina,theConc,maxStamina));
        };

        //start turn
        if (iParams[paramStartTurn]) {
            const regenMana = parseInt(doGetAttrByName(iCharId,'chaosseed-combatstats-manaregen-total'));
            //const regenStamina = parseInt(doGetAttrByName(iCharId,'chaosseed-combatstats-staminaregen-total'));
            //const regenHealth = parseInt(doGetAttrByName(iCharId,'chaosseed-combatstats-healthregen-total'));

            doSetAttrByName(iCharId,'curmana',addMax(curMana,regenMana,maxMana));
        };

        //reset to full resources
        if (iParams[paramFullResources]) {
            log('setting:'+maxMana+'/'+maxStamina+'/'+maxHealth);
            doSetAttrByName(iCharId,'curmana',maxMana);
            doSetAttrByName(iCharId,'curstamina',maxStamina);
            doSetAttrByName(iCharId,'curhealth',maxHealth);
        };
    }

    function toggleMoveRange(iCharId,iRange,iExtRange) {
        let bOk = true;
        var theToken = findObjs({
            pageid: Campaign().get("playerpageid"),
            type: 'graphic',
            represents: iCharId
        })[0];
        //log('moverange='+iRange+' on='+bMoveRangeOn+' token='+theToken);
        if (theToken) {
            theState = state.theLandRPG.chars[iCharId];
            if (theState.isMoveRangeOn===false) {
                theState.isMoveRangeOn = true;
                theState.oldRaduis1 = theToken.get('aura1_radius');
                theState.oldColor1 = theToken.get('aura1_color');
                theState.oldIsSquare1 = theToken.get('aura1_square');
                theState.oldRaduis2 = theToken.get('aura2_radius');
                theState.oldColor2 = theToken.get('aura2_color');
                theState.oldIsSquare2 = theToken.get('aura2_square');
                //set range and color
                theToken.set('aura1_radius',iRange);
                theToken.set('aura1_color','#59e594');
                theToken.set('aura1_square',true);
                if (iExtRange>0) {
                    theToken.set('aura2_radius',iRange+iExtRange);
                    theToken.set('aura2_color','#ffff00');
                    theToken.set('aura2_square',true);
                }
            } else {
                theState.isMoveRangeOn = false;
                //set saved values
                theToken.set('aura1_radius',theState.oldRadius1);
                theToken.set('aura1_color',theState.oldColor1);
                theToken.set('aura1_square',theState.oldIsSquare1);
                theToken.set('aura2_radius',theState.oldRadius2);
                theToken.set('aura2_color',theState.oldColor2);
                theToken.set('aura2_square',theState.oldIsSquare2);
            }
        } else {
            bOk = false;
        }

        return bOk;
    }

    function doCardSpell(iCharId,iSectionId,iTargets,iTargetParams) {
        function doTarget(iTarget,iTargetNum,iPowerCard) {
            const getSkillTypeTotal = (iSkillType) => {
                const theId = 'chaosseed-skills-'+iSkillType+'-total';

                return theId;
            };

            const getSkillTypeStatBonus = (iSkillType) => {
                const theId = 'chaosseed-skills-'+iSkillType+'-statbonus';

                return theId;
            };

            const getVsId = (iVs) => {
                let theId = '';
                if (iVs==='Armor') {
                    theId = 'choasseed-combatstats-armorvalue-total'
                } else if (iVs==='Dodge') {
                    theId = 'chaosseed-combatstats-dodgevalue-total'
                } else {
                    theId = 'chaosseed-combatstats-mentalvalue-total'
                }

                return theId;
            };

            const setEffectResource = (iResource,iAmount) => {
                if (iResource==='Mana') { //bar 2
                    theCur = iTarget.token.get('bar2_value');
                    theCur -= iAmount;
                    iTarget.token.set('bar2_value',theCur);
                } else if (iResource==='Stamina') { //bar 1
                    theCur = iTarget.token.get('bar1_value');
                    theCur -= iAmount;
                    iTarget.token.set('bar1_value',theCur);
                } else { //bar 3
                    theCur = iTarget.token.get('bar3_value');
                    theCur -= iAmount;
                    iTarget.token.set('bar3_value',theCur);
                }
            };

            const getValueTypeAcc = (iValueType) => {
                let theId = '';
                if (iValueType==='melee') {
                    theId = 'chaosseed-combatvalues-meleeacc-total'
                } else if (iValueType==='ranged') {
                    theId = 'chaosseed-combatvalues-rangedacc-total'
                } else if (iValueType==='thrown') {
                    theId = 'chaosseed-combatvalues-thrownacc-total'
                } else {
                    theId = 'chaosseed-combatvalues-spellacc-total'
                }

                return theId;
            }

            const getValueTypeDam = (iValueType) => {
                let theId = '';
                if (iValueType==='melee') {
                    theId = 'chaosseed-combatvalues-meleedamage-total'
                } else if (iValueType==='ranged') {
                    theId = 'chaosseed-combatvalues-rangeddamage-total'
                } else if (iValueType==='thrown') {
                    theId = 'chaosseed-combatvalues-throwndamage-total'
                } else {
                    theId = 'chaosseed-combatvalues-spelldamage-total'
                }

                return theId;
            }

            let bHit = 1; //assume a hit

            if (iPowerCard!=='') {
                theAPICall = powerCard;
            } else {
                const theName = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-name','');
                const theSkillType = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-magictype','airmagic');
                const theSubskill = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-subskill','N/A');
                const theActionType = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-actiontype','Combat');
                const theCostLine = theCostType+' '+theCost;
                let theSkillTotal = getSkillTypeTotal(theSkillType);
                let theSkillTypeTotal = doGetAttrByNameWithDefault(iCharId,theSkillTotal,0);
                let theSkillTypeRank = parseInt(doGetAttrByNameWithDefault(iCharId,'chaosseed-skills-'+theSkillType+'-rank',0));
                let theStatTotal = getSkillTypeStatBonus(theSkillType);
                let theSkillTypeStatBonus = doGetAttrByNameWithDefault(iCharId,theStatTotal,0);
                let theSubskillRank = 0;
                if (theSubskill!=='N/A') {
                    theSkillTotal = getSkillTypeTotal(theSubskill);
                    if (listMartialSkills.includes(theSubskill)) {
                        theSkillTypeTotal += doGetAttrByNameWithDefault(iCharId,theSkillTotal,0); //martials don't inlcude parent bonus
                    } else {
                        theSkillTypeTotal = doGetAttrByNameWithDefault(iCharId,theSkillTotal,0);
                    }
                    theStatTotal = getSkillTypeStatBonus(theSubskill)
                    theSkillTypeStatBonus = doGetAttrByNameWithDefault(iCharId,theStatTotal,0);
                    theSubskillRank += parseInt(doGetAttrByNameWithDefault(iCharId,'chaosseed-skills-'+theSubskill+'-rank',0)); //subskills should add parent ranks
                };
                const theSkillTypeAcc = theSkillTypeTotal-theSkillTypeStatBonus; //rank+bonuses - stat bonus already added to global spell acc/damage
                const theSkillTypeDamage = Math.floor((theSkillTypeRank+theSubskillRank)/5); //rank/5
                let theAccMod = 0;
                if (theSubskill==='dualwielding') {
                    thePrimary = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-primary','none');
                    if (thePrimary==='normal') {
                        theAccMod = -25;
                    } else if (thePrimary==='small') {
                        theAccMod = -15;
                    }
                    theOffhand = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-offhand','none');
                    if (theOffhand==='normal') {
                        theAccMod = -50;
                    } else if (theOffhand==='small') {
                        theAccMod = -40;
                    }
                    
                } else if ((theSubskill==='doubleattack') || (theSubskill==='dualstrike') || (theSubskill==='multihit')) {
                    theAttackNum = parseInt(doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-attacknum',1));
                    theAccMod = (theAttackNum-1)*-25;
                } else if ((theSubskill==='keenshot') || (theSubskill==='meleefocus')) {
                    theAccMod = 10;
                } else if ((theSubskill==='firststrike') || (theSubskill==='swordrebuke')) {
                    theAccMod = -25;
                }
                const theGlobalEffDam = doGetAttrByNameWithDefault(iCharId,'chaosseed-combatvalues-efficiencies-total',0);
                const theMagicEfficiencyDamage = doGetAttrByNameWithDefault(iCharId,'chaosseed-efficiencies-'+doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-magictype','airmagic')+'-total',0);
                const theEfficiencyDamage = Math.floor((theGlobalEffDam+theMagicEfficiencyDamage)/25);
                const theRadius = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-radius',0);
                let theRadiusLine = '1 creature';
                if (theRadius>0) {
                    theRadiusLine = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-radius',0)+' feet in a '+doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-radiustype','N/A')
                };
                const theRange = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-range','Self');
                let theRangeLine = theRange;
                if ((theRangeLine!=='Self') && (theRangeLine!=='Touch')) {
                    theRangeLine = 'Target must be within '+theRangeLine+' feet.';
                }
                const theVs = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-vs','Mental');
                const theEffect = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-effect','Heal')
                const theCombatMedicRanks = parseInt(doGetAttrByNameWithDefault(iCharId,'chaosseed-skills-combathealing-rank',0));
                let theAmount = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-amount',0);
                if (iTarget) {
                    theAmount = iTarget.damage;
                }
                const theAmountType = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-amounttype','Health');
                const theDuration = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-duration','Instant');
                let theDurationAmount = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-durationamount',0);
                if (iTarget) {
                    theDurationAmount = iTarget.duration;
                }
                const theDurationType = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-durationtype',0);
                let theDurationLine = theDuration;
                if (theDurationLine==='Timed') {
                    theDurationLine = theDurationAmount+' '+theDurationType;
                }

                const theDesc = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-desc','');
                theAPICall = '!power {{ '+
                    ' --bgcolor|'+theColor+
                    ' --txcolor|#ffffff'+
                    ' --titlefontshadow|#000000'+
                    ' --leftsub|'
                    +theSkillType;
                if (theSubskill!=='N/A') {
                    theAPICall += '-'+theSubskill;
                }
                theAPICall += ' ◆ '+theActionType+
                    ' --rightsub|'+theCostLine;
                if (iTarget) {
                    theAPICall += ' --name|'+theName+'->'+iTarget.token.get('name')+'(#'+iTargetNum+')';
                } else {
                    theAPICall += ' --name|'+theName;
                }

                const theValueType = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-valuetype','melee');
                const theGlobalAcc = doGetAttrByNameWithDefault(iCharId,getValueTypeAcc(theValueType),0);
                const theGlobalDam = doGetAttrByNameWithDefault(iCharId,getValueTypeDam(theValueType),0);
                let theAccBonus = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-accbonus',0);
                if (iTarget) {
                    theAccBonus = iTarget.accbonus;
                }

                const theDamageType = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-damagetype','physical');
                const theDamageClass = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-damageclass','basic');
                const theDamBonus = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-damagebonus',0);
                const theCritAbove = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-critabove',50);
                const theCritAccBonus = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-critbonus',0);
                const theCritDamBonus = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-critdamagebonus',0);
                let theCritAcc = theCritAbove-theCritAccBonus;
                if (theVs !== 'N/A') {
                    let theTargetVsValue = 0;
                    if (iTarget) {
                        theTargetVsValue = doGetAttrByNameWithDefault(iTarget.char.get('id'),getVsId(theVs),0);
                    }
                    if (iTarget) {
                        theAPICall += ' --Attack|[[ '+iTarget.roll+' [d100] + ';
                    } else {
                        theAPICall += ' --Attack|[[ 1d100 + '
                    }
                    theAPICall += theGlobalAcc+' ['+theValueType+' ACC] + '
                        +theSkillTypeAcc+' [Skill ACC] + ';
                    if (theValueType!=='spell') {
                        theAPICall += theAccMod+' [Mod ACC] + ';
                    }
                    if (iTarget) {
                        theAPICall += iTarget.accbonus+' [Bonus ACC] ]] vs '+theVs;
                    } else {
                        theAPICall += theAccBonus+' [Bonus ACC] ]] vs '+theVs;
                    }
                    //no text if no target
                    if (iTarget) {
                        theAPICall += '('+theTargetVsValue+')'
                    };
                    if (iTarget) {
                        const theAcc = parseInt(iTarget.roll)
                            +parseInt(theGlobalAcc)
                            +parseInt(theSkillTypeAcc)
                            +parseInt(theAccMod)
                            +parseInt(theAccBonus)
                            ;
                        if (theAcc>=theTargetVsValue) {
                            if (theAmount!==0) {
                                let theDamageTaken = 0;
                                if (iTarget) {
                                    theDamageTaken += parseInt(theAmount)
                                        +parseInt(theGlobalDam)
                                        +parseInt(theSkillTypeDamage)
                                        +parseInt(theDamBonus);
                                    if (theValueType==='spell') {
                                        theDamageTaken += parseInt(theEfficiencyDamage)
                                    };
                                    if (theEffect==='Heal') {
                                        theDamageTaken += parseInt(theCombatMedicRanks);
                                    }
                                    theAPICall +=
                                        ' --Hit|Target takes [[ '+theAmount+' [Base] + '
                                        +theGlobalDam+' ['+theValueType+' Dam] +'
                                        +theSkillTypeDamage+' [Skill Dam] + ';
                                    if (theValueType==='spell') {
                                        theAPICall += theEfficiencyDamage+' [Eff Dam] + ';
                                    };
                                    if (theEffect==='Heal') {
                                        theAPICall += theCombatMedicRanks+' [Combat Medic] + '
                                    }
                                    theAPICall +=
                                        theDamBonus+' [Bonus Dam] ]] '
                                        +theAmountType+' '+theEffect
                                        +' of '+theDamageType+' as '+theDamageClass;
                                    if ((theAcc-theTargetVsValue)>=(theCritAcc)) {
                                        theDamageTaken += parseInt(iTarget.critdamage)
                                            +parseInt(theCritDamBonus)
                                            +parseInt(theGlobalDam)
                                            +parseInt(theSkillTypeDamage);
                                        if (theValueType==='spell') {
                                            theDamageTaken += parseInt(theEfficiencyDamage)
                                        }
                                        if (theEffect==='Heal') {
                                            theDamageTaken += parseInt(theCombatMedicRanks);
                                        }
                                        theAPICall += 
                                            ' --Critical|Target takes an additional [[ '+iTarget.critdamage+' [Base] + '
                                            +theGlobalDam+' ['+theValueType+' Dam] +'
                                            +theSkillTypeDamage+' [Skill Dam] + ';
                                        if (theValueType==='spell') {
                                            theAPICall += theEfficiencyDamage+' [Eff Dam] + '
                                        }
                                        if (theEffect==='Heal') {
                                            theAPICall += theCombatMedicRanks+' [Combat Medic] + '
                                        }
                                        theAPICall +=
                                            theCritDamBonus+' [Bonus Dam] ]] extra '+theAmountType+' '+theEffect;
                                    }
                                    //remove resource from target
                                    if (theEffect==='Damage') {
                                        setEffectResource(theAmountType,theDamageTaken)
                                    } else if (theEffect==='Heal') {
                                        setEffectResource(theAmountType,-theDamageTaken)
                                    }
//log(theDamageTaken);
                                }
                            };
                        } else {
                            bHit = 0;
                            theAPICall += ' --Misses|Target takes nothing!';
                        }
                    } else {
                        theAPICall +=
                            ' --On Hit|Target takes [[ '+theAmount+' [Base] + '
                            +theGlobalDam+' ['+theValueType+' Dam] +'
                            +theSkillTypeDamage+' [Skill Dam] + ';
                        if (theValueType==='spell') {
                            theAPICall += theEfficiencyDamage+' [Eff Dam] + '
                        };
                        if (theEffect==='Heal') {
                            theAPICall += theCombatMedicRanks+' [Combat Medic] + '
                        }
                        theAPICall +=
                            theDamBonus+' [Bonus Dam] ]] '+theAmountType+' '+theEffect
                            +' of '+theDamageType+' as '+theDamageClass;
                        theAPICall += 
                            ' --Critical Chance|if above '+theCritAcc+', target takes  [[ '+theAmount+' [Base] + '
                            +theGlobalDam+' ['+theValueType+' Dam] +'
                            +theSkillTypeDamage+' [Skill Dam] + ';
                        if (theValueType==='spell') {
                            theAPICall += theEfficiencyDamage+' [Eff Dam] + '
                        };
                        if (theEffect==='Heal') {
                            theAPICall += theCombatMedicRanks+' [Combat Medic] + '
                        }
                        theAPICall +=
                            theCritDamBonus+' [Bonus Dam] ]] extra '+theAmountType+' '+theEffect;
                    }
                } else {
                    if (theAmount!==0) {
                        if (iTarget) {
                            theAPICall += 
                                ' --Combat|Target takes [['+iTarget.damage+' [Base] + '
                                +theGlobalDam+' ['+theValueType+' Dam] + '
                                +theSkillTypeDamage+' [Skill Dam] + ';
                            if (theValueType==='spell') {
                                theAPICall += theEfficiencyDamage+' [Eff Dam] + '
                            };
                            if (theEffect==='Heal') {
                                theAPICall += theCombatMedicRanks+' [Combat Medic] + '
                            }
                            theAPICall +=
                                iTarget.damagebonus+' [Bonus Dam] ]] '
                                +theAmountType+' '+theEffect
                                +' of '+theDamageType+' as '+theDamageClass;
                        } else {
                            theAPICall += 
                                ' --Combat|Target takes [['+theAmount+' [Base] + '
                                +theGlobalDam+' ['+theValueType+' Dam] + '
                                +theSkillTypeDamage+' [Skill Dam] + ';
                            if (theValueType==='spell') {
                                theAPICall += theEfficiencyDamage+' [Eff Dam] + '
                            };
                            if (theEffect==='Heal') {
                                theAPICall += theCombatMedicRanks+' [Combat Medic] + '
                            }
                            theAPICall +=
                                +theDamBonus+' [Bonus Dam] ]] '
                                +theAmountType+' '+theEffect
                                +' of '+theDamageType+' as '+theDamageClass;
                        }
                    }
                };


                theAPICall += 
                    ' --Area|'+theRadiusLine;

                theAPICall += 
                    ' --Range|'+theRangeLine;

                theAPICall += 
                    ' --Duration|'+theDurationLine;

                theCondition = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-conditiontype','N/A');
                if (theCondition!=='N/A') {
                    theAPICall += 
                        ' --Condition|'+theCondition;
                };

                theSpellDesc = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-spelleffect','');
                if (theSpellDesc!=='') {
                    theAPICall += 
                        ' --Description|'+theSpellDesc;
                };

                theAPICall += 
                    ' --Chaos Seed|'+theCharName+' '+theDesc;
                '}} ';
            }; //else
            
//log(theAPICall);
            sendChat('player|'+msg.playerid,theAPICall);

            const theFxType = 'none';//doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-particletype','none')
            if ((theFxType!=='none') && (bHit===1)) {
                if (theCharToken) {
                    const theFxColor = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-particlecolor','acid')
                    const theX = theCharToken.get('left');
                    const theY = theCharToken.get('top');
                    let theTargetX = theX;
                    let theTargetY = theY;
                    if (iTarget) {
                        theTargetX = iTarget.token.get('left');
                        theTargetY = iTarget.token.get('top');
                    }
                    if ((theFxType.includes('beam')) || (theFxType.includes('breath')) || (theFxType.includes('splatter'))) {
                        spawnFxBetweenPoints(
                            {x:theX,y:theY},
                            {x:theTargetX,y:theTargetY},
                            theFxType+'-'+theFxColor,
                            Campaign().get('playerpageid')
                        );
                    } else {
                        spawnFx(theTargetX,theTargetY,
                            theFxType+'-'+theFxColor,
                            Campaign().get('playerpageid')
                        );
                    }
                }
            }    
        }; //doTarget

        const thePlayer = findObjs({ id:msg.playerid })[0];
        const theColor = thePlayer.get('color');
        const theChar = findObjs({ id:iCharId })[0];
        const theCharName = theChar.get('name');
        const theCharToken = findObjs({type:'graphic',subtype:'token',represents:iCharId})[0];

        let theTokens = [];
        if (iTargets) {
            const theTargets = iTargets.split('|');
            theIndex = 0;
            if (theTargets.length>0) {
                for (let i=0;i<theTargets.length;i++) {
                    const theToken = findObjs({id:theTargets[i]})[0];
                    const theChar = findObjs({id:theToken.get('represents')})[0];

                    const pRoll = iTargetParams[theIndex];
                    const pDamage = iTargetParams[theIndex+1];
                    const pDuration = iTargetParams[theIndex+2];
                    const pAccBonus = iTargetParams[theIndex+3];
                    const pDamageBonus = iTargetParams[theIndex+4];
                    const pCritDamage = iTargetParams[theIndex+5];
                    const pCritAccBonus = iTargetParams[theIndex+6];
                    const pCritDamageBonus = iTargetParams[theIndex+7];
                    theIndex += 8;
                    theTokens[i] = {
                        token: theToken,
                        char: theChar,
                        roll: pRoll,
                        damage: pDamage,
                        duration: pDuration,
                        accbonus: pAccBonus,
                        damagebonus: pDamageBonus,
                        critdamage: pCritDamage,
                        critaccbonus: pCritAccBonus,
                        critdamagebonus: pCritDamageBonus
                    }
                }
            }
//log(theTokens);
        }
        
        const powerCard = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-powercard','');
        let theAPICall = '';

        //subtract cost from current
        let theCost = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-cost',0);
        const theCostType = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-costtype','Mana');
        if (theCostType==='Mana') {
            //get global arcane efficiency
            theMult = doGetAttrByNameWithDefault(iCharId,'chaosseed-combatvalues-arcaneefficiencies-total',0);
            //get magic type efficienices
            const theEffType = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-magictype','airmagic');
            theMult += doGetAttrByNameWithDefault(iCharId,'chaosseed-arcaneefficiencies-'+theEffType+'-total',0);
            //adjust cost
            theCost = theCost - Math.floor(theCost*(theMult/100));
        }
        let theCurHealth = doGetAttrByNameWithDefault(iCharId,'curhealth',0);
        let theCurMana = doGetAttrByNameWithDefault(iCharId,'curmana',0);
        let theCurStamina = doGetAttrByNameWithDefault(iCharId,'curstamina',0);
        if (theCostType==='Health') {
            theCurHealth -= theCost;
            doSetAttrByName(iCharId,'curhealth',theCurHealth);
        } else if (theCostType==='Mana') {
            theCurMana -= theCost;
            doSetAttrByName(iCharId,'curmana',theCurMana);
        } else if (theCostType==='Stamina') {
            theCurStamina -= theCost;
            doSetAttrByName(iCharId,'curstamina',theCurStamina);
        }

        //do card for each target
        if (theTokens.length>0) {
            for (let i=0;i<theTokens.length;i++) {
                doTarget(theTokens[i],i+1,powerCard);
            }
        } else {
            doTarget(undefined,0,powerCard);
        }
    } //doCardSpell



    //MAIN
    if (msg.type=='api' && msg.content.indexOf('!tlrpg')==0){
        const theParams = parseParams(msg.content);
        log(theParams);
        
        //set Ids for all chars
        if (theParams[paramSetCharId]) {
            setCharId(theParams);
        } else {
            if (theParams[paramCharId]) {
                const theCharId = theParams[paramCharId];
                if ((theParams[paramFullResources]) || (theParams[paramConcentrate]) || (theParams[paramStartTurn])) {
                    setResources(theCharId,theParams);
                } else if (theParams[paramMoveRange]) {
                    const theRanges = theParams[paramMoveRange].split('|');
                    const theRange = parseInt(theRanges[0]);
                    const theExtRange = parseInt(theRanges[1]);
                    //log('range='+theRange+' extrange='+theExtRange);
                    if (!toggleMoveRange(theCharId,theRange,theExtRange)) {
                        log(theCharId+'no token found')
                        sendChat('TheLandRPG','No token found for setting aura of range');
                    }
                } else if ((theParams[paramSpell]) || (theParams[paramAttack])) {
                    //fix targetparams because of funky way roll20 does it
                    let theRolls = [];
                    if (msg.inlinerolls) { //paramTargetParams roll results are put here for some ungodly reason
                        theRolls = msg.inlinerolls.map(roll => roll.results.total);
                    }
//log(theRolls);
                    if (theParams[paramSpell]) {
                        doCardSpell(theCharId,
                            theParams[paramSpell],
                            theParams[paramTargets],
                            theRolls);
                    } else {
                        doCardSpell(theCharId,
                            theParams[paramSpell],
                            theParams[paramTargets],
                            theRolls);
                    }
                }
            } else {
                log('no --charid found');
                sendChat('TheLandRPG','Character ID not found.  Go to Settings and use the Set Character Id button.')
            };
        };
    };
});

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

/*
let listTurnOrder = [];
on('change:campaign:turnorder',function(msg){
    log(msg);
    if (Campaign().get("turnorder") == "") {
        listTurnOrder = []; 
    } else {
        listTurnOrder = JSON.parse(Campaign().get("turnorder"));
    }
    log(listTurnOrder);

    if (listTurnOrder.length>0) {
        const curTurn = listTurnOrder[0];
        log(curTurn);
        let theChar;
        let theToken;
        if (curTurn.id==='-1') {
            const thePlayer = findObjs({type:'player',displayname:curTurn.custom})[0];
            const thePlayerId = thePlayer.get('id');
            theChar = findObjs({type:'character',controlledby:thePlayerId})[0];
            if (theChar) {
                const theCharId = theChar.get('id');
                theToken = findObjs({type:'graphic',subtype:'token',represents:theCharId})[0];
            } else {
                log('character controlled by needs to be set');
            }
        } else {
            theToken = findObjs({ id:curTurn.id })[0];
            const theRepresents = theToken.get('represents');
            theChar = findObjs({ id:theRepresents })[0];
        }
        log(theChar);
        log(theToken);
    } else {
        log('no turn order');
    }
});
*/