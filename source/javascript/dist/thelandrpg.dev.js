//log('==> The Land RPG mod v1.0.0')
"use strict";

if (!state.theLandRPG) {
  state.theLandRPG = {
    version: 1.0,
    chars: {}
  };
}

var paramSetCharId = 'setcharid';
var paramCharId = 'charid';
var paramFullResources = 'full';
var paramStartTurn = 'startturn';
var paramConcentrate = 'concentrate';
var paramMoveRange = 'moverange';
var paramSpell = 'spell';
var paramAttack = 'attack';
var paramTargets = 'targets';
var paramTargetParams = 'targetparams';
var listParamHasValue = [paramSetCharId, paramCharId, paramMoveRange, paramSpell, paramAttack, paramTargets, paramTargetParams];

function doGetAttrByName(iCharId, iAttrName) {
  var theAttr = findObjs({
    type: 'attribute',
    characterid: iCharId,
    name: iAttrName
  }, {
    caseInsensitive: true
  })[0];

  if (!theAttr) {
    theAttr = createObj('attribute', {
      characterid: iCharId,
      name: iAttrName
    });
  }

  return theAttr.get('current');
}

;

function doSetAttrByName(iCharId, iAttrName, iValue) {
  var theAttr = findObjs({
    type: 'attribute',
    characterid: iCharId,
    name: iAttrName
  }, {
    caseInsensitive: true
  })[0];

  if (!theAttr) {
    theAttr = createObj('attribute', {
      characterid: iCharId,
      name: iAttrName
    });
  }

  return theAttr.set('current', iValue);
}

;

function doGetAttrByNameWithDefault(iCharId, iAttrName, iDefault) {
  var theValue = iDefault;
  var theAttr = findObjs({
    type: 'attribute',
    characterid: iCharId,
    name: iAttrName
  }, {
    caseInsensitive: true
  })[0];

  if (theAttr) {
    theValue = theAttr.get('current');
  }

  return theValue;
}

;

function addMax(iCur, iAdd, iMax) {
  var theCur = iCur;
  theCur = theCur + iAdd;

  if (theCur > iMax) {
    theCur = iMax;
  }

  return theCur;
}

on('chat:message', function (msg) {
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
      };
    }

    ;
  } // These functions parse the chat input.


  parseParams = function parseParams(iContent) {
    // Input:	content - string of the form command --opts1 --opts2  value --opts3.
    //					values come separated by whitespace.
    //			hasValue - array of all options which come with a value
    // Output:	object containing key:true if key is not in hasValue. and containing
    //			key:value otherwise
    return iContent.replace(/<br\/>/g, "") // delete added HTML line breaks
    .replace(/\s+$/g, "") // delete trailing whitespace
    .replace(/\s*{{((?:.|\n)*)\s+}}$/, " $1") // replace content wrapped in curly brackets
    .replace(/\\([{}])/g, "$1") // add escaped brackets
    .split(/\s+--/).slice(1).reduce(function (m, arg) {
      var kv = arg.split(/\s(.+)/);

      if (listParamHasValue.includes(kv[0])) {
        m[kv[0]] = kv[1] || "";
      } else {
        m[arg] = true;
      }

      return m;
    }, {});
  };

  function setCharId(iParams) {
    var characters = findObjs({
      type: 'character'
    });
    var theChars = characters.map(function (theChar) {
      return {
        'id': theChar.get('id'),
        'name': theChar.get('name')
      };
    });
    var theCharName = iParams[paramSetCharId];
    log(theCharName);
    log(theChars);
    theChars.forEach(function (theChar) {
      if (theCharName === theChar.name) {
        var theCharId = doGetAttrByName(theChar.id, 'header-character-id');
        var theIdField = findObjs({
          type: 'attribute',
          characterid: theChar.id,
          name: 'header-character-id'
        })[0];
        theIdField.set('current', theChar.id);
        setDefaultCharVars(theChar.id);
        log(state.theLandRPG);
      }

      ;
    });
  }

  ;

  function setResources(iCharId, iParams) {
    var curMana = parseInt(doGetAttrByName(iCharId, 'curmana'));
    var curStamina = parseInt(doGetAttrByName(iCharId, 'curstamina'));
    var curHealth = parseInt(doGetAttrByName(iCharId, 'curhealth'));
    var maxMana = parseInt(doGetAttrByName(iCharId, 'chaosseed-combatstats-mana-total'));
    var maxStamina = parseInt(doGetAttrByName(iCharId, 'chaosseed-combatstats-stamina-total'));
    var maxHealth = parseInt(doGetAttrByName(iCharId, 'chaosseed-combatstats-health-total')); //concentrate

    if (iParams[paramConcentrate]) {
      var theConc = parseInt(doGetAttrByName(iCharId, 'chaosseed-skills-concentration-total'));
      doSetAttrByName(iCharId, 'curmana', addMax(curMana, theConc, maxMana));
      doSetAttrByName(iCharId, 'curstamina', addMax(curStamina, theConc, maxStamina));
    }

    ; //start turn

    if (iParams[paramStartTurn]) {
      var regenMana = parseInt(doGetAttrByName(iCharId, 'chaosseed-combatstats-manaregen-total')); //const regenStamina = parseInt(doGetAttrByName(iCharId,'chaosseed-combatstats-staminaregen-total'));
      //const regenHealth = parseInt(doGetAttrByName(iCharId,'chaosseed-combatstats-healthregen-total'));

      doSetAttrByName(iCharId, 'curmana', addMax(curMana, regenMana, maxMana));
    }

    ; //reset to full resources

    if (iParams[paramFullResources]) {
      log('setting:' + maxMana + '/' + maxStamina + '/' + maxHealth);
      doSetAttrByName(iCharId, 'curmana', maxMana);
      doSetAttrByName(iCharId, 'curstamina', maxStamina);
      doSetAttrByName(iCharId, 'curhealth', maxHealth);
    }

    ;
  }

  function toggleMoveRange(iCharId, iRange, iExtRange) {
    var bOk = true;
    var theToken = findObjs({
      pageid: Campaign().get("playerpageid"),
      type: 'graphic',
      represents: iCharId
    })[0]; //log('moverange='+iRange+' on='+bMoveRangeOn+' token='+theToken);

    if (theToken) {
      theState = state.theLandRPG.chars[iCharId];

      if (theState.isMoveRangeOn === false) {
        theState.isMoveRangeOn = true;
        theState.oldRaduis1 = theToken.get('aura1_radius');
        theState.oldColor1 = theToken.get('aura1_color');
        theState.oldIsSquare1 = theToken.get('aura1_square');
        theState.oldRaduis2 = theToken.get('aura2_radius');
        theState.oldColor2 = theToken.get('aura2_color');
        theState.oldIsSquare2 = theToken.get('aura2_square'); //set range and color

        theToken.set('aura1_radius', iRange);
        theToken.set('aura1_color', '#59e594');
        theToken.set('aura1_square', true);

        if (iExtRange > 0) {
          theToken.set('aura2_radius', iRange + iExtRange);
          theToken.set('aura2_color', '#ffff00');
          theToken.set('aura2_square', true);
        }
      } else {
        theState.isMoveRangeOn = false; //set saved values

        theToken.set('aura1_radius', theState.oldRadius1);
        theToken.set('aura1_color', theState.oldColor1);
        theToken.set('aura1_square', theState.oldIsSquare1);
        theToken.set('aura2_radius', theState.oldRadius2);
        theToken.set('aura2_color', theState.oldColor2);
        theToken.set('aura2_square', theState.oldIsSquare2);
      }
    } else {
      bOk = false;
    }

    return bOk;
  }

  function doCardSpell(iCharId, iSectionId, iTargets, iTargetParams) {
    function doTarget(iTarget, iTargetNum, iPowerCard) {
      var getSkillTypeTotal = function getSkillTypeTotal(iSkillType) {
        var theId = 'chaosseed-skills-' + iSkillType + '-total';
        return theId;
      };

      var getSkillTypeStatBonus = function getSkillTypeStatBonus(iSkillType) {
        var theId = 'chaosseed-skills-' + iSkillType + '-statbonus';
        return theId;
      };

      var getVsId = function getVsId(iVs) {
        var theId = '';

        if (iVs === 'Armor') {
          theId = 'choasseed-combatstats-armorvalue-total';
        } else if (iVs === 'Dodge') {
          theId = 'chaosseed-combatstats-dodgevalue-total';
        } else {
          theId = 'chaosseed-combatstats-mentalvalue-total';
        }

        return theId;
      };

      var setEffectResource = function setEffectResource(iResource, iAmount) {
        if (iResource === 'Mana') {
          //bar 2
          theCur = iTarget.token.get('bar2_value');
          theCur -= iAmount;
          iTarget.token.set('bar2_value', theCur);
        } else if (iResource === 'Stamina') {
          //bar 1
          theCur = iTarget.token.get('bar1_value');
          theCur -= iAmount;
          iTarget.token.set('bar1_value', theCur);
        } else {
          //bar 3
          theCur = iTarget.token.get('bar3_value');
          theCur -= iAmount;
          iTarget.token.set('bar3_value', theCur);
        }
      };

      var getValueTypeAcc = function getValueTypeAcc(iValueType) {
        var theId = '';

        if (iValueType === 'melee') {
          theId = 'chaosseed-combatvalues-meleeacc-total';
        } else if (iValueType === 'ranged') {
          theId = 'chaosseed-combatvalues-rangedacc-total';
        } else if (iValueType === 'thrown') {
          theId = 'chaosseed-combatvalues-thrownacc-total';
        } else {
          theId = 'chaosseed-combatvalues-spellacc-total';
        }

        return theId;
      };

      var getValueTypeDam = function getValueTypeDam(iValueType) {
        var theId = '';

        if (iValueType === 'melee') {
          theId = 'chaosseed-combatvalues-meleedamage-total';
        } else if (iValueType === 'ranged') {
          theId = 'chaosseed-combatvalues-rangeddamage-total';
        } else if (iValueType === 'thrown') {
          theId = 'chaosseed-combatvalues-throwndamage-total';
        } else {
          theId = 'chaosseed-combatvalues-spelldamage-total';
        }

        return theId;
      };

      var bHit = 1; //assume a hit

      if (iPowerCard !== '') {
        theAPICall = powerCard;
      } else {
        var theName = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-name', '');
        var theSkillType = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-magictype', 'airmagic');
        var theSubskill = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-subskill', 'N/A');
        var theActionType = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-actiontype', 'Combat');
        var theCostLine = theCostType + ' ' + theCost;
        var theSkillTotal = getSkillTypeTotal(theSkillType);
        var theSkillTypeTotal = doGetAttrByNameWithDefault(iCharId, theSkillTotal, 0);
        var theSkillTypeRank = doGetAttrByNameWithDefault(iCharId, 'chaosseed-skills-' + theSkillType + '-rank', 0);
        var theStatTotal = getSkillTypeStatBonus(theSkillType);
        var theSkillTypeStatBonus = doGetAttrByNameWithDefault(iCharId, theStatTotal, 0);

        if (theSubskill !== 'N/A') {
          theSkillTotal = getSkillTypeTotal(theSubskill);
          theSkillTypeTotal = doGetAttrByNameWithDefault(iCharId, theSkillTotal, 0);
          theSkillTypeRank = doGetAttrByNameWithDefault(iCharId, 'chaosseed-skills-' + theSubskill + '-rank', 0);
          theStatTotal = getSkillTypeStatBonus(theSubskill);
          theSkillTypeStatBonus = doGetAttrByNameWithDefault(iCharId, theStatTotal, 0);
        }

        ;
        var theSkillTypeAcc = theSkillTypeTotal - theSkillTypeStatBonus; //rank+bonuses - stat bonus already added to global spell acc/damage

        var theSkillTypeDamage = Math.floor(theSkillTypeRank / 5); //rank/5

        var theGlobalEffDam = doGetAttrByNameWithDefault(iCharId, 'chaosseed-combatvalues-efficiencies-total');
        var theMagicEfficiencyDamage = doGetAttrByNameWithDefault(iCharId, 'chaosseed-efficiencies-' + doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-magictype', 'airmagic') + '-total', 0);
        var theEfficiencyDamage = Math.floor((theGlobalEffDam + theMagicEfficiencyDamage) / 25);
        var theRadius = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-radius', '');
        var theRadiusLine = '1 creature';

        if (theRadius !== '') {
          theRadiusLine = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-radius', 0) + ' feet in a ' + doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-radiustype', 'N/A');
        }

        ;
        var theRange = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-range', 'Self');
        var theRangeLine = theRange;

        if (theRangeLine !== 'Self' && theRangeLine !== 'Touch') {
          theRangeLine = 'Target must be within ' + theRangeLine + ' feet.';
        }

        var theVs = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-vs', 'Mental');
        var theEffect = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-effect', 'Heal');
        var theAmount = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-amount', 0);

        if (iTarget) {
          theAmount = iTarget.damage;
        }

        var theAmountType = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-amounttype', 'Health');
        var theDuration = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-duration', 'Instant');
        var theDurationAmount = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-durationamount', 0);

        if (iTarget) {
          theDurationAmount = iTarget.duration;
        }

        var theDurationType = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-durationtype', 0);
        var theDurationLine = theDuration;

        if (theDurationLine === 'Timed') {
          theDurationLine = theDurationAmount + ' ' + theDurationType;
        }

        var theDesc = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-desc', '');
        theAPICall = '!power {{ ' + ' --bgcolor|' + theColor + ' --txcolor|#ffffff' + ' --titlefontshadow|#000000' + ' --leftsub|' + theSkillType + ' ◆ ' + theActionType + ' --rightsub|' + theCostLine;

        if (iTarget) {
          theAPICall += ' --name|' + theName + '->' + iTarget.token.get('name') + '(#' + iTargetNum + ')';
        } else {
          theAPICall += ' --name|' + theName;
        }

        var theValueType = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-valuetype', 'melee');
        var theGlobalAcc = doGetAttrByNameWithDefault(iCharId, getValueTypeAcc(theValueType), 0);
        var theGlobalDam = doGetAttrByNameWithDefault(iCharId, getValueTypeDam(theValueType), 0);
        var theAccBonus = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-accbonus', 0);

        if (iTarget) {
          theAccBonus = iTarget.accbonus;
        }

        var theDamageType = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-damagetype', 'physical');
        var theDamageClass = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-damageclass', 'basic');
        var theDamBonus = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-damagebonus', 0);
        var theCritAbove = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-critabove', 50);
        var theCritAccBonus = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-critbonus', 0);
        var theCritDamBonus = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-critdamagebonus', 0);
        var theCritAcc = theCritAbove - theCritAccBonus;

        if (theVs !== 'N/A') {
          var theTargetVsValue = 0;

          if (iTarget) {
            theTargetVsValue = doGetAttrByNameWithDefault(iTarget["char"].get('id'), getVsId(theVs), 0);
          }

          if (iTarget) {
            theAPICall += ' --Attack|[[ ' + iTarget.roll + ' [d100] + ';
          } else {
            theAPICall += ' --Attack|[[ 1d100 + ';
          }

          theAPICall += theGlobalAcc + ' [' + theValueType + ' ACC] + ' + theSkillTypeAcc + ' [Skill ACC] + ';

          if (iTarget) {
            theAPICall += iTarget.accbonus + ' [ACC Bonus] ]] vs ' + theVs;
          } else {
            theAPICall += theAccBonus + ' [Bonus ACC] ]] vs ' + theVs;
          } //no text if no target


          if (iTarget) {
            theAPICall += '(' + theTargetVsValue + ')';
          }

          ;

          if (iTarget) {
            var theAcc = parseInt(iTarget.roll) + parseInt(theGlobalAcc) + parseInt(theSkillTypeAcc) + parseInt(theAccBonus);

            if (theAcc >= theTargetVsValue) {
              if (theAmount !== 0) {
                var theDamageTaken = 0;

                if (iTarget) {
                  theDamageTaken += parseInt(theAmount) + parseInt(theGlobalDam) + parseInt(theSkillTypeDamage) + parseInt(theDamBonus);

                  if (theValueType === 'spell') {
                    theDamageTaken += parseInt(theEfficiencyDamage);
                  }

                  ;
                  theAPICall += ' --Hit|Target takes [[ ' + theAmount + ' [Base] + ' + theGlobalDam + ' [' + theValueType + ' Dam] +' + theSkillTypeDamage + ' [Skill Dam] + ';

                  if (theValueType === 'spell') {
                    theAPICall += theEfficencyDamage + ' [Eff Dam] + ';
                  }

                  ;
                  theAPICall += theDamBonus + ' [Bonus Dam] ]] ' + theAmountType + ' ' + theEffect + ' of ' + theDamageType + ' as ' + theDamageClass;

                  if (theAcc - theTargetVsValue >= theCritAcc) {
                    theDamageTaken += parseInt(iTarget.critdamage) + parseInt(theCritDamBonus) + parseInt(theGlobalDam) + parseInt(theSkillTypeDamage);

                    if (theValueType === 'spell') {
                      theDamageTaken += parseInt(theEfficiencyDamage);
                    }

                    theAPICall += ' --Critical|Target takes an additional [[ ' + iTarget.critdamage + ' [Base] + ' + theGlobalDam + ' [' + theValueType + ' Dam] +' + theSkillTypeDamage + ' [Skill Dam] + ';

                    if (theValueType === 'spell') {
                      theAPICall = +theEfficencyDamage + ' [Eff Dam] + ';
                    }

                    theAPICall += theCritDamBonus + ' [Bonus Dam] ]] extra ' + theAmountType + ' ' + theEffect;
                  } //remove resource from target


                  if (theEffect === 'Damage') {
                    setEffectResource(theAmountType, theDamageTaken);
                  } else if (theEffect === 'Heal') {
                    setEffectResource(theAmountType, -theDamageTaken);
                  } //log(theDamageTaken);

                }
              }

              ;
            } else {
              bHit = 0;
              theAPICall += ' --Misses|Target takes... nothing!';
            }
          } else {
            theAPICall += ' --On Hit|Target takes [[ ' + theAmount + ' [Base] + ' + theGlobalDam + ' [' + theValueType + ' Dam] +' + theSkillTypeDamage + ' [Skill Dam] + ';

            if (theValueType === 'spell') {
              theAPICall += theEfficiencyDamage + ' [Eff Dam] + ';
            }

            ;
            theAPICall += theDamBonus + ' [Bonus Dam] ]] ' + theAmountType + ' ' + theEffect + ' of ' + theDamageType + ' as ' + theDamageClass;
            theAPICall += ' --Critical Chance|if above ' + theCritAcc + ', target takes  [[ ' + theAmount + ' [Base] + ' + theGlobalDam + ' [' + theValueType + ' Dam] +' + theSkillTypeDamage + ' [Skill Dam] + ';

            if (theValueType === 'spell') {
              theAPICall += theEfficiencyDamage + ' [Eff Dam] + ';
            }

            ;
            theAPICall += theCritDamBonus + ' [Bonus Dam] ]] extra ' + theAmountType + ' ' + theEffect;
          }
        } else {
          if (theAmount !== 0) {
            if (iTarget) {
              theAPICall += ' --Combat|Target takes [[' + iTarget.damage + ' [Base] + ' + theGlobalDam + ' [' + theValueType + ' Dam] + ' + theSkillTypeDamage + ' [Skill Dam] + ';

              if (theValueType === 'spell') {
                theAPICall += theEfficiencyDamage + ' [Eff Dam] + ';
              }

              ;
              theAPICall += iTarget.damagebonus + ' [Bonus Dam] ]] ' + theAmountType + ' ' + theEffect + ' of ' + theDamageType + ' as ' + theDamageClass;
            } else {
              theAPICall += ' --Combat|Target takes [[' + theAmount + ' [Base] + ' + theGlobalDam + ' [' + theValueType + ' Dam] + ' + theSkillTypeDamage + ' [Skill Dam] + ';

              if (theValueType === 'spell') {
                theAPICall += theEfficiencyDamage + ' [Eff Dam] + ';
              }

              ;
              theAPICall += +theDamBonus + ' [Bonus Dam] ]] ' + theAmountType + ' ' + theEffect + ' of ' + theDamageType + ' as ' + theDamageClass;
            }
          }
        }

        ;
        theAPICall += ' --Area|' + theRadiusLine;
        theAPICall += ' --Range|' + theRangeLine;
        theAPICall += ' --Duration|' + theDurationLine;
        theCondition = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-conditiontype', 'N/A');

        if (theCondition !== 'N/A') {
          theAPICall += ' --Condition|' + theCondition;
        }

        ;
        theSpellDesc = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-spelleffect', '');

        if (theSpellDesc !== '') {
          theAPICall += ' --Description|' + theSpellDesc;
        }

        ;
        theAPICall += ' --Chaos Seed|' + theCharName + ' ' + theDesc;
        '}} ';
      }

      ; //else
      //log(theAPICall);

      sendChat('player|' + msg.playerid, theAPICall);
      /*
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
      */
    }

    ; //doTarget

    var thePlayer = findObjs({
      id: msg.playerid
    })[0];
    var theColor = thePlayer.get('color');
    var theChar = findObjs({
      id: iCharId
    })[0];
    var theCharName = theChar.get('name');
    var theCharToken = findObjs({
      type: 'graphic',
      subtype: 'token',
      represents: iCharId
    })[0];
    var theTokens = [];

    if (iTargets) {
      var theTargets = iTargets.split('|');
      theIndex = 0;

      if (theTargets.length > 0) {
        for (var i = 0; i < theTargets.length; i++) {
          var theToken = findObjs({
            id: theTargets[i]
          })[0];
          var _theChar = findObjs({
            id: theToken.get('represents')
          })[0];
          var pRoll = iTargetParams[theIndex];
          var pDamage = iTargetParams[theIndex + 1];
          var pDuration = iTargetParams[theIndex + 2];
          var pAccBonus = iTargetParams[theIndex + 3];
          var pDamageBonus = iTargetParams[theIndex + 4];
          var pCritDamage = iTargetParams[theIndex + 5];
          var pCritAccBonus = iTargetParams[theIndex + 6];
          var pCritDamageBonus = iTargetParams[theIndex + 7];
          theIndex += 8;
          theTokens[i] = {
            token: theToken,
            "char": _theChar,
            roll: pRoll,
            damage: pDamage,
            duration: pDuration,
            accbonus: pAccBonus,
            damagebonus: pDamageBonus,
            critdamage: pCritDamage,
            critaccbonus: pCritAccBonus,
            critdamagebonus: pCritDamageBonus
          };
        }
      } //log(theTokens);

    }

    var powerCard = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-powercard', '');
    var theAPICall = ''; //subtract cost from current

    var theCost = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-cost', 0);
    var theCostType = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-costtype', 'Mana');

    if (theCostType === 'Mana') {
      //get global arcane efficiency
      theMult = doGetAttrByNameWithDefault(iCharId, 'chaosseed-combatvalues-arcaneefficiency-total', 0); //get magic type efficienices

      var theEffType = doGetAttrByNameWithDefault(iCharId, iSectionId + 'spells-magictype', 'airmagic');
      theMult += doGetAttrByNameWithDefault(iCharId, 'chaosseed-arcaneefficiencies-' + theEffType + '-total', 0); //adjust cost

      theCost = theCost - Math.floor(theCost * (theMult / 100));
    }

    var theCurHealth = doGetAttrByNameWithDefault(iCharId, 'curhealth', 0);
    var theCurMana = doGetAttrByNameWithDefault(iCharId, 'curmana', 0);
    var theCurStamina = doGetAttrByNameWithDefault(iCharId, 'curstamina', 0);

    if (theCostType === 'Health') {
      theCurHealth -= theCost;
      doSetAttrByName(iCharId, 'curhealth', theCurHealth);
    } else if (theCostType === 'Mana') {
      theCurMana -= theCost;
      doSetAttrByName(iCharId, 'curmana', theCurMana);
    } else if (theCostType === 'Stamina') {
      theCurStamina -= theCost;
      doSetAttrByName(iCharId, 'curstamina', theCurStamina);
    } //do card for each target


    if (theTokens.length > 0) {
      for (var _i = 0; _i < theTokens.length; _i++) {
        doTarget(theTokens[_i], _i + 1, powerCard);
      }
    } else {
      doTarget(undefined, 0, powerCard);
    }
  } //doCardSpell


  function doCardAttack(iCharId, iSectionId, iTargets, iTargetParams) {
    var thePlayer = findObjs({
      id: msg.playerid
    })[0];
    var theColor = thePlayer.get('color');
    var theChar = findObjs({
      id: iCharId
    })[0];
    var theCharName = theChar.get('name');
    var powerCard = doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-powercard', '');
    var theAPICall = ''; //subtract cost from current

    var theCost = doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-cost', 0);
    var theCostType = doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-resource', 'Stamina');

    if (theCostType === 'Mana') {
      theCost = theCost - Math.floor(theCost * (doGetAttrByNameWithDefault(iCharId, 'chaosseed-combatvalues-efficiencies-total', 0) / 100));
    }

    var theCurHealth = doGetAttrByNameWithDefault(iCharId, 'curhealth', 0);
    var theCurMana = doGetAttrByNameWithDefault(iCharId, 'curmana', 0);
    var theCurStamina = doGetAttrByNameWithDefault(iCharId, 'curstamina', 0);

    if (theCostType === 'Health') {
      theCurHealth -= theCost;
      doSetAttrByName(iCharId, 'curhealth', theCurHealth);
    } else if (theCostType === 'Mana') {
      theCurMana -= theCost;
      doSetAttrByName(iCharId, 'curmana', theCurMana);
    } else if (theCostType === 'Stamina') {
      theCurStamina -= theCost;
      doSetAttrByName(iCharId, 'curstamina', theCurStamina);
    }

    if (powerCard !== '') {
      theAPICall = powerCard;
    } else {
      var theName = doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-name', '');
      var theActionType = doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-actiontype', 'combat');
      var theRange = doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-range', 0);
      var theAttackCat = doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-attackcat', 'melee');
      var theAccStatTot = doGetAttrByNameWithDefault(iCharId, 'chaosseed-combatvalues-' + theAttackCat + 'acc-total', 0);
      var theDamageStatTot = doGetAttrByNameWithDefault(iCharId, 'chaosseed-combatvalues-' + theAttackCat + 'damage-total', 0);
      var theWeaponType = doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-weapontype', 'archery');
      var theSkillTot = doGetAttrByNameWithDefault(iCharId, 'chaosseed-skills-' + theWeaponType + '-total', 0);
      var theSkillRank = doGetAttrByNameWithDefault(iCharId, 'chaosseed-skills-' + theWeaponType + '-rank', 0);
      var theAccLine = theAccStatTot + ' [' + doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-attackcat', 'melee') + ' Bonus] + ' + theSkillTot + ' [Skill Bonus] + ' + doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-accbonus', 0) + ' [Acc Bonus] - ' + doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-attacktype', 0) + ' [Attack Penalty]';
      var theVs = doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-vs', 'armor');
      var theDamageLine = '[[ ' + doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-damage', '0') + ' [Base Dam] + ' + theDamageStatTot + ' [' + doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-attackcat', 'melee') + ' Bonus] + ' + Math.floor(theSkillRank / 5) + ' [Skill Dam] + ' + doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-damagebonus', 0) + ' [Dam Bonus] ]]';
      var theAnatomyBonus = Math.floor(doGetAttrByNameWithDefault(iCharId, 'chaosseed-skills-anatomy-rank', 0) / 10);
      var theCritSkillBonus = Math.floor(theSkillRank / 2);
      var theCritLine = 'If the check is [[' + doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-critabove', 0) + ' -' + ' ' + theAnatomyBonus + ' [Anatomy Bonus] ]] or more than needed, it takes an additional [[ ' + doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-damage', 0) + ' [Base Dam] + ' + theDamageStatTot + ' [' + doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-attackcat', 'melee') + ' Bonus] + ' + theSkillRank / 5 + ' [Skill Dam] + ' + doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-damagebonus', 0) + ' [Dam Bonus] + ' + doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-critdamagebonus', 0) + ' [Crit Dam Bonus] + ' + theCritSkillBonus + ' [Crit Skill Bonus] ]] ' + doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-damagetype', 'physical') + ' (' + doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-damageclass', 'none') + ') damage';
      var theDisplay = doGetAttrByNameWithDefault(iCharId, iSectionId + 'attacks-display', '');
      var theCostLine = theCost + ' ' + theCostType;
      theAPICall = '!power {{' + ' --bgcolor|' + theColor + ' --txcolor|#ffffff' + ' --titlefontshadow|#000000' + ' --name|' + theName + ' --leftsub|' + theCharName + ' --rightsub|' + theActionType + ' (range: ' + theRange + ' ft)' + ' --Accuracy Check:|[[ 1d100 + ' + theAccLine + ' ]] vs. ' + theVs + ' --Damage:|' + theDamageLine + ' --Critical Chance:|' + theCritLine + ' --Cost:|' + theCostLine + ' --Notes:|' + theDisplay;
    }

    ; //log(theAPICall);

    sendChat('player|' + msg.playerid, theAPICall);
  }

  ; //doCardAttack
  //MAIN

  if (msg.type == 'api' && msg.content.indexOf('!tlrpg') == 0) {
    var theParams = parseParams(msg.content);
    log(theParams); //set Ids for all chars

    if (theParams[paramSetCharId]) {
      setCharId(theParams);
    } else {
      if (theParams[paramCharId]) {
        var theCharId = theParams[paramCharId];

        if (theParams[paramFullResources] || theParams[paramConcentrate] || theParams[paramStartTurn]) {
          setResources(theCharId, theParams);
        } else if (theParams[paramMoveRange]) {
          var theRanges = theParams[paramMoveRange].split('|');
          var theRange = parseInt(theRanges[0]);
          var theExtRange = parseInt(theRanges[1]); //log('range='+theRange+' extrange='+theExtRange);

          if (!toggleMoveRange(theCharId, theRange, theExtRange)) {
            log(theCharId + 'no token found');
            sendChat('TheLandRPG', 'No token found for setting aura of range');
          }
        } else if (theParams[paramSpell] || theParams[paramAttack]) {
          //fix targetparams because of funky way roll20 does it
          var theRolls = [];

          if (msg.inlinerolls) {
            //paramTargetParams roll results are put here for some ungodly reason
            theRolls = msg.inlinerolls.map(function (roll) {
              return roll.results.total;
            });
          } //log(theRolls);


          if (theParams[paramSpell]) {
            doCardSpell(theCharId, theParams[paramSpell], theParams[paramTargets], theRolls);
          } else {
            doCardAttack(theCharId, theParams[paramSpell], theParams[paramTargets], theRolls);
          }
        }
      } else {
        log('no --charid found');
        sendChat('TheLandRPG', 'Character ID not found.  Go to Settings and use the Set Character Id button.');
      }

      ;
    }

    ;
  }

  ;
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