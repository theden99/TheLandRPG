"use strict";
const fs = require('fs');

//do core schema
//process core schema for affects  !!!! TO DO !!!!

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!! UPDATE schemaConst.txt and schemaFuncs.txt before run !!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


const idText = 'text';
const idNumber = 'number';
const idAction = 'action';
const idRoll = 'roll';
const idCheckbox = 'checkbox';
const idHidden = 'hidden';
const idImage = 'img';
const idRadio = 'radio';
const idSelect = 'select';
const idSpan = 'span';
const idtextarea = 'textarea';
const idTable = 'table';
const idName = 'name';
const idTranslate = 'data-i18n';
const idFieldType = 'type';
const idFieldClass = 'class';
const idTrigger = 'trigger';
const idAffects = 'affects';
const idCalculation = 'calculation';
const idTriggeredFuncs = 'triggeredFuncs';
const idValue = 'value';
const idRoller = 'roller';
const idCalcCore = 'calcCore';
const idFuncCore = 'funcCore';
const idCondition = 'condition';
const idInititive = 'inititive';
const idHeader = 'header';
const idSidebar = 'sidebar';
const idTabs = 'tabs';
const idPages = 'pages';
const idZones = 'zones';
const idTemplates = 'templates'; 
const idTables = 'tables'; 
const idFields = 'fields';
const idChaosSeed = 'chaosseed';
const idDatabase = 'database';
const idCharacterCreation = 'charactercreation';
const idInfo = 'info';
const idLogo = 'logo';
const idCharacter = 'character';
const idAvatar = 'avatar';
const idToken = 'token';
const idTitle = 'title';
const idColumns = 'columns';
const idStats = 'stats';
const idCombatStats = 'combatstats'
const idTraits = 'traits';
const idResists = 'resists';
const idSkills = 'skills';
const idEvent = 'event';
const idEffect = 'effect';
const idCore = 'core';
const idCustom = 'custom';
const idUpsert = 'upsert';
const idList = 'list';
const idSheetName = 'sheetfieldname';
const idPageClickName = 'pageclickname';
const idType = 'type';
const idDesc = 'desc';
const idLogoURL = 'logourl';
const idXP = 'xp';
const idLevel = 'level';
const idAvatarURL = 'avatarurl';
const idTokenURL = 'tokenurl';
const idCollapse = 'collapse';
const idDisplayName = 'displayname';
const idDefault = 'default';
const idDecimals = 'decimals';
const idFormula = 'formula';
const idKFormula = 'kformula';
const idCalcDesc = 'calcdesc';
const idCalc = 'calc';
const idCalcParams = 'calcparams';
const idFunc = 'func';
const idFuncParams = 'funcparams';
const idCalcAffects = 'calcaffects';
const idHelpDesc = 'helpdesc';
const idInfoButton = 'infobutton';
const idInfoURL = 'infourl';
const idInfoDesc = 'infodesc';
const idInfoSummary = 'infosummary';
const idInfoDetail = 'infodetail';
const idBase = 'base';
const idEquipBonus = 'equipbonus';
const idBuffBonus = 'buffbonus';
const idMiscBonus = 'miscbonus';
const idTotal = 'total';
const idMax = 'max';
const idHelpButton = 'helpbutton';
const idRarity = 'rarity';
const idCommon = 'common';
const idUncommon = 'uncommon';
const idRare = 'rare';
const idParents = 'parents';
const idSubSkills = 'subskills';
const idParentBonus = 'parentbonus';
const idStatBonus = 'statbonus';
const idMaxRank = 'maxrank';
const idRankTitle = 'ranktitle';
const idNextTitle = 'nexttitle';
const idRank = 'rank';
const idStat = 'stat';
const idAffinity = 'affinity';
const idAffinity0 = '0';
const idAffinity25 = '25';
const idAffinity50 = '50';
const idAffinity75 = '75';
const idAffinity100 = '100';
const idNA = 'n/a';
const idNovice = 'novice';
const idCategories = 'categories';
const idUnskilled = 'unskilled';
const idFormulas = 'formulas';
const idCalcs = 'calcs';
const idFuncs = 'funcs';
const idFuncDesc = 'funcdesc';
const idMaxStat = 'maxstat';
const idMaxSkill = 'maxskill';
const idMaxSubskill = 'maxsubskill';
const idEffects = 'effects';
const idCalcMinOf = 'calcMinOf';
const idAbsorbs = 'absorption';
const idSkillType = 'skilltype';
const idEveryday = 'everyday';
const idTradeskill = 'tradeskill';
const idArmorWeapon = 'armorweapon';
const idMagic = 'magic';
const idCalcMaxOf = 'calcMaxOf';
const idAnyMagic = 'anymagic';
const idCalcMinOfMaxOf = 'calcminofmaxof';
const idSummary = 'summary';
const idCalcStat = 'calcstat';
const idInitiate = 'initiate';
const idApprentice = 'apprentice';
const idJourneyman = 'jorneyman';
const idAdpet = 'adept';
const idMaster = 'master';
const idGrandMaster = 'grandmaster';
const idMovement = 'movement';
const idEfficiencies = 'efficiencies';
const idAll = 'all';
const idNone = 'none';
const idEmptyStr = '';
const id0Str = '0';
const idSpellResists = 'spellresists';
const idMetaMagic = 'metamagic';
const idMartial = 'martial';
//stats
const idStrength = 'strength';
const idAgility = 'agility';
const idDexterity = 'dexterity';
const idConstitution = 'constitution';
const idEndurance = 'endurance';
const idIntelligence = 'intelligence';
const idWisdom = 'wisdom';
const idCharisma = 'charisma';
const idLuck = 'luck';
//movement
const idMovementSpeed = 'movementspeed';
const idMovePenalty = 'movepenalty';
const idMoveTotal = 'movetotal';
const idMoveSquares = 'movesquares';
//combat stats
const idCombatSpeed = 'combatspeed';
const idArmorValue = 'armorvalue';
const idMentalValue = 'mentalvalue';
const idDodgeValue = 'dodgevalue';
const idHealth = 'health';
const idStamina = 'stamina';
const idMana = 'mana';
const idManaRegen = 'manaregen';
const idStaminaRegen = 'staminaregen';
const idHealthRegen = 'healthregen'
//skills
const idAgriculture = 'agriculture';
    const idFolkLore = 'folklore';
    const idNaturalist = 'naturalist';
        const idPersistance = 'persistance';
const idAlchemy = 'alchemy';
        const idExplosive = 'explosives';
const idAnimalEmpathy = 'animalempathy';
    const idAnimalHusbandry = 'animalhusbandry';
        const idBeastBonding = 'beastbonding';
        const idExoticBeasts = 'exoticbeasts';
        const idPrimalMind = 'primalmind';
const idAthletics = 'athletics';
    const idClimbing = 'climbing';
    const idGrappling = 'grappling';
    const idJumping = 'jumping';
    const idRunning = 'running';
    const idSwimming = 'swimming';
const idBalance = 'balance';
    const idEscape = 'escape';
    const idFalling = 'falling';
        const idTumbling = 'tumbling';
const idBrewing = 'brewing';
    const idDistilling = 'distrilling';
const idConcentration = 'concentration';
    const idCelerity = 'celerity';
    const idFocus = 'focus';
        const idManaManipulation = 'manamanipulation';
const idConstruction = 'construction';
    const idCarpentry = 'carpentry';
    const idMasonry = 'masonry';
    const idMaterials = 'materiels';
const idConversation = 'conversation';
    const idInuendo = 'inuendo';
    const idLeadership = 'leadership';
        const idWarLeader = 'warleader';
const idCooking = 'cooking';
const idDeception = 'deception';
    const idDisguise = 'disguise';
    const idForgery = 'forgery';
        const idSeduction = 'seduction';
const idEnchanting = 'enchanting';
    const idJewelling = 'jewelling';
const idEntertain = 'entertain';
    const idArtistry = 'artistry';
    const idPercussion = 'percussion';
    const idSinging = 'singing';
    const idStringInstrument = 'stringinstrument';
    const idWindInstrument = 'windinstrument';
        const idExoticInstrument = 'exoticinstrument';
const idFishing = 'fishing';
    const idAngling = 'angling';
const idFletching = 'fletching';
const idFortitude = 'fortitude';
    const idEntryArc = 'energyarc';
    const idShakeItOff = 'shakeitoff';
        const idDivinity = 'divinity';
const idGambling = 'gambling';
    const idTactics = 'tactics';
        const idRandomThoughts = 'randomthoughts';
const idGatherInformation = 'gatherinformation';
    const idLipReading = 'lipreading';
        const idConviction = 'conviction';
        const idScepticism = 'scepticism';
const idHealing = 'healing';
    const idCombatMedic = 'combathealing';
    const idHygiene = 'hygiene';
    const idNecromancy = 'necromancy';
        const idAnatomy = 'anatomy';
const idHerbLore = 'herblore';
    const idDetoxification = 'detoxification';
    const idPoisonMaking = 'poisonmaking';
const idInstillFear = 'instillfear';
    const idAggression = 'aggression';
    const idTaunt = 'taunt';
    const idTorture = 'torture';
const idIntuition = 'intuition';
    const idSelfAwareness = 'selfawareness';
const idInvestigation = 'investigation';
    const idSearch = 'search';
        const idRunicMagic = 'runicmagic';
        const idZealotry = 'zealotry';
const idMetaGaming = 'metagaming';
    const idAnalyze = 'analyze';
        const idWorship = 'worship';
const idPerception = 'perception';
    const idListening = 'listening';
        const idDetection = 'detection';
        const idPeriphery = 'periphery';
const idPuzzleSolving = 'puzzlesolving';
const idResearch = 'research';
    const idAncientHistory = 'ancienthistory';
    const idAstronomy = 'astronomy';
    const idEngineering = 'engineering';
    const idGeography = 'geography';
    const idHigherPowers = 'higherpowers';
    const idLocalPolitics = 'localpolitics';
const idRiding = 'riding';
    const idDriving = 'driving';
    const idMountedCombat = 'mountedcombat';
        const idArialCombat = 'arialcombat';
        const idAquaticCombat = 'aquauticcombat';
const idSailing = 'sailing';
    const idShipBuilding = 'shipbuilding';
const idScavenging = 'scavenging';
const idScribing = 'scribing';
    const idBookBinding = 'bookbinding';
const idSmithing = 'smithing';
    const idArmorForging = 'armorforging';
    const idGemCraft = 'gemcraft';
    const idWeaponCraft = 'weaponcraft';
        const idMetalWorking = 'metalworking';
const idStealth = 'stealth';
    const idHiding = 'hiding';
    const idSneaking = 'sneaking';
const idSurvival = 'survival';
    const idCitySurvival = 'citysurvival';
    const idDesertSurvival = 'desertsurvival';
    const idForestSurvival = 'forestsurvival';
    const idBogHoping = 'boghoping';
    const idDuneWalking = 'dunewalking';
    const idDungeoneering = 'dungeoneering';
    const idForestry = 'forestry';
    const idIcebounding = 'icebounding';
    const idSeaFairing = 'seafairing';
    const idStreetwise = 'streetwise';
    const idTracking = 'tracking';
const idTailoring = 'tailoring';
    const idLeatherworking = 'leatherworking';
    const idWeaving = 'weaving';
const idThievery = 'thievery';
    const idLockpicking = 'lockpicking';
    const idPoisonApplication = 'poisonapplication';
const idTrade = 'trade';
    const idAppraisal = 'appraisal';
    const idConfidence = 'confidence';
        const idDarkDealing = 'darkdealing';
const idTraps = 'traps';
    const idPierceTheVeil = 'piercetheveil';
    const idTrapDisarm = 'trapdisarm';
//metamagic skills
const idAimedCasting = 'aimedcasting';
const idAnchoredCasting = 'anchoredcasting';
const idDistantCasting = 'distantcasting';
const idDurableCasting = 'durablecasting';
const idEchoCasting = 'echocasting';
const idEfficientTeleportation = 'efficientteleportation';
const idFocusedCasting = 'focusedcasting';
const idGeomentricCasting = 'geomentriccasting';
const idPreciseCasting = 'precisecasting';
const idQuickCasting = 'quickcasting';
const idReboundedSpell = 'reboundedspell';
const idSplitCasting = 'splitcasting';
const idStillCasting = 'stillcasting';
const idTranquilCasting = 'tranquilcasting';
//magic skills
const idAirMagic = 'airmagic';
    const idConcusiveShock = 'concusiveshock';
    const idDrivingWind = 'drivingwind';
    const idAerialBoost = 'aerialboost';
const idDarkMagic = 'darkmagic';
    const idPersistantShadow = 'persistantshadow';
    const idClingingShadow = 'clingingshadow';
    const idInfernalEssence = 'infernalessence';
const idDeathMagic = 'deathmagic';
    const idLifeLeech = 'lifeleech';
    const idStrongFears = 'strongfears';
    const idPotentPoison = 'potentpoison';
const idEarthMagic = 'earthmagic';
    const idCausticCling = 'causticcling';
    const idDenseEarth = 'denseearth';
    const idSiesmicMagic = 'siesmicmagic';
const idFireMagic = 'firemagic';
    const idFierryBurst = 'fierryburst';
    const idAfterburn = 'afterburn';
    const idBlazingHeat = 'blazingheat';
const idLifeMagic = 'lifemagic';
    const idPotentHealing = 'potenthealing';
    const idRestorativeSpell = 'restorativespell';
    const idCommandingSpell = 'commandingspell';
const idLightMagic = 'lightmagic';
    const idSolarEssence = 'soloressence';
    const idBurningRadiance = 'burningradiance';
    const idPersistantLight = 'persistantlight';
const idWaterMagic = 'watermagic';
    const idJaggedIce = 'jaggedice';
    const idDrivingWave = 'drivingwave';
    const idEndlessOcean = 'endlessocean';
const idInnerChi = 'innerchi';
//martial skills
const idDoubleAttack = 'doubleattack';
const idDualWielding = 'dualwielding';
const idKeenShot = 'keenshot';
const idMartialRage = 'martialrage';
const idMeleeFocus = 'meleefocus';
const idTwoHandedWielding = 'twohandedwielding';
//armor skills
const idLightArmor = 'lightarmor';
    const idGraceInCombat = 'graceincombat';
const idMediumArmor = 'mediumarmor';
    const idDenseScales = 'densescales';
const idHeavyArmor = 'heavyarmor';
    const idMentalArmor = 'mentalarmor';
const idUnarmoedDefense ='unarmoreddefense';
const idShields = 'shields';
    const idShieldBash = 'shieldbash';
//weapon skills
const idArchery = 'archery';
    const idDrillShot = 'drillshot';
    const idEntanglingShot = 'entanglingshot';
    const idImbueArrow = 'imbuearrow';
    const idStunShot = 'stunshot';
const idAxes = 'axes';
    const idCleavingSlice = 'cleavingslice';
    const idHeadChop = 'headchop';
    const idJaggedSlice = 'jaggedslice';
const idCrossbows = 'crossbows';
    const idPiercingBolt = 'piercingbolt';
    const idPenetratingStrike = 'penetratingstrike';
    const idScatterShot = 'scattershot';
const idHammers = 'hammers';
    const idOverheadSmash = 'overheadsmash';
    const idHammerThrow = 'hammerthrow';
    const idLowSweep = 'lowsweep';
const idMaces = 'maces';
    const idBellRinger = 'bellringer';
    const idKneeBreaker = 'kneebreaker';
    const idFullSwing = 'fullswing';
const idSmallBlades = 'smallblades';
    const idBladeThrowing = 'bladethrowing';
    const idOffHandParry = 'offhandparry';
    const idJaggedStab = 'jaggedstab';
const idSpears = 'spears';
    const idFirstStrike = 'firststrike';
    const idOverextend = 'overextend';
    const idSpearThrowing = 'spearthrowing';
const idStaves = 'staves';
    const idImprovedTrip = 'improvedtrip';
    const idMultiHit = 'multihit';
    const idShaftDefense = 'shaftdefense';
const idSwords = 'swords';
    const idDualStrike = 'dualstrike';
    const idJaggedSlash = 'jaggedslash';
    const idSwordRebuke = 'swordrebuke';
const idUnarmedCombat = 'unarmedcombat';
    const idBoneBreaker = 'bonebreaker';
    const idPressurePoints = 'pressurepoints';
    const idDeflection = 'deflection';
//resists
const idPoison = 'poison';
const idDisease = 'disease';
const idMental = 'mental';
const idBlunt = 'blunt';
const idPierce = 'pierce';
const idSlash = 'slash';
//traits
const idTrait = 'trait';
const idHerbalSpirit = 'herbalspirit';
const idMeleeWeaponProdigy = 'meleeweaponprodigy';


const tableIsTemplate = [idStats,idMovement,idCombatStats,idSkills,idResists,idSpellResists,idEfficiencies];

const capitalize = function(string){
    return string.replace(/(?:^|\s+|\/)[a-z]/ig,(letter)=>letter.toUpperCase());
};

const getFieldID = (iPage,iZone,iTable,iField,iRowID) => {  // <<<------  duplicate in 
    let theFieldID = '';//iPage;
    if (iZone!=='') { theFieldID += iZone}; //removed '='
    if (iTable!=='') { 
        if (tableIsTemplate.indexOf(iTable)!==(-1)) {
            theFieldID += '-'+iRowID+'-'+iField
        } else {
            theFieldID += '-'+iTable;
            if (iRowID!=='') {
                theFieldID = 'repeating_'+theFieldID+'_'+iRowID+'_'  //specific field
            } else {
                theFieldID = 'repeating_'+theFieldID+'_$X_'  //used in Affects and KFormula => formula = 'SUM of '+iTable+'.iField' => '(@{'+theFieldID+'})'
            }
            theFieldID += iField;
        }
    } else {
        if (iField!=='') { 
            theFieldID += '-'+iField
        };
    };

    //special fields
    if (iPage===idHeader) {
        if (iZone===idCharacter) {
            if (iField===idName) {
            theFieldID = 'character_name'
            }
            if (iField===idToken) {
                theFieldID = 'character_token'
            }
            if (iField===idAvatar) {
                theFieldID = 'character_avatar'
            }
        }
    }

    return theFieldID;
};

const getListEntry = (iRoller,iDisplayName,iDefault,iDecimals,iShortDesc,iInfoDesc,iInfoURL,iFormulas,iCalcs,iFuncs,
                      iSkillType=idNA,iRarity=idCommon,iParents=[],iSubskills=[],iStats=[],iEffects=[]) => {
    const theEntry = {
        [idRoller] : iRoller,
        [idDisplayName] : iDisplayName,
        [idDefault] : iDefault,
        [idDecimals] : iDecimals,
        [idHelpDesc] : iShortDesc,
        [idInfoDesc] : iInfoDesc,
        [idInfoURL] : iInfoURL,
        [idFormulas] : iFormulas, // includes formula and kformula
        [idCalcs] : iCalcs, // includes calcdesc,calc,calcparams  =>>>  There can only be one! (like Highlander) ...per field.  uses string like formula,not array.
        [idFuncs] : iFuncs, // inlcude funcdesc, func, func params
        [idSkillType] : iSkillType,
        [idRarity] : iRarity,
        [idParents] : iParents,
        [idSubSkills] : iSubskills,
        [idStats] : iStats,
        [idEffects] : iEffects, //applies these effects -> effectIDs
        //to be populated when doing processing of schema
        [idAffects] : [], //using KFormula and CalcAffects -> fills the trigger{affects:}
        [idCategories] : [], //use hiearchy to determine categories => skills: {lightarmor: }} = [skills,armor,light] or combatstats: {movement: {movementspeed: movepenalty: }} or combatstats: {resources: {health: mana: stamina :}}
    };

    return theEntry;
};

const createSublist = (iList,iListValues) => {
    const newList = {};
    //for (const theValue of iValues) {
    //    newList[theValue] = iList[theValue]
    //}

    if ((iList) && (iListValues)) {
        if (iListValues.length > 0) {
            iListValues.forEach(theValue => {
                newList[theValue] = iList[theValue];
            })
        };
    };

    return newList;
};

const schemaCore = {
    [idHelpButton] : {
        [idHelpDesc] : '',
        [idFormula] : '',
        [idInfoButton] : ''
    },
    [idInfoButton] : {
        [idInfoURL] : '',
        [idDisplayName] : '',
        [idInfoDesc] : '',
        [idInfoSummary] : '',
        [idInfoDetail] : '',
        [idTemplates] : '',
        [idTables] : ''
    },
    [idStats] : {
        [idStrength] : getListEntry(idDefault,'Strength','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idMaxStat] : {
                    [idFormula] : '14 + '+capitalize(idLevel),
                    [idKFormula] : '14+@{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
        ),
        [idAgility] : getListEntry(idDefault,'Agility','0','0',
            'this is shorter',
            'this is longer',
            '',
            {
                [idMaxStat] : {
                    [idFormula] : '14 + '+capitalize(idLevel),
                    [idKFormula] : '14+@{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
        ),
        [idDexterity] : getListEntry(idDefault,'Dexterity','0','0',
            'this is shorter',
            'this is longer',
            '',
            {
                [idMaxStat] : {
                    [idFormula] : '14 + '+capitalize(idLevel),
                    [idKFormula] : '14+@{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
        ),
        [idConstitution] : getListEntry(idDefault,'Constitution','0','0',
            'this is shorter',
            'this is longer',
            '',
            {
                [idMaxStat] : {
                    [idFormula] : '14 + '+capitalize(idLevel),
                    [idKFormula] : '14+@{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
        ),
        [idEndurance] : getListEntry(idDefault,'Endurance','0','0',
            'this is shorter',
            'this is longer',
            '',
            {
                [idMaxStat] : {
                    [idFormula] : '14 + '+capitalize(idLevel),
                    [idKFormula] : '14+@{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
        ),
        [idIntelligence] : getListEntry(idDefault,'Intelligence','0','0',
            'this is shorter',
            'this is longer',
            '',
            {
                [idMaxStat] : {
                    [idFormula] : '14 + '+capitalize(idLevel),
                    [idKFormula] : '14+@{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
        ),
        [idWisdom] : getListEntry(idDefault,'Wisdom','0','0',
            'this is shorter',
            'this is longer',
            '',
            {
                [idMaxStat] : {
                    [idFormula] : '14 + '+capitalize(idLevel),
                    [idKFormula] : '14+@{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
        ),
        [idCharisma] : getListEntry(idDefault,'Charisma','0','0',
            'this is shorter',
            'this is longer',
            '',
            {
                [idMaxStat] : {
                    [idFormula] : '14 + '+capitalize(idLevel),
                    [idKFormula] : '14+@{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
        ),
        [idLuck] : getListEntry(idDefault,'Luck','0','0',
            'this is shorter',
            'this is longer',
            '',
            {
                [idMaxStat] : {
                    [idFormula] : '14 + '+capitalize(idLevel),
                    [idKFormula] : '14+@{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
        ),
    },
    [idMovement] : {
        [idMovementSpeed] : getListEntry(idDefault,'Movement Speed','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '25 + (' + capitalize(idAgility) + '/2) + ' + capitalize(idMovePenalty),
                    [idKFormula] : '25 + (@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility) + '}/2) + ' + 
                                    '@{' + getFieldID(idChaosSeed,idMovement,idMovement,idTotal,idMovePenalty) + '}',
                },
            },
            {
            },
            {
            },
        ),
        [idMovePenalty] : getListEntry(idDefault,'Movement Penalty','0','0',
            'you move slow',
            'really really really slow',
            'https://files.d20.io/images/429024424/_nOuK8lqx6W8T83h2muphw/max.png?1739606299',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
    },
    [idResists] : {
        [idPoison] : getListEntry(idDefault,'Poison','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idDisease] : getListEntry(idDefault,'Disease','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idMental] : getListEntry(idDefault,'Mental','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idBlunt] : getListEntry(idDefault,'Blunt','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idPierce] : getListEntry(idDefault,'Pierce','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idSlash] : getListEntry(idDefault,'Slash','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
    },
    [idSpellResists] : {
        [idAirMagic] : getListEntry(idDefault,'Air Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idDarkMagic] : getListEntry(idDefault,'Dark Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idDeathMagic] : getListEntry(idDefault,'Death Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idEarthMagic] : getListEntry(idDefault,'Earth Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idFireMagic] : getListEntry(idDefault,'Fire Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idLifeMagic] : getListEntry(idDefault,'Life Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idLightMagic] : getListEntry(idDefault,'Light Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idWaterMagic] : getListEntry(idDefault,'Water Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
    },
    [idEfficiencies] : {
        [idAirMagic] : getListEntry(idDefault,'Air Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idDarkMagic] : getListEntry(idDefault,'Dark Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idDeathMagic] : getListEntry(idDefault,'Death Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idEarthMagic] : getListEntry(idDefault,'Earth Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idFireMagic] : getListEntry(idDefault,'Fire Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idLifeMagic] : getListEntry(idDefault,'Life Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idLightMagic] : getListEntry(idDefault,'Light Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idWaterMagic] : getListEntry(idDefault,'Water Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
    },
    [idCombatStats] : {
        [idCombatSpeed] : getListEntry(idInititive,'Combat Speed','0','0',
            'you are first',
            'well, sometimes you are first',
            '',
            {
                [idBase] : {
                    [idFormula] : '15 + ' + capitalize(idAgility) + ' + (' + capitalize(idLuck) + '/10) + ' + capitalize(idCelerity),
                    [idKFormula] : '15 + @{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility) + '} + ' + 
                                    '(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck) + '}/10) +' +
                                    '@{' + getFieldID(idChaosSeed,idSkills,idSkills,idTotal,idCelerity) + '}',
                },
            },
            {
            },
            {
            },
        ),
        [idArmorValue] : getListEntry(idDefault,'Armor Value','0','0',
            'you move slow',
            'really really really slow',
            'https://files.d20.io/images/429024424/_nOuK8lqx6W8T83h2muphw/max.png?1739606299',
            {
                [idBase] : {
                    [idFormula] : '(' + capitalize(idMoveTotal) + '/5)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idMentalValue] : getListEntry(idDefault,'Mental Value','0','0',
            'you move slow',
            'really really really slow',
            'https://files.d20.io/images/429024424/_nOuK8lqx6W8T83h2muphw/max.png?1739606299',
            {
                [idBase] : {
                    [idFormula] : '(' + capitalize(idMoveTotal) + '/5)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idDodgeValue] : getListEntry(idDefault,'Dodge Value','0','0',
            'you move slow',
            'really really really slow',
            'https://files.d20.io/images/429024424/_nOuK8lqx6W8T83h2muphw/max.png?1739606299',
            {
                [idBase] : {
                    [idFormula] : '(' + capitalize(idMoveTotal) + '/5)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idHealth] : getListEntry(idDefault,'Health','0','0',
            'you move slow',
            'really really really slow',
            'https://files.d20.io/images/429024424/_nOuK8lqx6W8T83h2muphw/max.png?1739606299',
            {
                [idBase] : {
                    [idFormula] : '(' + capitalize(idMoveTotal) + '/5)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idStamina] : getListEntry(idDefault,'Stamina','0','0',
            'you move slow',
            'really really really slow',
            'https://files.d20.io/images/429024424/_nOuK8lqx6W8T83h2muphw/max.png?1739606299',
            {
                [idBase] : {
                    [idFormula] : '(' + capitalize(idMoveTotal) + '/5)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idMana] : getListEntry(idDefault,'Mana','0','0',
            'you move slow',
            'really really really slow',
            'https://files.d20.io/images/429024424/_nOuK8lqx6W8T83h2muphw/max.png?1739606299',
            {
                [idBase] : {
                    [idFormula] : '(' + capitalize(idMoveTotal) + '/5)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idManaRegen] : getListEntry(idDefault,'Mana Regen','0','0',
            'you move slow',
            'really really really slow',
            'https://files.d20.io/images/429024424/_nOuK8lqx6W8T83h2muphw/max.png?1739606299',
            {
                [idBase] : {
                    [idFormula] : '(' + capitalize(idMoveTotal) + '/5)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idStaminaRegen] : getListEntry(idDefault,'Stamina Regen','0','0',
            'you move slow',
            'really really really slow',
            'https://files.d20.io/images/429024424/_nOuK8lqx6W8T83h2muphw/max.png?1739606299',
            {
                [idBase] : {
                    [idFormula] : '(' + capitalize(idMoveTotal) + '/5)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idHealthRegen] : getListEntry(idDefault,'Health Regen','0','0',
            'you move slow',
            'really really really slow',
            'https://files.d20.io/images/429024424/_nOuK8lqx6W8T83h2muphw/max.png?1739606299',
            {
                [idBase] : {
                    [idFormula] : '(' + capitalize(idMoveTotal) + '/5)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
    },
    [idSkills] : {
        [idAgriculture] : getListEntry(idDefault,'Agriculture','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idTradeskill,
            idCommon,
            [],
            [idFolkLore,idNaturalist,idPersistance],
            [idStrength,idWisdom],
        ),
        [idFolkLore] : getListEntry(idDefault,'Folk Lore','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idUncommon,
            [idAgriculture],
            [],
            [idIntelligence],
        ),
        [idNaturalist] : getListEntry(idDefault,'Naturalist','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idUncommon,
            [idAgriculture],
            [],
            [idIntelligence],
        ),
        [idPersistance] : getListEntry(idDefault,'Persistance','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idTradeskill,
            idRare,
            [idAgriculture],
            [],
            [idStrength,idWisdom],
        ),
        [idAlchemy] : getListEntry(idDefault,'Alchemy','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idCommon,
            [],
            [idExplosive],
            [idIntelligence],
        ),
        [idExplosive] : getListEntry(idDefault,'Explosive','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idRare,
            [idAlchemy],
            [],
            [idIntelligence],
        ),
        [idAnimalEmpathy] : getListEntry(idDefault,'Animal Empathy','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idAnimalHusbandry,idBeastBonding,idExoticBeasts,idPrimalMind],
            [idCharisma],
        ),
        [idAnimalHusbandry] : getListEntry(idDefault,'Animal Husbandry','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idAnimalEmpathy],
            [],
            [idCharisma],
        ),
        [idBeastBonding] : getListEntry(idDefault,'Beast Bonding','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idAnimalEmpathy],
            [],
            [idCharisma],
        ),
        [idExoticBeasts] : getListEntry(idDefault,'Exotic Beasts','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idAnimalEmpathy],
            [],
            [idCharisma],
        ),
        [idPrimalMind] : getListEntry(idDefault,'Primal Mind','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idAnimalEmpathy],
            [],
            [idCharisma],
        ),
        [idAthletics] : getListEntry(idDefault,'Athletics','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idClimbing,idGrappling,idJumping,idRunning,idSwimming],
            [idStrength],
        ),
        [idClimbing] : getListEntry(idDefault,'Climbing','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idAthletics],
            [],
            [idStrength],
        ),
        [idGrappling] : getListEntry(idDefault,'Grappling','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idAthletics],
            [],
            [idStrength],
        ),
        [idJumping] : getListEntry(idDefault,'Jumping','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idAthletics],
            [],
            [idStrength],
        ),
        [idRunning] : getListEntry(idDefault,'Running','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idAthletics],
            [],
            [idStrength],
        ),
        [idSwimming] : getListEntry(idDefault,'Swimming','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idAthletics],
            [],
            [idStrength],
        ),
        [idBalance] : getListEntry(idDefault,'Balance','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idEscape,idFalling,idTumbling],
            [idAgility],
        ),
        [idEscape] : getListEntry(idDefault,'Escape','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idBalance],
            [],
            [idAgility],
        ),
        [idFalling] : getListEntry(idDefault,'Falling','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idBalance],
            [],
            [],
        ),
        [idTumbling] : getListEntry(idDefault,'Tumbling','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idBalance],
            [],
            [idAgility],
        ),
        [idBrewing] : getListEntry(idDefault,'Brewing','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idCommon,
            [],
            [idDistilling],
            [idConstitution],
        ),
        [idDistilling] : getListEntry(idDefault,'Distilling','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idUncommon,
            [idBrewing],
            [],
            [idConstitution],
        ),
        [idConcentration] : getListEntry(idDefault,'Concentration','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idCelerity,idFocus,idManaManipulation],
            [idConstitution],
        ),
        [idCelerity] : getListEntry(idDefault,'Celerity','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idConcentration],
            [],
            [idConstitution],
        ),
        [idFocus] : getListEntry(idDefault,'Focus','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idConcentration],
            [],
            [idConstitution],
        ),
        [idManaManipulation] : getListEntry(idDefault,'Mana Manipulation','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idConcentration],
            [],
            [],
        ),
        [idConstruction] : getListEntry(idDefault,'Construction','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idCommon,
            [],
            [idCarpentry,idMasonry,idMaterials],
            [idStrength],
        ),
        [idCarpentry] : getListEntry(idDefault,'Carpentry','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idTradeskill,
            idUncommon,
            [idConstruction],
            [],
            [idStrength,idDexterity],
        ),
        [idMasonry] : getListEntry(idDefault,'Masonry','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idUncommon,
            [idConstruction],
            [],
            [idStrength],
        ),
        [idMaterials] : getListEntry(idDefault,'Materials','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idUncommon,
            [],
            [idCitySurvival,idDesertSurvival,idForestSurvival],
            [idWisdom],
        ),
        [idConversation] : getListEntry(idDefault,'Conversation','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idInuendo,idLeadership,idWarLeader],
            [idCharisma],
        ),
        [idInuendo] : getListEntry(idDefault,'Inuendo','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idConversation],
            [],
            [idLuck],
        ),
        [idLeadership] : getListEntry(idDefault,'Leadership','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idConversation],
            [],
            [idCharisma],
        ),
        [idWarLeader] : getListEntry(idDefault,'War Leader','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idConversation],
            [],
            [idCharisma],
        ),
        [idCooking] : getListEntry(idDefault,'Cooking','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idCommon,
            [],
            [],
            [idEndurance],
        ),
        [idDeception] : getListEntry(idDefault,'Deception','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idDisguise,idForgery,idSeduction],
            [idCharisma],
        ),
        [idDisguise] : getListEntry(idDefault,'Disguise','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idDeception],
            [],
            [idCharisma],
        ),
        [idForgery] : getListEntry(idDefault,'Forgery','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idUncommon,
            [idDeception],
            [],
            [idIntelligence,idCharisma],
        ),
        [idSeduction] : getListEntry(idDefault,'Seduction','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idDeception],
            [],
            [idCharisma],
        ),
        [idEnchanting] : getListEntry(idDefault,'Enchanting','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idCommon,
            [],
            [idJewelling],
            [idWisdom],
        ),
        [idJewelling] : getListEntry(idDefault,'Jewelling','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idUncommon,
            [idEnchanting],
            [],
            [idAgility],
        ),
        [idEntertain] : getListEntry(idDefault,'Entertain','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idCommon,
            [],
            [idArtistry,idPercussion,idSinging,idStringInstrument,idStringInstrument,idWindInstrument,idExoticInstrument],
            [idCharisma],
        ),
        [idArtistry] : getListEntry(idDefault,'Artistry','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idEntertain],
            [],
            [idCharisma,idEndurance],
        ),
        [idPercussion] : getListEntry(idDefault,'Percussion','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idEntertain],
            [],
            [idCharisma],
        ),
        [idSinging] : getListEntry(idDefault,'Singing','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idEntertain],
            [],
            [idCharisma],
        ),
        [idStringInstrument] : getListEntry(idDefault,'String Instrument','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idUncommon,
            [idEntertain],
            [],
            [idCharisma,idDexterity],
        ),
        [idWindInstrument] : getListEntry(idDefault,'Wind Instrument','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idUncommon,
            [idEntertain],
            [],
            [idCharisma,idAgility],
        ),
        [idExoticInstrument] : getListEntry(idDefault,'Exotic Instrument','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [],
            [idEntertain],
            [],
            [idIntelligence],
        ),
        [idFishing] : getListEntry(idDefault,'Fishing','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idCommon,
            [],
            [idAngling],
            [idDexterity],
        ),
        [idAngling] : getListEntry(idDefault,'Angling','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idUncommon,
            [idFishing],
            [],
            [idStrength],
        ),
        [idFletching] : getListEntry(idDefault,'Fletching','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idCommon,
            [],
            [],
            [idDexterity],
        ),
        [idFortitude] : getListEntry(idDefault,'Fortitude','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idEntryArc,idShakeItOff,idDivinity],
            [idEndurance],
        ),
        [idEntryArc] : getListEntry(idDefault,'Entry Arc','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idFortitude],
            [],
            [idEndurance],
        ),
        [idShakeItOff] : getListEntry(idDefault,'Shake It Off','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idFortitude],
            [],
            [idEndurance],
        ),
        [idDivinity] : getListEntry(idDefault,'Divinity','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idFortitude],
            [],
            [idEndurance],
        ),
        [idGambling] : getListEntry(idDefault,'Gambling','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idTactics,idRandomThoughts],
            [idLuck],
        ),
        [idTactics] : getListEntry(idDefault,'Tactics','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idGambling],
            [],
            [idLuck],
        ),
        [idRandomThoughts] : getListEntry(idDefault,'Random Thoughts','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idRare,
            [idGambling],
            [],
            [idLuck,idCharisma],
        ),
        [idGatherInformation] : getListEntry(idDefault,'Gather Information','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [idLipReading,idConviction,idScepticism],
            [],
            [idCharisma],
        ),
        [idLipReading] : getListEntry(idDefault,'Lip Reading','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idGatherInformation],
            [],
            [idIntelligence],
        ),
        [idConviction] : getListEntry(idDefault,'Conviction','0','0',
            'survial is funnny',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idGatherInformation],
            [],
            [idCharisma],
        ),
        [idScepticism] : getListEntry(idDefault,'Scepticism','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idGatherInformation],
            [],
            [idCharisma],
        ),
        [idHealing] : getListEntry(idDefault,'Healing','0','0',
            'healing is fun',
            'healing is so much fun i can\n hardly believe it',
            'https://files.d20.io/images/418259312/IRr6MU5n3fch__TqXVUNYg/max.png?1732095184',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idHealing)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idCombatMedic],
            [idLuck],
            [idHealing],
        ),
        [idCombatMedic] : getListEntry(idDefault,'Combat Medic','0','0',
            'ooo magic healing',
            'ooooo i can boost magical healing',
            'https://files.d20.io/images/418259312/IRr6MU5n3fch__TqXVUNYg/max.png?1732095184',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idCombatMedic)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idMaxRank] : {
                    [idCalcDesc] : capitalize(idCombatMedic)+' '+idMaxRank+' cannot excede '+capitalize(idHealing)+' '+idMaxRank,
                    [idCalc] : idCalcMinOf,
                    [idCalcParams] : getFieldID(idChaosSeed,idSkills,idSkills,idMaxRank,idHealing)+'|'+getFieldID(idChaosSeed,idSkills,idSkills,idMaxRank,idCombatMedic),
                },
            },
            {
            },
            idEveryday,
            idUncommon,
            [idHealing],
            [],
            [idLuck],
            [idCombatMedic],
        ),
        [idHygiene] : getListEntry(idDefault,'Hygiene','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idHealing],
            [],
            [],
        ),
        [idNecromancy] : getListEntry(idDefault,'Necromancy','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idHealing],
            [],
            [idWisdom],
        ),
        [idAnatomy] : getListEntry(idDefault,'Anatomy','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idHealing],
            [],
            [idIntelligence],
        ),
        [idHerbLore] : getListEntry(idDefault,'Herb Lore','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idDetoxification,idPoisonMaking],
            [idWisdom,idDexterity],
        ),
        [idDetoxification] : getListEntry(idDefault,'Detoxification','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idHerbLore],
            [],
            [],
        ),
        [idPoisonMaking] : getListEntry(idDefault,'Poison Making','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idUncommon,
            [idHerbLore],
            [],
            [idIntelligence,idDexterity],
        ),
        [idInstillFear] : getListEntry(idDefault,'Instill Fear','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idAggression,idTaunt,idTorture],
            [idStrength,idCharisma]
        ),
        [idAggression] : getListEntry(idDefault,'Aggression','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idInstillFear],
            [],
            [idStrength],
        ),
        [idTaunt] : getListEntry(idDefault,'Taunt','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idInstillFear],
            [],
            [idCharisma],
        ),
        [idTorture] : getListEntry(idDefault,'Torture','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idInstillFear],
            [],
            [],
        ),
        [idIntuition] : getListEntry(idDefault,'Intuition','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idCommon,
            [idSelfAwareness],
            [],
            [idIntelligence,idWisdom],
        ),
        [idSelfAwareness] : getListEntry(idDefault,'Self Awareness','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idUncommon,
            [idIntuition],
            []
            [idIntelligence,idWisdom],
        ),
        [idInvestigation] : getListEntry(idDefault,'Investigation','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [idSearch,idRunicMagic,idZealotry],
            [],
            [idIntelligence],
        ),
        [idSearch] : getListEntry(idDefault,'Search','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
\            },
            {
            },
            idEveryday,
            idUncommon,
            [idInvestigation],
            [],
            [idIntelligence],
        ),
        [idRunicMagic] : getListEntry(idDefault,'Runic Magic','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idInvestigation],
            [],
            [idIntelligence],
        ),
        [idZealotry] : getListEntry(idDefault,'Zealotry','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idInvestigation],
            [],
            [idCharisma],
        ),
        [idMetaGaming] : getListEntry(idDefault,'Meta Gaming','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idAnalyze,idWorship],
            [idLuck],
        ),
        [idAnalyze] : getListEntry(idDefault,'Analyze','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idMetaGaming],
            [],
            [idIntelligence],
        ),
        [idWorship] : getListEntry(idDefault,'Worship','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idMetaGaming],
            [],
            [idWisdom],
        ),
        [idPerception] : getListEntry(idDefault,'Perception','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idListening,idDetection,idPeriphery],
            [idWisdom],
        ),
        [idListening] : getListEntry(idDefault,'Listening','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idUncommon,
            [idPerception],
            [],
            [idWisdom,idIntelligence],
        ),
        [idDetection] : getListEntry(idDefault,'Detection','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idRare,
            [idPerception],
            [],
            [idWisdom,idIntelligence],
        ),
        [idPeriphery] : getListEntry(idDefault,'Periphery','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idPerception],
            [],
            [idWisdom],
        ),
        [idPuzzleSolving] : getListEntry(idDefault,'Puzzle Solving','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [],
            [idLuck],
        ),
        [idResearch] : getListEntry(idDefault,'Research','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idCommon,
            [],
            [idAncientHistory,idAstronomy,idEngineering,idGeography,idHigherPowers,idLocalPolitics],
            [idIntelligence],
        ),
        [idAncientHistory] : getListEntry(idDefault,'Ancient History','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idResearch],
            [],
            [idIntelligence],
        ),
        [idAstronomy] : getListEntry(idDefault,'Astronomy','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idResearch],
            [],
            [idIntelligence],
        ),
        [idEngineering] : getListEntry(idDefault,'Engineering','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idUncommon,
            [idResearch],
            [],
            [idIntelligence],
        ),
        [idGeography] : getListEntry(idDefault,'Geography','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idResearch],
            [],
            [idIntelligence],
        ),
        [idHigherPowers] : getListEntry(idDefault,'Higher Powers','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idResearch],
            [],
            [idIntelligence],
        ),
        [idLocalPolitics] : getListEntry(idDefault,'Local Politics','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idResearch],
            [],
            [idIntelligence],
        ),
        [idRiding] : getListEntry(idDefault,'Riding','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idDriving,idMountedCombat,idArialCombat,idAquaticCombat],
            [idAgility],
        ),
        [idDriving] : getListEntry(idDefault,'Driving','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idUncommon,
            [idDriving],
            [],
            [idAgility,idDexterity],
        ),
        [idMountedCombat] : getListEntry(idDefault,'Mounted Combat','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idRiding],
            [],
            [idAgility],
        ),
        [idArialCombat] : getListEntry(idDefault,'Arial Combat','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idDriving],
            [],
            [idAgility],
        ),
        [idAquaticCombat] : getListEntry(idDefault,'Aquatic Combat','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idRare,
            [idDriving],
            [],
            [idAgility,idDexterity],
        ),
        [idSailing] : getListEntry(idDefault,'Sailing','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idCommon,
            [],
            [idShipBuilding],
            [idDexterity],
        ),
        [idShipBuilding] : getListEntry(idDefault,'Ship Building','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idTradeskill,
            idUncommon,
            [idSailing],
            [],
            [idDexterity,idIntelligence],
        ),
        [idScavenging] : getListEntry(idDefault,'Scavenging','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idCommon,
            [],
            [],
            [idLuck],
        ),
        [idScribing] : getListEntry(idDefault,'Scribing','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idCommon,
            [],
            [idBookBinding],
            [idIntelligence],
        ),
        [idBookBinding] : getListEntry(idDefault,'Book Binding','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idUncommon,
            [idScribing],
            [],
            [idIntelligence],
        ),
        [idSmithing] : getListEntry(idDefault,'Smithing','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idCommon,
            [],
            [idArmorForging,idGemCraft,idWeaponCraft,idMetalWorking],
            [idStrength],
        ),
        [idArmorForging] : getListEntry(idDefault,'Armor Forging','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idUncommon,
            [idSmithing],
            [],
            [idIntelligence],
        ),
        [idGemCraft] : getListEntry(idDefault,'Gemcraft','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idUncommon,
            [idSmithing],
            [],
            [],
        ),
        [idWeaponCraft] : getListEntry(idDefault,'Weaponcraft','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idUncommon,
            [idSmithing],
            [],
            [idStrength],
        ),
        [idMetalWorking] : getListEntry(idDefault,'Metal Working','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idRare,
            [idSmithing],
            [],
            [idIntelligence],
        ),
        [idStealth] : getListEntry(idDefault,'Stealth','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idHiding,idSneaking],
            [idAgility],
        ),
        [idHiding] : getListEntry(idDefault,'Hiding','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idStealth],
            [],
            [idAgility],
        ),
        [idSneaking] : getListEntry(idDefault,'Sneaking','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idStealth],
            [],
            [idAgility],
        ),
        [idSurvival] : getListEntry(idDefault,'Survival','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idCitySurvival,idDesertSurvival,idForestSurvival,idBogHoping,idDuneWalking,idDungeoneering,idIcebounding,idSeaFairing,idStreetwise,idTracking],
            [idWisdom],
        ),
        [idCitySurvival] : getListEntry(idDefault,'City Survival','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idSurvival],
            [],
            [idWisdom],
        ),
        [idDesertSurvival] : getListEntry(idDefault,'Desert Survival','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idSurvival],
            [],
            [idWisdom],
        ),
        [idForestSurvival] : getListEntry(idDefault,'Forest Survival','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idSurvival],
            [],
            [idWisdom],
        ),
        [idBogHoping] : getListEntry(idDefault,'Bog Hoping','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idSurvival],
            [],
            [idWisdom],
        ),
        [idDuneWalking] : getListEntry(idDefault,'Dune Walking','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idSurvival],
            [],
            [idWisdom],
        ),
        [idDungeoneering] : getListEntry(idDefault,'Dungeoneering','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idSurvival],
            [],
            [idWisdom],
        ),
        [idForestry] : getListEntry(idDefault,'Forestry','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idSurvival],
            [],
            [idWisdom],
        ),
        [idIcebounding] : getListEntry(idDefault,'Ice Bounding','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idSurvival],
            [],
            [idWisdom],
        ),
        [idSeaFairing] : getListEntry(idDefault,'Sea Fairing','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idUncommon,
            [idSurvival],
            [],
            [idWisdom],
        ),
        [idStreetwise] : getListEntry(idDefault,'Streetwise','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idSurvival],
            [],
            [idWisdom],
        ),
        [idTracking] : getListEntry(idDefault,'Tracking','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idSurvival],
            [],
            [idWisdom],
        ),
        [idTailoring] : getListEntry(idDefault,'Tailoring','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idCommon,
            [idLeatherworking],
            [],
            [idAgility],
        ),
        [idLeatherworking] : getListEntry(idDefault,'Leatherworking','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idUncommon,
            [idTailoring],
            [],
            [idAgility],
        ),
        [idWeaving] : getListEntry(idDefault,'Weaving','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idUncommon,
            [],
            [],
            [idDexterity],
        ),
        [idThievery] : getListEntry(idDefault,'Thievery','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idLockpicking,idPoisonApplication],
            [idDexterity,idLuck],
        ),
        [idLockpicking] : getListEntry(idDefault,'Lockpicking','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idUncommon,
            [idThievery],
            [],
            [idDexterity,idLuck],
        ),
        [idPoisonApplication] : getListEntry(idDefault,'Poison Application','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idUncommon,
            [idThievery],
            [],
            [idDexterity,idLuck],
        ),
        [idTrade] : getListEntry(idDefault,'Trade','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
                [idStat] : {
                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
                    [idCalc] : idCalcStat,
                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),
                },
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idAppraisal,idConfidence,idDarkDealing],
            [idIntelligence,idCharisma],
        ),
        [idAppraisal] : getListEntry(idDefault,'Appraisal','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idTrade],
            [],
            [idIntelligence],
        ),
        [idConfidence] : getListEntry(idDefault,'Confidence','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idTrade],
            [],
            [idCharisma],
        ),
        [idDarkDealing] : getListEntry(idDefault,'Dark Dealing','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idTrade],
            [],
            [idCharisma],
        ),
        [idTraps] : getListEntry(idDefault,'Traps','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idPierceTheVeil,idTrapDisarm],
            [idDexterity],
        ),
        [idPierceTheVeil] : getListEntry(idDefault,'Pierce The Viel','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idTraps],
            [],
            [idLuck],
        ),
        [idTrapDisarm] : getListEntry(idDefault,'Trap Disarm','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idUncommon,
            [idTraps],
            [],
            [idDexterity],
        ),
//metamagic skills
        [idAimedCasting] : getListEntry(idDefault,'Aimed Casting','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMetaMagic,
            idUncommon,
            [idAirMagic,idDarkMagic,idDeathMagic,idEarthMagic,idFireMagic,idLifeMagic,idLightMagic,idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idAnchoredCasting] : getListEntry(idDefault,'Anchored Casting','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMetaMagic,
            idRare,
            [idAirMagic,idDarkMagic,idDeathMagic,idEarthMagic,idFireMagic,idLifeMagic,idLightMagic,idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idDistantCasting] : getListEntry(idDefault,'Distant Casting','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMetaMagic,
            idUncommon,
            [idAirMagic,idDarkMagic,idDeathMagic,idEarthMagic,idFireMagic,idLifeMagic,idLightMagic,idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idDurableCasting] : getListEntry(idDefault,'Durable Casting','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMetaMagic,
            idUncommon,
            [idAirMagic,idDarkMagic,idDeathMagic,idEarthMagic,idFireMagic,idLifeMagic,idLightMagic,idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idEchoCasting] : getListEntry(idDefault,'Echo Casting','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMetaMagic,
            idRare,
            [idAirMagic,idDarkMagic,idDeathMagic,idEarthMagic,idFireMagic,idLifeMagic,idLightMagic,idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idEfficientTeleportation] : getListEntry(idDefault,'Efficient Teleportation','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMetaMagic,
            idUncommon,
            [idAirMagic,idDarkMagic,idDeathMagic,idEarthMagic,idFireMagic,idLifeMagic,idLightMagic,idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idFocusedCasting] : getListEntry(idDefault,'Focused Casting','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMetaMagic,
            idUncommon,
            [idAirMagic,idDarkMagic,idDeathMagic,idEarthMagic,idFireMagic,idLifeMagic,idLightMagic,idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idGeomentricCasting] : getListEntry(idDefault,'Geomentric Casting','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMetaMagic,
            idUncommon,
            [idAirMagic,idDarkMagic,idDeathMagic,idEarthMagic,idFireMagic,idLifeMagic,idLightMagic,idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idPreciseCasting] : getListEntry(idDefault,'Precise Casting','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMetaMagic,
            idUncommon,
            [idAirMagic,idDarkMagic,idDeathMagic,idEarthMagic,idFireMagic,idLifeMagic,idLightMagic,idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idQuickCasting] : getListEntry(idDefault,'Quick Casting','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMetaMagic,
            idRare,
            [idAirMagic,idDarkMagic,idDeathMagic,idEarthMagic,idFireMagic,idLifeMagic,idLightMagic,idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idReboundedSpell] : getListEntry(idDefault,'Rebounded Spell','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMetaMagic,
            idRare,
            [idAirMagic,idDarkMagic,idDeathMagic,idEarthMagic,idFireMagic,idLifeMagic,idLightMagic,idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idSplitCasting] : getListEntry(idDefault,'Split Casting','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMetaMagic,
            idRare,
            [idAirMagic,idDarkMagic,idDeathMagic,idEarthMagic,idFireMagic,idLifeMagic,idLightMagic,idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idStillCasting] : getListEntry(idDefault,'Still Casting','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMetaMagic,
            idRare,
            [idAirMagic,idDarkMagic,idDeathMagic,idEarthMagic,idFireMagic,idLifeMagic,idLightMagic,idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idTranquilCasting] : getListEntry(idDefault,'Tranquil Casting','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMetaMagic,
            idRare,
            [idAirMagic,idDarkMagic,idDeathMagic,idEarthMagic,idFireMagic,idLifeMagic,idLightMagic,idWaterMagic],
            [],
            [idIntelligence],
        ),
//magic skills
        [idAirMagic] : getListEntry(idDefault,'Air Magic','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idCommon,
            [],
            [idConcusiveShock,idDrivingWind,idAerialBoost,idAimedCasting,idAnchoredCasting,idDistantCasting,idDurableCasting,idEchoCasting,idEfficientTeleportation,idFocusedCasting,idGeomentricCasting,idPreciseCasting,idQuickCasting,idReboundedSpell,idSplitCasting,idStillCasting,idTranquilCasting],
            [idIntelligence],
        ),
        [idConcusiveShock] : getListEntry(idDefault,'Concusive Shock','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idAirMagic],
            [],
            [idIntelligence],
        ),
        [idDrivingWind] : getListEntry(idDefault,'Driving Wind','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idAirMagic],
            [],
            [idIntelligence],
        ),
        [idAerialBoost] : getListEntry(idDefault,'Aerial Boost','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idAirMagic],
            [],
            [idAirMagic],
        ),
        [idDarkMagic] : getListEntry(idDefault,'Dark Magic','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idCommon,
            [],
            [idPersistantShadow,idClingingShadow,idInfernalEssence,idAimedCasting,idAnchoredCasting,idDistantCasting,idDurableCasting,idEchoCasting,idEfficientTeleportation,idFocusedCasting,idGeomentricCasting,idPreciseCasting,idQuickCasting,idReboundedSpell,idSplitCasting,idStillCasting,idTranquilCasting],
            [idIntelligence],
        ),
        [idClingingShadow] : getListEntry(idDefault,'Clinging Shadow','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idDarkMagic],
            [],
            [idIntelligence],
        ),
        [idInfernalEssence] : getListEntry(idDefault,'Infernal Essence','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idDarkMagic],
            [],
            [idIntelligence],
        ),
        [idPersistantShadow] : getListEntry(idDefault,'Persistant Shadow','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idDarkMagic],
            [],
            [idIntelligence],
        ),
        [idDeathMagic] : getListEntry(idDefault,'Death Magic','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idCommon,
            [],
            [idLifeLeech,idStrongFears,idPotentPoison,idAimedCasting,idAnchoredCasting,idDistantCasting,idDurableCasting,idEchoCasting,idEfficientTeleportation,idFocusedCasting,idGeomentricCasting,idPreciseCasting,idQuickCasting,idReboundedSpell,idSplitCasting,idStillCasting,idTranquilCasting],
            [idIntelligence],
        ),
        [idLifeLeech] : getListEntry(idDefault,'Life Leech','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idDeathMagic],
            [],
            [idIntelligence],
        ),
        [idStrongFears] : getListEntry(idDefault,'Strong Fears','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idDeathMagic],
            [],
            [idIntelligence],
        ),
        [idPotentPoison] : getListEntry(idDefault,'Potent Poison','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idDeathMagic],
            [],
            [idIntelligence],
        ),
        [idEarthMagic] : getListEntry(idDefault,'Earth Magic','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idCommon,
            [],
            [idCausticCling,idDenseEarth,idSiesmicMagic,idAimedCasting,idAnchoredCasting,idDistantCasting,idDurableCasting,idEchoCasting,idEfficientTeleportation,idFocusedCasting,idGeomentricCasting,idPreciseCasting,idQuickCasting,idReboundedSpell,idSplitCasting,idStillCasting,idTranquilCasting],
            [idIntelligence],
        ),
        [idCausticCling] : getListEntry(idDefault,'Caustic Cling','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idEarthMagic],
            [],
            [idIntelligence],
        ),
        [idDenseEarth] : getListEntry(idDefault,'Dense Earth','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idEarthMagic],
            [],
            [idIntelligence],
        ),
        [idSiesmicMagic] : getListEntry(idDefault,'Siesmic Magic','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idEarthMagic],
            [],
            [idIntelligence],
        ),
        [idFireMagic] : getListEntry(idDefault,'Fire Magic','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idCommon,
            [],
            [idAfterburn,idBlazingHeat,idFierryBurst,idAimedCasting,idAnchoredCasting,idDistantCasting,idDurableCasting,idEchoCasting,idEfficientTeleportation,idFocusedCasting,idGeomentricCasting,idPreciseCasting,idQuickCasting,idReboundedSpell,idSplitCasting,idStillCasting,idTranquilCasting],
            [idIntelligence],
        ),
        [idAfterburn] : getListEntry(idDefault,'Afterburn','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idFireMagic],
            [],
            [idIntelligence],
        ),
        [idBlazingHeat] : getListEntry(idDefault,'Blazing Heat','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idFireMagic],
            [],
            [idIntelligence],
        ),
        [idFierryBurst] : getListEntry(idDefault,'Fierry Burst','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idFireMagic],
            [],
            [idIntelligence],
        ),
        [idLifeMagic] : getListEntry(idDefault,'Life Magic','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [],
            [idCommandingSpell,idPotentHealing,idRestorativeSpell,idAimedCasting,idAnchoredCasting,idDistantCasting,idDurableCasting,idEchoCasting,idEfficientTeleportation,idFocusedCasting,idGeomentricCasting,idPreciseCasting,idQuickCasting,idReboundedSpell,idSplitCasting,idStillCasting,idTranquilCasting],
            [idIntelligence],
        ),
        [idCommandingSpell] : getListEntry(idDefault,'Commanding Spell','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idLifeMagic],
            [],
            [idIntelligence],
        ),
        [idPotentHealing] : getListEntry(idDefault,'Potent Healing','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idLifeMagic],
            [],
            [idIntelligence],
        ),
        [idRestorativeSpell] : getListEntry(idDefault,'Restorative Spell','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idLifeMagic],
            [],
            [idIntelligence],
        ),
        [idLightMagic] : getListEntry(idDefault,'Light Magic','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idCommon,
            [],
            [idSolarEssence,idBurningRadiance,idPersistantLight,idAimedCasting,idAnchoredCasting,idDistantCasting,idDurableCasting,idEchoCasting,idEfficientTeleportation,idFocusedCasting,idGeomentricCasting,idPreciseCasting,idQuickCasting,idReboundedSpell,idSplitCasting,idStillCasting,idTranquilCasting],
            [idIntelligence],
        ),
        [idSolarEssence] : getListEntry(idDefault,'Solar Essence','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idLightMagic],
            [],
            [idIntelligence],
        ),
        [idBurningRadiance] : getListEntry(idDefault,'Burning Radiance','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idLightMagic],
            [],
            [idIntelligence],
        ),
        [idPersistantLight] : getListEntry(idDefault,'Persistant Light','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idLightMagic],
            [],
            [idIntelligence],
        ),
        [idWaterMagic] : getListEntry(idDefault,'Water Magic','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idCommon,
            [],
            [idJaggedIce,idDrivingWave,idEndlessOcean,idAimedCasting,idAnchoredCasting,idDistantCasting,idDurableCasting,idEchoCasting,idEfficientTeleportation,idFocusedCasting,idGeomentricCasting,idPreciseCasting,idQuickCasting,idReboundedSpell,idSplitCasting,idStillCasting,idTranquilCasting],
            [idIntelligence],
        ),
        [idJaggedIce] : getListEntry(idDefault,'Jagged Ice','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idDrivingWave] : getListEntry(idDefault,'Driving Wave','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idEndlessOcean] : getListEntry(idDefault,'Endless Oceanm','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idInnerChi] : getListEntry(idDefault,'Inner Chi','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idCommon,
            [],
            [],
            [idIntelligence],
        ),
    //martial skills
        [idDoubleAttack] : getListEntry(idDefault,'Double Attack','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMartial,
            idUncommon,
            [],
            [],
            [],
        ),
        [idDualWielding] : getListEntry(idDefault,'Dual Wielding','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMartial,
            idCommon,
            [],
            [],
            [],
        ),
        [idKeenShot] : getListEntry(idDefault,'Keen Shot','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMartial,
            idUncommon,
            [],
            [],
            [],
        ),
        [idMartialRage] : getListEntry(idDefault,'Martial Rage','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMartial,
            idUncommon,
            [],
            [],
            [],
        ),
        [idMeleeFocus] : getListEntry(idDefault,'Melee Focus','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMartial,
            idRare,
            [],
            [],
            [],
        ),
        [idTwoHandedWielding] : getListEntry(idDefault,'Two Handed Wielding','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMartial,
            idUncommon,
            [],
            [],
            [],
        ),
    //armor skills
        [idLightArmor] : getListEntry(idDefault,'Light Armor','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idGraceInCombat],
            [],
        ),
        [idGraceInCombat] : getListEntry(idDefault,'Grace In Combat','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idLightArmor],
            [],
            [],
        ),
        [idMediumArmor] : getListEntry(idDefault,'Medium Armor','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idDenseScales],
            [],
        ),
        [idDenseScales] : getListEntry(idDefault,'Dense Scales','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idMediumArmor],
            [],
            [],
        ),
        [idHeavyArmor] : getListEntry(idDefault,'Heavy Armor','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idMentalArmor],
            [],
        ),
        [idMentalArmor] : getListEntry(idDefault,'Mental Armor','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idHeavyArmor],
            [],
            [],
        ),
        [idUnarmoedDefense] : getListEntry(idDefault,'Unarmored Defense','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [],
            [],
        ),
        [idShields] : getListEntry(idDefault,'Shields','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idShieldBash],
            [],
        ),
        [idShieldBash] : getListEntry(idDefault,'Shield Bash','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idShields],
            [],
            [],
        ),
    //weapon skills
        [idArchery] : getListEntry(idDefault,'Archery','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [idDrillShot,idEntanglingShot,idImbueArrow,idStunShot,idDoubleAttack,idDualWielding,idKeenShot,idMartialRage,idMeleeFocus,idTwoHandedWielding],
            [],
            [],
        ),
        [idDrillShot] : getListEntry(idDefault,'Drill Shot','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idArchery],
            [],
            [],
        ),
        [idEntanglingShot] : getListEntry(idDefault,'Entrangling Shot','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idArchery],
            [],
            [],
        ),
        [idImbueArrow] : getListEntry(idDefault,'Imbue Arrow','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idRare,
            [idArchery],
            [],
            [],
        ),
        [idStunShot] : getListEntry(idDefault,'Stun Shot','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idArchery],
            [],
            [],
        ),
        [idAxes] : getListEntry(idDefault,'Axes','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idCleavingSlice,idHeadChop,idJaggedSlice,idDoubleAttack,idDualWielding,idKeenShot,idMartialRage,idMeleeFocus,idTwoHandedWielding],
            [],
        ),
        [idCleavingSlice] : getListEntry(idDefault,'Cleaving Slice','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idAxes],
            [],
            [],
        ),
        [idHeadChop] : getListEntry(idDefault,'Head Chop','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idAxes],
            [],
            [],
        ),
        [idJaggedSlice] : getListEntry(idDefault,'Jagged Slice','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idAxes],
            [],
            [],
        ),
        [idCrossbows] : getListEntry(idDefault,'Crossbows','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idPiercingBolt,idPenetratingStrike,idScatterShot,idDoubleAttack,idDualWielding,idKeenShot,idMartialRage,idMeleeFocus,idTwoHandedWielding],
            [],
        ),
        [idPiercingBolt] : getListEntry(idDefault,'Piercing Bolt','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idCrossbows],
            [],
            [],
        ),
        [idPenetratingStrike] : getListEntry(idDefault,'Penetrating Strike','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idCrossbows],
            [],
            [],
        ),
        [idScatterShot] : getListEntry(idDefault,'Scatter Shot','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idCrossbows],
            [],
            [],
        ),
        [idHammers] : getListEntry(idDefault,'Hammers','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idOverheadSmash,idHammerThrow,idLowSweep,idDoubleAttack,idDualWielding,idKeenShot,idMartialRage,idMeleeFocus,idTwoHandedWielding],
            [],
        ),
        [idOverheadSmash] : getListEntry(idDefault,'Overhead Smash','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idHammers],
            [],
            [],
        ),
        [idHammerThrow] : getListEntry(idDefault,'Hammer Throw','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idHammers],
            [],
            [],
        ),
        [idLowSweep] : getListEntry(idDefault,'Low Sweep','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idHammers],
            [],
            [],
        ),
        [idMaces] : getListEntry(idDefault,'Maces','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idBellRinger,idKneeBreaker,idFullSwing,idDoubleAttack,idDualWielding,idKeenShot,idMartialRage,idMeleeFocus,idTwoHandedWielding],
            [],
        ),
        [idBellRinger] : getListEntry(idDefault,'Bell Ringer','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idMaces],
            [],
            [],
        ),
        [idKneeBreaker] : getListEntry(idDefault,'Knee Breaker','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idMaces],
            [],
            [],
        ),
        [idFullSwing] : getListEntry(idDefault,'Full Swing','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idMaces],
            [],
            [],
        ),
        [idSmallBlades] : getListEntry(idDefault,'Small Blades','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [idBladeThrowing,idOffHandParry,idJaggedStab,idDoubleAttack,idDualWielding,idKeenShot,idMartialRage,idMeleeFocus,idTwoHandedWielding],
            [],
            [],
        ),
        [idBladeThrowing] : getListEntry(idDefault,'Blade Throwing','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idSmallBlades],
            [],
            [],
        ),
        [idOffHandParry] : getListEntry(idDefault,'Off Hand Parry','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idSmallBlades],
            [],
            [],
        ),
        [idJaggedStab] : getListEntry(idDefault,'Jagged Stab','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idSmallBlades],
            [],
            [],
        ),
        [idSpears] : getListEntry(idDefault,'Spears','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idFirstStrike,idOverextend,idSpearThrowing,idDoubleAttack,idDualWielding,idKeenShot,idMartialRage,idMeleeFocus,idTwoHandedWielding],
            [],
        ),
        [idFirstStrike] : getListEntry(idDefault,'First Strike','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idSpears],
            [],
            [],
        ),
        [idOverextend] : getListEntry(idDefault,'Overextend','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idSpears],
            [],
            [],
        ),
        [idSpearThrowing] : getListEntry(idDefault,'Spear Throwing','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idSpears],
            [],
            [],
        ),
        [idStaves] : getListEntry(idDefault,'Staves','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idImprovedTrip,idMultiHit,idShaftDefense,idDoubleAttack,idDualWielding,idKeenShot,idMartialRage,idMeleeFocus,idTwoHandedWielding],
            [],
        ),
        [idImprovedTrip] : getListEntry(idDefault,'Improved Trip','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idStaves],
            [],
            [],
        ),
        [idMultiHit] : getListEntry(idDefault,'Multi Hit','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idStaves],
            [],
            [],
        ),
        [idShaftDefense] : getListEntry(idDefault,'Shaft Defense','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idStaves],
            [],
            [],
        ),
        [idSwords] : getListEntry(idDefault,'Swords','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idDualStrike,idJaggedSlash,idSwordRebuke,idDoubleAttack,idDualWielding,idKeenShot,idMartialRage,idMeleeFocus,idTwoHandedWielding],
            [],
        ),
        [idDualStrike] : getListEntry(idDefault,'Dual Strike','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idDualStrike],
            [],
            [],
        ),
        [idJaggedSlash] : getListEntry(idDefault,'Jagged Slash','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idSwords],
            [],
            [],
        ),
        [idSwordRebuke] : getListEntry(idDefault,'Sword Rebuke','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idSwords],
            [],
            [],
        ),
        [idUnarmedCombat] : getListEntry(idDefault,'Unarmed Combat','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idBoneBreaker,idPressurePoints,idDeflection,idDoubleAttack,idDualWielding,idKeenShot,idMartialRage,idMeleeFocus,idTwoHandedWielding],
            [],
        ),
        [idBoneBreaker] : getListEntry(idDefault,'Bone Breaker','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idUnarmedCombat],
            [],
            [],
        ),
        [idPressurePoints] : getListEntry(idDefault,'Pressure Points','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idUnarmedCombat],
            [],
            [],
        ),
        [idDeflection] : getListEntry(idDefault,'Deflection','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idUncommon,
            [idUnarmedCombat],
            [],
            [],
        ),
    },
    [idTraits] : {
        [idHerbalSpirit] : getListEntry(idDefault,'Herbal Spirit','0','0',
            'you are an herbal spirit',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idMeleeWeaponProdigy] : getListEntry(idDefault,'Melee Weapon Prodigy','0','0',
            'you dig weapons',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '(SUM equipped armor.movepenalty) + ((SUM skill.armor)/2)',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
    },
};
// listStatsCharacterCreation = createSublist(listStats,[idStrength]);

const parseKFormula = (iKFormula) => {
    const calculation = iKFormula.replace(/\s/g, ''); // remove any whitespace
    const matches = [...calculation.matchAll(/@\{(.*?)\}/g)]; // get any @{attr}s with regex
    const theIDs = matches.map(([match, theID]) => theID); // get the raw variable names

    return theIDs;
};
const parseParamList = (iFieldName) => {
    const theList = iFieldName.split('|');

    return theList;
};

// ************************************************************************
// process schema to populate Affects
// ************************************************************************
let theSchema;
let theAffects = {};

const addAffect = ((iSelfID,iID) => {
    if (iID!==iSelfID) {
        const theAffect = theAffects[iID];
        if (!theAffect) {
            theAffects[iID] = [];
            theAffects[iID].push(iSelfID);
        } else {
            if (!theAffect.includes(iSelfID)) {
                theAffects[iID].push(iSelfID);
            }
        }
    }
});

/* formulas automatically fill in affects
//stats
theSchema = schemaCore[idStats];
Object.keys(theSchema).forEach((theStat) => {
    let theFormulas = theSchema[theStat];
    theFormulas = theFormulas[idFormulas];
    Object.keys(theFormulas).forEach((theFormulaID) => {
        const theSelfID = getFieldID(idChaosSeed,idStats,idStats,theFormulaID,theStat)
        const theFormula = theFormulas[theFormulaID];
        const theKFormula = theFormula[idKFormula];
        //extract fields
        const theIDs = parseKFormula(theKFormula);
        theIDs.forEach((theID) => {
            if (!theAffects[theID]) {
                theAffects[theID] = [];
            }
            theAffects[theID].push(theSelfID);
        });
    })
});
//combatstats
theSchema = schemaCore[idCombatStats];
Object.keys(theSchema).forEach((theStat) => {
    let theCalcs = theSchema[theStat];
    theCalcs = theCalcs[idCalcs];
    Object.keys(theCalcs).forEach((theCalcID) => {
        const theSelfID = getFieldID(idChaosSeed,idCombatStats,idCombatStats,theCalcID,theStat)
        const theCalc = theCalcs[theCalcID];
        const theParams = theCalc[idCalcParams];
        //extract fields
        const theIDs = parseParamList(theParams);
        theIDs.forEach((theID) => {
            if (!theAffects[theID]) {
                theAffects[theID] = [];
            }
            theAffects[theID].push(theSelfID);
        });
    })
});
*/
//skills
theSchema = schemaCore[idSkills];
Object.keys(theSchema).forEach((theSkill) => {
    /*
    let theFormulas = theSchema[theSkill];
    //formulas
    theFormulas = theFormulas[idFormulas];
    Object.keys(theFormulas).forEach((theFormulaID) => {
        const theSelfID = getFieldID(idChaosSeed,idSkills,idSkills,theFormulaID,theSkill)
        const theFormula = theFormulas[theFormulaID];
        const theKFormula = theFormula[idKFormula];
        //extract fields
        const theIDs = parseKFormula(theKFormula);
        theIDs.forEach((theID) => {
            if (theID!==theSelfID) {
                if (!theAffects[theID]) {
                    theAffects[theID] = [];
                }
                theAffects[theID].push(theSelfID);
            }
        });
    })
    */
    //stats
    let theStats = theSchema[theSkill];
    theStats = theStats[idStats];
    theStats.forEach((theStat) => {
        const theSelfID = getFieldID(idChaosSeed,idSkills,idSkills,idStat,theSkill)
        const theID = getFieldID(idChaosSeed,idStats,idStats,idTotal,theStat);
        addAffect(theSelfID,theID);
    });
    //parents
    let theParents = theSchema[theSkill];
    theParents = theParents[idParents];
    theParents.forEach((theParent) => {
        const theSelfID = getFieldID(idChaosSeed,idSkills,idSkills,idParentBonus,theSkill)
        const theID = getFieldID(idChaosSeed,idSkills,idSkills,idTotal,theParent);
        addAffect(theSelfID,theID);
    });
    //create max rank calc
//                [idMaxRank] : {
//                    [idFormula] : '1 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
//                    [idKFormula] : '1 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
//                },
    //creaet multiple stat calc
//                [idStat] : {
//                    [idCalcDesc] : 'Stat is the best of '+capitalize(idAgility)+', '+capitalize(idStrength)+' or '+capitalize(idLuck),
//                    [idCalc] : idCalcStat,
//                    [idCalcParams] : getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength)+'|'+getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck),

    //calcs
    let theCalcs = theSchema[theSkill];
    theCalcs = theCalcs[idCalcs];
    Object.keys(theCalcs).forEach((theCalcID) => {
        const theSelfID = getFieldID(idChaosSeed,idSkills,idSkills,theCalcID,theSkill)
        const theCalc = theCalcs[theCalcID];
        const theParams = theCalc[idCalcParams];
        //extract fields
        const theIDs = parseParamList(theParams);
        theIDs.forEach((theID) => {
            addAffect(theSelfID,theID);
        });
    })

    //create max rank func
                [idMaxRank] : {
                    [idCalcDesc] : capitalize(idCommandingSpell)+' '+idMaxRank+' cannot excede '+capitalize(idLifeMagic)+' '+idMaxRank,
                    [idCalc] : idCalcMinOf,
                    [idCalcParams] : getFieldID(idChaosSeed,idSkills,idSkills,idMaxRank,idLifeMagic)+'|'+getFieldID(idChaosSeed,idSkills,idSkills,idMaxRank,idCommandingSpell),
                },
    //funcs
    let theFuncs = theSchema[theSkill];
    theFuncs = theFuncs[idFuncs];
    Object.keys(theFuncs).forEach((theFuncID) => {
        const theSelfID = getFieldID(idChaosSeed,idSkills,idSkills,theFuncID,theSkill)
        const theFunc = theFuncs[theFuncID];
        const theParams = theFunc[idFuncParams];
        //extract fields
        const theIDs = parseParamList(theParams);
        theIDs.forEach((theID) => {
            addAffect(theSelfID,theID);
        });
    })
});
//console.log(JSON.stringify(theAffects,null,4));

// ************************************************************************
// process schema to populate Categories
// ************************************************************************



let sheetAffects = JSON.stringify(theAffects,null,4);

let schemaStr = JSON.stringify(schemaCore,null,4);

// !!!!!!!!!!!!!!! DO NOT FORGET TO UPDATE FILE  !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!! DO NOT FORGET TO UPDATE FILE  !!!!!!!!!!!!!!!!!!!!!!!!!!!!

let schemaConsts = fs.readFileSync('source/javascript/schemaConst.txt','utf-8');
let schemaConstJS = schemaConsts;
let schemaFuncs = fs.readFileSync('source/javascript/schemaFuncs.txt','utf-8');

// !!!!!!!!!!!!!!! DO NOT FORGET TO UPDATE FILE  !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!! DO NOT FORGET TO UPDATE FILE  !!!!!!!!!!!!!!!!!!!!!!!!!!!!

//fs.wrteFileSync('source/javascript/schemaSheet.js',schemaConsts + '\n' + schemaStr);  --> code is now in this file.

schemaConsts = schemaConsts.split('\n').map(line => '- ' + line).join('\n');
schemaConsts += '\n';

schemaStr = schemaStr.split("\n").map(line => '    ' + line).join("\n");
schemaStr = '- \n schemaCore = '+schemaStr;
schemaStr += '; \n- varObjects.schemaCore = schemaCore;';

sheetAffects = sheetAffects.split("\n").map(line => '    ' + line).join("\n");
sheetAffects = '- \n sheetAffects = '+sheetAffects;

schemaFuncs = schemaFuncs.split("\n").map(line => '- ' + line).join("\n");

fs.writeFileSync('source/data/schemaCore.pug',schemaConsts + '\n' + schemaStr + '\n' + sheetAffects + '\n' + schemaFuncs);

schemaConstJS = schemaConstJS.split("\n").map(line => '    ' + line).join("\n");
schemaConstJS = '+module.\n' + schemaConstJS;
fs.writeFileSync('source/common/schemaConsts.pug',schemaConstJS);