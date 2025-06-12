//log('==> The Land RPG mod v1.0.0')
"use strict";

if (!state.theLandRPG) {
    state.theLandRPG = {
        version: 1.0,
        chars: {}
    }
}

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
            const getMagicTypeTotal = (iMagicType) => {
                const theId = 'chaosseed-skills-'+iMagicType+'-total';

                return theId;
            };

            const getMagicTypeStatBonus = (iMagicType) => {
                const theId = 'chaosseed-skills-'+iMagicType+'-statbonus';

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

            let bHit = 1; //assume a hit

            if (iPowerCard!=='') {
                theAPICall = powerCard;
            } else {
                const theName = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-name','');
                const theMagicType = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-magictype','airmagic');
                const theSubskill = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-subskill','N/A');
                const theLevel = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-level',0);
                const theActionType = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-actiontype','Combat');
                const theCostLine = theCostType+' '+theCost;
                let theMagicTotal = getMagicTypeTotal(theMagicType);
                let theMagicTypeTotal = doGetAttrByNameWithDefault(iCharId,theMagicTotal,0);
                let theMagicTypeRank = doGetAttrByNameWithDefault(iCharId,'chaosseed-skills-'+theMagicType+'-rank',0);
                let theStatTotal = getMagicTypeStatBonus(theMagicType);
                let theMagicTypeStatBonus = doGetAttrByNameWithDefault(iCharId,theStatTotal,0);
                if (doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-subskill',0)!=='NA') {
                    theMagicTotal = getMagicTypeTotal(theSubskill);
                    theMagicTypeTotal = doGetAttrByNameWithDefault(iCharId,theMagicTotal,0);
                    theMagicTypeRank = doGetAttrByNameWithDefault(iCharId,'chaosseed-skills-'+theSubskill+'-rank',0);
                    theStatTotal = getMagicTypeStatBonus(theSubskill)
                    theMagicTypeStatBonus = doGetAttrByNameWithDefault(iCharId,theStatTotal,0);
                };
                const theMagicTypeAcc = theMagicTypeTotal-theMagicTypeStatBonus; //rank+bonuses - stat bonus already added to global spell acc/damage
                const theMagicTypeDamage = Math.floor(theMagicTypeRank/5); //rank+bonuses/5
                const theMagicEfficencyDamage = Math.floor(doGetAttrByNameWithDefault(iCharId,'chaosseed-efficiencies-'+doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-magictype','airmagic')+'-total',0)/25);
                const theRadius = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-radius','');
                let theRadiusLine = '1 creature';
                if (theRadius!=='') {
                    theRadiusLine = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-radius',0)+' feet in a '+doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-radiustype','N/A')
                };
                const theRange = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-range','Self');
                let theRangeLine = theRange;
                if ((theRangeLine!=='Self') && (theRangeLine!=='Touch')) {
                    theRangeLine = 'Target must be within '+theRangeLine+' feet.';
                }
                const theVs = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-vs','Mental');
                const theEffect = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-effect','Heal')
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
                ' --leftsub|'+theMagicType+' '+theLevel+' ◆ '+theActionType+
                ' --rightsub|'+theCostLine;
                if (iTarget) {
                    theAPICall += ' --name|'+theName+'->'+iTarget.token.get('name')+'(#'+iTargetNum+')';
                } else {
                    theAPICall += ' --name|'+theName;
                }

                const theSpellAcc = doGetAttrByNameWithDefault(iCharId,'chaosseed-combatvalues-spellacc-total',0);
                let theAccBonus = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-accbonus',0);
                if (iTarget) {
                    theAccBonus = iTarget.accbonus;
                }
                const theSpellDam = doGetAttrByNameWithDefault(iCharId,'chaosseed-combatvalues-spelldamage-total',0);
                const theDamBonus = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-damagebonus',0);
                const theCritAbove = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-critabove',0);
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
                    theAPICall += theSpellAcc+' [Magic Acc] + '
                        +theMagicTypeAcc+' [Skill] + ';
                    if (iTarget) {
                        theAPICall += iTarget.accbonus+' [ACC Bonus] ]] vs '+theVs;
                    } else {
                        theAPICall += theAccBonus+' [ACC Bonus] ]] vs '+theVs;
                    }
                    //no text if no target
                    if (iTarget) {
                        theAPICall += '('+theTargetVsValue+')'
                    };
                    if (iTarget) {
                        const theAcc = parseInt(iTarget.roll)
                            +parseInt(theSpellAcc)
                            +parseInt(theMagicTypeAcc)
                            +parseInt(theAccBonus)
                            ;
                        if (theAcc>=theTargetVsValue) {
                            if (theAmount!==0) {
                                let theDamageTaken = 0;
                                if (iTarget) {
                                    theDamageTaken += parseInt(theAmount)
                                        +parseInt(theSpellDam)
                                        +parseInt(theMagicTypeDamage)
                                        +parseInt(theMagicEfficencyDamage)
                                        +parseInt(theDamBonus)
                                    theAPICall +=
                                        ' --Hit|Target takes [[ '+theAmount+' [Base] + '+theSpellDam+' [Magic Dam] +'+theMagicTypeDamage+' [Skill Dam] + '+
                                        theMagicEfficencyDamage+' [Eff Dam] + '+theDamBonus+' [Bonus Dam] ]] '+theAmountType+' '+theEffect;                                
                                    if ((theAcc-theTargetVsValue)>=(theCritAcc)) {
                                        theDamageTaken += parseInt(iTarget.critdamage)
                                            +parseInt(theCritDamBonus)
                                            +parseInt(theSpellDam)
                                            +parseInt(theMagicTypeDamage)
                                            +parseInt(theMagicEfficencyDamage)
                                        theAPICall += 
                                            ' --Critical|Target takes  [[ '+iTarget.critdamage+' [Base] + '+theSpellDam+' [Magic Dam] +'+theMagicTypeDamage+' [Skill Dam] + '+
                                            theMagicEfficencyDamage+' [Eff Dam] + '+theCritDamBonus+' [Bonus Dam] ]] extra '+theAmountType+' '+theEffect;
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
                            theAPICall += ' --On Hit|Misses';
                        }
                    } else {
                        theAPICall +=
                            ' --On Hit|Target takes [[ '+theAmount+' + '+theSpellDam+' [Magic Dam] +'+theMagicTypeDamage+' [Skill Dam] + '+
                            theMagicEfficencyDamage+' [Eff Dam] + '+theDamBonus+' [Bonus Dam] ]] '+theAmountType+' '+theEffect;                                
                        theAPICall += 
                            ' --Critical Chance|if above '+theCritAcc+', target takes  [[ '+theAmount+' + '+theSpellDam+' [Magic Dam] +'+theMagicTypeDamage+' [Skill Dam] + '+
                            theMagicEfficencyDamage+' [Eff Dam] + '+theCritDamBonus+' [Bonus Dam] ]] extra '+theAmountType+' '+theEffect;
                    }
                } else {
                    if (theAmount!==0) {
                        if (iTarget) {
                            theAPICall += 
                                ' --On Cast|Target takes [['+iTarget.damage+'+'+theSpellDam+' [Magic Dam] +'+theMagicTypeDamage+' [Skill Dam] + '+
                                theMagicEfficencyDamage+' [Eff Dam] '+iTarget.pDamageBonus+' [Bonus Dam] ]] '+theAmountType+' '+theEffect;
                        } else {
                            theAPICall += 
                                ' --On Cast|Target takes [['+theAmount+'+'+theSpellDam+' [Magic Dam] +'+theMagicTypeDamage+' [Skill Dam] + '+
                                theMagicEfficencyDamage+' [Eff Dam] ]] '+theAmountType+' '+theEffect;
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

                theSpellDesc = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-spelleffect','')
                theAPICall += 
                    ' --Spell Desc|'+theSpellDesc;

                theAPICall += 
                    ' --Caster|'+theCharName+' '+theDesc;
                '}} ';
            }; //else
            
//log(theAPICall);
            sendChat('player|'+msg.playerid,theAPICall);

            const theFxType = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-particletype','none')
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
                    spawnFxBetweenPoints(
                        {x:theX,y:theY},
                        {x:theTargetX,y:theTargetY},
                        theFxType+'-'+theFxColor,
                        Campaign().get('playerpageid')
                    );
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
            //get global efficiencies
            theMult = doGetAttrByNameWithDefault(iCharId,'chaosseed-combatvalues-efficiencies-total',0);
            //get magic type efficienices
            const theEffType = doGetAttrByNameWithDefault(iCharId,iSectionId+'spells-magictype','airmagic');
            theMult += doGetAttrByNameWithDefault(iCharId,'chaosseed-efficiencies-'+theEffType+'-total',0);
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

    function doCardAttack(iCharId,iSectionId,iTargets,iTargetParams) {
        const thePlayer = findObjs({ id:msg.playerid })[0];
        const theColor = thePlayer.get('color');
        const theChar = findObjs({ id:iCharId })[0];
        const theCharName = theChar.get('name');

        const powerCard = doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-powercard','');
        let theAPICall = '';

        //subtract cost from current
        let theCost = doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-cost',0);
        const theCostType = doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-resource','Stamina');
        if (theCostType==='Mana') {
            theCost = theCost - Math.floor(theCost*(doGetAttrByNameWithDefault(iCharId,'chaosseed-combatvalues-efficiencies-total',0)/100));
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

        if (powerCard!=='') {
            theAPICall = powerCard;
        } else {
            const theName = doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-name','');
            const theActionType = doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-actiontype','combat');
            const theRange = doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-range',0);
            const theAttackCat = doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-attackcat','melee');
            const theAccStatTot = doGetAttrByNameWithDefault(iCharId,'chaosseed-combatvalues-'+theAttackCat+'acc-total',0);
            const theDamageStatTot = doGetAttrByNameWithDefault(iCharId,'chaosseed-combatvalues-'+theAttackCat+'damage-total',0);
            const theWeaponType = doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-weapontype','archery');
            const theSkillTot = doGetAttrByNameWithDefault(iCharId,'chaosseed-skills-'+theWeaponType+'-total',0);
            const theSkillRank = doGetAttrByNameWithDefault(iCharId,'chaosseed-skills-'+theWeaponType+'-rank',0);
            const theAccLine = theAccStatTot
                +' ['+doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-attackcat','melee')+' Bonus] + '+theSkillTot
                +' [Skill Bonus] + '+doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-accbonus',0)
                +' [Acc Bonus] - '+doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-attacktype',0)
                +' [Attack Penalty]'
                ;
            const theVs = doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-vs','armor');
            const theDamageLine = '[[ '+doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-damage','0')
                +' [Base Dam] + '+theDamageStatTot
                +' ['+doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-attackcat','melee')+' Bonus] + '+Math.floor(theSkillRank/5)
                +' [Skill Dam] + '+doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-damagebonus',0)
                +' [Dam Bonus] ]]'
                ;
            const theAnatomyBonus = Math.floor(doGetAttrByNameWithDefault(iCharId,'chaosseed-skills-anatomy-rank',0)/10);
            const theCritSkillBonus = Math.floor(theSkillRank/2);
            const theCritLine = 'If the check is [['+doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-critabove',0)+' -'
                +' '+theAnatomyBonus
                +' [Anatomy Bonus] ]] or more than needed, it takes an additional [[ '
                +doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-damage',0)
                +' [Base Dam] + '+theDamageStatTot
                +' ['+doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-attackcat','melee')+' Bonus] + '+(theSkillRank/5)
                +' [Skill Dam] + '+doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-damagebonus',0)
                +' [Dam Bonus] + '+doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-critdamagebonus',0)
                +' [Crit Dam Bonus] + '+theCritSkillBonus
                +' [Crit Skill Bonus] ]] '
                +doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-damagetype','physical')
                +' ('+doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-damageclass','none')+') damage'
                ;
            const theDisplay = doGetAttrByNameWithDefault(iCharId,iSectionId+'attacks-display','');
            const theCostLine = theCost+' '+theCostType;

            theAPICall = '!power {{'+
                ' --bgcolor|'+theColor+
                ' --txcolor|#ffffff'+
                ' --titlefontshadow|#000000'+
                ' --name|'+theName+
                ' --leftsub|'+theCharName+
                ' --rightsub|'+theActionType+' (range: '+theRange+' ft)'+
                ' --Accuracy Check:|[[ 1d100 + '+theAccLine+' ]] vs. '+theVs+
                ' --Damage:|'+theDamageLine+
                ' --Critical Chance:|'+theCritLine+
                ' --Cost:|'+theCostLine+
                ' --Notes:|'+theDisplay
            ;

        };
        //log(theAPICall);
        sendChat('player|'+msg.playerid,theAPICall);
    }; //doCardAttack

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
                        doCardAttack(theCharId,
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