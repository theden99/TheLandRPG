//log('==> The Land RPG mod v1.0.0')
"use strict";

const paramSetCharId = 'setcharid';
const paramCharId = 'charid'
const paramFullResources = 'full';
const paramStartTurn = 'startturn';
const paramConcentrate = 'concentrate';
const paramMoveRange = 'moverange';
const paramSpell = 'spell'
const paramAttack = 'attack'

const listParamHasValue = [paramSetCharId,paramCharId,paramMoveRange,paramSpell,paramAttack];

on('chat:message',function(msg){

    if (!state.theLandRPG) {
        state.theLandRPG = {
            version: 1.0,
            chars: []
        }
    }

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

    function addMax(iCur,iAdd,iMax) {
        let theCur = iCur;
        theCur = theCur+iAdd;
        if (theCur>iMax) {
            theCur = iMax;
        }

        return theCur;
    }
    
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
            doSetAttrByName(iCharId,'curmana',addMax(curMana,Math.floor(theConc/5),maxMana));
            doSetAttrByName(iCharId,'curstamina',addMax(curStamina,Math.floor(theConc/10),maxStamina));
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

    function doSpell(iCharId,iSectionId) {

    }

    function doAttack(iCharId,iSectionId) {
    }

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
                } else if (theParams[paramSpell]) {
                    const theSectionId = theParams[paramSpell];
                    doSpell(theCharId,theSectionId);
                } else if (theParams[paramAttack]) {
                    const theSectionId = theParams[paramAttack];
                    doAttack(theCharId,theSectionId);
                }
            } else {
                log('no --charid found');
                sendChat('TheLandRPG','Character ID not found.  Go to Settings and use the Set Character Id button.')
            };
        };
    };
});