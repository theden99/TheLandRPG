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
const idFuncLessThen = 'funclessthen';
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
const idCalcLessThen = 'calclessthan';
const idCalcMaxOf = 'calcmaxof';
const idCalcMinOfMaxOf = 'calcminofmaxof';
const idAbsorbs = 'absorption';
const idSkillType = 'skilltype';
const idEveryday = 'everyday';
const idTradeskill = 'tradeskill';
const idArmorWeapon = 'armorweapon';
const idMagic = 'magic';
const idAnyMagic = 'anymagic';
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
const idCombatValues = 'combatvalues';
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
const idEldritchMagic = 'eldritch';
const idChaosMagic = 'chaos';
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
const idBlunt = 'blunt';
const idPierce = 'pierce';
const idSlash = 'slash';
const idAcid = 'acid';
const idCold = 'cold';
const idDisease = 'disease';
const idDoom = 'doom';
const idIllusion = 'illusion';
const idInfernal = 'infernal';
const idLightning = 'lightning';
const idPoison = 'poison';
const idPsychic = 'psychic';
const idSolar = 'solar';
const idThunder = 'thunder';
//combat values
const idMeleeDamage = 'meleedamage';
const idThrownDamage = 'throwndamage';
const idRangedDamage = 'rangeddamage';
const idSpellDamage = 'spelldamage';
const idMeleeAcc = 'meleeacc';
const idThrownAcc = 'thrownacc';
const idRangedAcc = 'rangedacc';
const idSpellAcc = 'spellacc';
const idArcaneEfficiencies = 'arcaneefficiencies';
//race
const idRace = 'race';
const idBeastling = 'beastling';
const idDrakarth = 'drakarth';
const idCitydwarf = 'citydwarf';
const idEeepdwarf = 'deeepdwarf';
const idHilldwarf = 'hilldwarf';
const idMountaindwarf = 'mountaindwarf';
const idHighelf = 'highelf';
const idRiverelf = 'riverelf';
const idSandelf = 'sandelf';
const idWoodelf = 'woodelf';
const idFelixian = 'felixian';
const idCoinhalfling = 'coinhalfling';
const idQuickmounthalfling = 'quickmounthalfling';
const idNomadhalfling = 'nomadhalfling';
const idHuman = 'human';
const idIrizari = 'irizari';
const idForestsprite = 'forestsprite';
const idHillsprite = 'hillsprite';
const idMarshsprite = 'marshsprite';
const idWoodsprite = 'woodsprite';
const idAstratyche = 'astratyche';
const idDemostyche = 'demostyche';
const idSolostyche = 'solostyche';

const idSubskillsPrime = 'subskillsprime';

const tableIsTemplate = [idStats,idMovement,idCombatStats,idSkills,idResists,idSpellResists,idEfficiencies,idCombatValues,idArcaneEfficiencies];

const listMagicSkills = [idAirMagic,idDarkMagic,idDeathMagic,idEarthMagic,idFireMagic,idLifeMagic,idWaterMagic,idEldritchMagic,idChaosMagic];
const listMetamagicSkills = [idAimedCasting,idAnchoredCasting,idDistantCasting,idDurableCasting,idEchoCasting,idEfficientTeleportation,idFocusedCasting,idGeomentricCasting,idPreciseCasting,idQuickCasting,idReboundedSpell,idSplitCasting,idStillCasting,idTranquilCasting];
const listCombatSkills = [idArchery,idAxes,idCrossbows,idHammers,idMaces,idSmallBlades,idSpears,idStaves,idSwords,idShieldBash,idUnarmedCombat];
const listMartialSkills = [idDoubleAttack,idDualWielding,idKeenShot,idMartialRage,idMeleeFocus,idTwoHandedWielding];


const capitalize = function(string){
    return string.replace(/(?:^|\s+|\/)[a-z]/ig,(letter)=>letter.toUpperCase());
};

const getFieldID = (iPage,iZone,iTable,iField,iRowID) => {  // <<<------  duplicate in 
    let theFieldID = iPage;
    if (iZone!=='') { theFieldID += '-'+iZone};
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
                      iSkillType=idNA,iRarity=idCommon,iParents=[],iSubskills=[],iStats=[],iSubskillsPrime=[],iEffects=[]) => {
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
        [idSubskillsPrime] : iSubskillsPrime,
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
                    [idFormula] : '25 + (' + capitalize(idAgility) + '/2)',
                    [idKFormula] : '25 + floor(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility) + '}/2)',
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
                    [idFormula] : '((sum of skill in Light,Medium,Heavy armor)/2)',
                    [idKFormula] : '-(floor(( '+
                                        '@{'+getFieldID(idChaosSeed,idSkills,idSkills,idTotal,idLightArmor)+'} +' +
                                        '@{'+getFieldID(idChaosSeed,idSkills,idSkills,idTotal,idMediumArmor)+'} +' +
                                        '@{'+getFieldID(idChaosSeed,idSkills,idSkills,idTotal,idHeavyArmor)+'} ' +
                                    ')/2))'
                    ,
                },
            },
            {
            },
            {
            },
        ),
    },
    [idResists] : {
        [idBlunt] : getListEntry(idDefault,'Blunt','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idAcid] : getListEntry(idDefault,'Acid','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idCold] : getListEntry(idDefault,'Cold','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idDoom] : getListEntry(idDefault,'Doom','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idIllusion] : getListEntry(idDefault,'Illusion','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idInfernal] : getListEntry(idDefault,'Infernal','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idLightning] : getListEntry(idDefault,'Lightning','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idPoison] : getListEntry(idDefault,'Poison','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idPsychic] : getListEntry(idDefault,'Psychic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idSolar] : getListEntry(idDefault,'Solar','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idThunder] : getListEntry(idDefault,'Thunder','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idEldritchMagic] : getListEntry(idDefault,'Eldritch Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idChaosMagic] : getListEntry(idDefault,'Chaos Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idEldritchMagic] : getListEntry(idDefault,'Eldritch Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idChaosMagic] : getListEntry(idDefault,'Chaos Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
    },
    [idArcaneEfficiencies] : {
        [idAirMagic] : getListEntry(idDefault,'Air Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idEldritchMagic] : getListEntry(idDefault,'Eldritch Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idChaosMagic] : getListEntry(idDefault,'Chaos Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
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
                                    'floor(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck) + '}/10) +' +
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
                    [idFormula] : '20 + Agility + (Luck/10)',
                    [idKFormula] : '20 + @{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility) + '} + ' +
                                    'floor(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck) + '}/10)'
                    ,
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
                    [idFormula] : '20 + Wisdom + (Luck/10) + Self Awareness',
                    [idKFormula] : '20 + @{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idWisdom) + '} + ' +
                                    'floor(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck) + '}/10) + '+
                                    '@{'+getFieldID(idChaosSeed,idSkills,idSkills,idTotal,idSelfAwareness)+'}'
                    ,
                }
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
                    [idFormula] : '20 + Agility + (Luck/10)',
                    [idKFormula] : '20 + @{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility) + '} + ' +
                                    'floor(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck) + '}/10)'
                ,
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
                    [idFormula] : 'Constituion*10',
                    [idKFormula] : '(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idConstitution) + '}*10)'
                ,
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
                    [idFormula] : 'Endurance*10',
                    [idKFormula] : '(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idEndurance) + '}*10)'
                ,
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
                    [idFormula] : 'Wisdom*10',
                    [idKFormula] : '(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idWisdom) + '}*10)'
                ,
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
                    [idFormula] : 'Wisdom/3',
                    [idKFormula] : 'floor(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idWisdom) + '}/3)'
                ,
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
                    [idFormula] : 'Endurance score per round, when there is time to rest',
                    [idKFormula] : '@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idEndurance) + '}'
                ,
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
                    [idFormula] : 'Constitution per hour.  Twice that when resting.',
                    [idKFormula] : '@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idConstitution) + '}'
                ,
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idAgriculture)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idAlchemy)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idAnimalEmpathy)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idAthletics)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idBalance)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idBrewing)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idConcentration)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idConstruction)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
            [idWisdom],
        ),
        [idConversation] : getListEntry(idDefault,'Conversation','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idConversation)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idCooking)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idDeception)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idEnchanting)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
                }
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idEntertain)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
            [idWisdom,idEndurance],
        ),
        [idPercussion] : getListEntry(idDefault,'Percussion','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idFishing)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idFletching)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idFortitude)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idGambling)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idGatherInformation)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idLipReading,idConviction,idScepticism],
            [idCharisma],
        ),
        [idLipReading] : getListEntry(idDefault,'Lip Reading','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
            'https://mlzvw7x3dg3w.i.optimole.com/w:199/h:199/q:mauto/ig:avif/https://www.thelandrpg.com/wp-content/uploads/2023/01/azerin_a_silhouette_of_a_plant_seen_within_the_bounds_of_a_bl_e2b4d6cf-aa38-4668-9424-bafc86b9b52d_3.png',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idHealing)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idCombatMedic,idHygiene,idNecromancy,idAnatomy],
            [idWisdom],
            [],
            [idHealing],
        ),
        [idCombatMedic] : getListEntry(idDefault,'Combat Medic','0','0',
            'ooo magic healing',
            'ooooo i can boost magical healing',
            'https://files.d20.io/images/418259312/IRr6MU5n3fch__TqXVUNYg/max.png?1732095184',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
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
            [],
            [idCombatMedic],
        ),
        [idHygiene] : getListEntry(idDefault,'Hygiene','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idHerbLore)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idInstillFear)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idIntuition)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
            [idSelfAwareness],
            [idIntelligence,idWisdom],
        ),
        [idSelfAwareness] : getListEntry(idDefault,'Self Awareness','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idInvestigation)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idCommon,
            [],
            [idSearch,idRunicMagic,idZealotry],
            [idIntelligence],
        ),
        [idSearch] : getListEntry(idDefault,'Search','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idMetaGaming)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idPerception)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idPuzzleSolving)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idResearch)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idRiding)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
            [idRiding],
            [],
            [idAgility,idDexterity],
        ),
        [idMountedCombat] : getListEntry(idDefault,'Mounted Combat','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idEveryday,
            idRare,
            [idRiding],
            [],
            [idAgility],
        ),
        [idAquaticCombat] : getListEntry(idDefault,'Aquatic Combat','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
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
            [idRiding],
            [],
            [idAgility,idDexterity],
        ),
        [idSailing] : getListEntry(idDefault,'Sailing','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSailing)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idScavenging)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idScribing)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSmithing)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idStealth)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idTailoring)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idTradeskill,
            idCommon,
            [],
            [idLeatherworking],
            [idAgility],
        ),
        [idLeatherworking] : getListEntry(idDefault,'Leatherworking','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idWeaving)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idThievery)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idTrade)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idTraps)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
                    [idFormula] : '',
                    [idKFormula] : '',
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
            'No description on website',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idAimedCasting)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
            [],
        ),
        [idAnchoredCasting] : getListEntry(idDefault,'Anchored Casting','0','0',
            'Anchored Casting turns the battlefield into a dynamic trap, allowing the caster to lay magical ambushes with precision and foresight.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idAnchoredCasting)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
            [],
        ),
        [idDistantCasting] : getListEntry(idDefault,'Distant Casting','0','0',
            'When space itself bends to a caster’s will, distance becomes a trivial obstacle. Distant Spell extends the reach of magic beyond its natural bounds, making the farthest target feel as though they stand within arm’s length.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idDistantCasting)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
            [],
        ),
        [idDurableCasting] : getListEntry(idDefault,'Durable Casting','0','0',
            'For spellcasters who seek to leave a lasting impression, Durable Casting extends the life of their magic, keeping its effects active far beyond their natural span.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idDurableCasting)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
            [],
        ),
        [idEchoCasting] : getListEntry(idDefault,'Echo Casting','0','0',
            'Echo Casting imbues a spell with the power to ripple through time, creating a delayed second effect that resonates with the original casting.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idEchoCasting)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
            [],
        ),
        [idEfficientTeleportation] : getListEntry(idDefault,'Efficient Teleportation','0','0',
            'Efficient Teleportation refines the art of instant movement, granting casters unparalleled control over space and distance.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idEfficientTeleportation)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
            [],
        ),
        [idFocusedCasting] : getListEntry(idDefault,'Focused Casting','0','0',
            'The caster’s gaze sharpens, their mind honing in on the delicate threads of magic as if weaving them into a masterpiece.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idFocusedCasting)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
            [],
        ),
        [idGeomentricCasting] : getListEntry(idDefault,'Geomentric Casting','0','0',
            'For those who see the battlefield as a canvas, Geometric Casting allows spells to paint with broader strokes.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idGeomentricCasting)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
            [],
        ),
        [idPreciseCasting] : getListEntry(idDefault,'Precise Casting','0','0',
            'The mark of a careful and considerate spellcaster, Precise Casting is the art of threading magic through the chaos of battle without harming allies.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idPreciseCasting)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
            [],
        ),
        [idQuickCasting] : getListEntry(idDefault,'Quick Casting','0','0',
            'When time is of the essence, some spellcasters learn to compress their incantations into the span of a breath, wielding magic with blistering speed.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idQuickCasting)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
            [],
        ),
        [idReboundedSpell] : getListEntry(idDefault,'Rebounded Spell','0','0',
            'Rebounded Spell grants a caster the uncanny ability to turn failure into opportunity, redirecting wayward magic toward a new target.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idReboundedSpell)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
            [],
        ),
        [idSplitCasting] : getListEntry(idDefault,'Split Casting','0','0',
            'Like a bowstring loosing two arrows in perfect harmony, Split Casting is a feat of magical dexterity, splitting a single thread of energy into two.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSplitCasting)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
            [],
        ),
        [idStillCasting] : getListEntry(idDefault,'Still Casting','0','0',
            'No description on website',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idStillCasting)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
            [],
        ),
        [idTranquilCasting] : getListEntry(idDefault,'Tranquil Casting','0','0',
            'Tranquil Casting transforms the act of spellcasting into a silent and serene art, enabling casters to wield their magic with unparalleled subtlety.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idTranquilCasting)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
            [],
        ),
//magic skills
        [idAirMagic] : getListEntry(idDefault,'Air Magic','0','0',
            'Air magic harnesses the power of the skies, commanding the wind, thunder, and lightning. Practitioners of this magic can summon storms, manipulate currents to buffet enemies, or strike with bolts of electricity. Air magic is known for its swiftness and unpredictability, embodying freedom and raw energy.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idAirMagic)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [],
            [idConcusiveShock,idDrivingWind,idAerialBoost],
            [idIntelligence],
            [idConcusiveShock,idDrivingWind,idAerialBoost],
        ),
        [idConcusiveShock] : getListEntry(idDefault,'Concusive Shock','0','0',
            'Concussive Shock channels the raw force of storms into devastating precision, making “thunder” and “lightning” Air Magic spells deadlier than ever.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idAirMagic],
            [],
            [idIntelligence],
        ),
        [idDrivingWind] : getListEntry(idDefault,'Driving Wind','0','0',
            'Driving Wind embodies the relentless force of the air, enhancing the caster’s mastery over Air spells and their ability to manipulate foes on the battlefield.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idAirMagic],
            [],
            [idIntelligence],
        ),
        [idAerialBoost] : getListEntry(idDefault,'Aerial Boost','0','0',
            'No description on website',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idAirMagic],
            [],
            [idIntelligence],
        ),
        [idDarkMagic] : getListEntry(idDefault,'Dark Magic','0','0',
            'Dark magic draws power from the shadows, weaving illusions, hiding truths, and striking from unseen places. It manipulates fear, stealth, and obscurity, making it as subtle as it is dangerous. While often maligned, Dark magic represents the necessity of secrecy and the power of the unknown.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idDarkMagic)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [],
            [idPersistantShadow,idClingingShadow,idInfernalEssence],
            [idIntelligence],
            [idPersistantShadow,idClingingShadow,idInfernalEssence],
        ),
        [idClingingShadow] : getListEntry(idDefault,'Clinging Shadow','0','0',
            'Clinging Shadow infuses Dark Magic with an unsettling, oppressive force that lingers long after the spell is cast.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idDarkMagic],
            [],
            [idIntelligence],
        ),
        [idInfernalEssence] : getListEntry(idDefault,'Infernal Essence','0','0',
            'Infernal Essence channels the corrupting, shadowy power of Dark Magic, fortifying the caster’s resistance against Light-based attacks and enhancing their own offensive power against those aligned with the forces of light.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idDarkMagic],
            [],
            [idIntelligence],
        ),
        [idPersistantShadow] : getListEntry(idDefault,'Persistant Shadow','0','0',
            'Persistent Shadow taps into the subtle and oppressive nature of Dark Magic, using shadows to cloud the target’s senses and make them vulnerable to further strikes.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idDarkMagic],
            [],
            [idIntelligence],
        ),
        [idDeathMagic] : getListEntry(idDefault,'Death Magic','0','0',
            'Death magic taps into the finality of life, drawing upon necrotic and infernal energies to decay, drain, or destroy. Practitioners can summon undead, sap life force, or unravel the essence of their enemies. This magic is feared for its associations with mortality and the unknown, though it holds a grim utility.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idDeathMagic)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [],
            [idLifeLeech,idStrongFears,idPotentPoison],
            [idIntelligence],
            [idLifeLeech,idStrongFears,idPotentPoison],
        ),
        [idLifeLeech] : getListEntry(idDefault,'Life Leech','0','0',
            'Life Leech taps into the dark, necrotic energies of Death Magic, allowing the caster to siphon life from their enemies as they deal devastating damage.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idDeathMagic],
            [],
            [idIntelligence],
        ),
        [idStrongFears] : getListEntry(idDefault,'Strong Fears','0','0',
            'Strong Fears enhances the caster’s ability to instill terror in their foes through the power of Death Magic.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idDeathMagic],
            [],
            [idIntelligence],
        ),
        [idPotentPoison] : getListEntry(idDefault,'Potent Poison','0','0',
            'Potent Poison amplifies the lethality of Death Magic by enhancing the caster’s ability to inflict ongoing poison damage.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idDeathMagic],
            [],
            [idIntelligence],
        ),
        [idEarthMagic] : getListEntry(idDefault,'Earth Magic','0','0',
            'Earth magic draws strength from the solidity of stone and soil, channeling the stability and destructive force of the land itself. This magic can shape terrain, summon barriers, or unleash acidic attacks that corrode enemies. Earth magic is often tied to resilience and unyielding power, rooted in the physical world.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idEarthMagic)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [],
            [idCausticCling,idDenseEarth,idSiesmicMagic],
            [idIntelligence],
            [idCausticCling,idDenseEarth,idSiesmicMagic],
        ),
        [idCausticCling] : getListEntry(idDefault,'Caustic Cling','0','0',
            'Caustic Cling enhances the corrosive power of Earth Magic, ensuring that its acid-based spells bite deep and linger long after their initial impact.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idEarthMagic],
            [],
            [idIntelligence],
        ),
        [idDenseEarth] : getListEntry(idDefault,'Dense Earth','0','0',
            'Dense Earth channels the steadfast and protective nature of the earth itself, bolstering defensive spells and enhancing the caster’s efficiency.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idEarthMagic],
            [],
            [idIntelligence],
        ),
        [idSiesmicMagic] : getListEntry(idDefault,'Siesmic Magic','0','0',
            'Seismic Magic taps into the raw, tremor-inducing power of the earth, amplifying the caster’s offensive capabilities and disrupting their enemies’ mobility.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idEarthMagic],
            [],
            [idIntelligence],
        ),
        [idFireMagic] : getListEntry(idDefault,'Fire Magic','0','0',
            'Fire magic commands the destructive and transformative power of flames. It is a magic of intensity, capable of burning foes to ash or bringing warmth and renewal. While fire magic is often seen as wild and aggressive, it also symbolizes passion and creation through destruction.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idFireMagic)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [],
            [idAfterburn,idBlazingHeat,idFierryBurst],
            [idIntelligence],
            [idAfterburn,idBlazingHeat,idFierryBurst],
        ),
        [idAfterburn] : getListEntry(idDefault,'Afterburn','0','0',
            'No description given on website',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idFireMagic],
            [],
            [idIntelligence],
        ),
        [idBlazingHeat] : getListEntry(idDefault,'Blazing Heat','0','0',
            'Blazing Heat taps into the intense, radiant power of the sun, allowing the caster to infuse their Fire Magic with a searing Solar (Light) energy.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idFireMagic],
            [],
            [idIntelligence],
        ),
        [idFierryBurst] : getListEntry(idDefault,'Fierry Burst','0','0',
            'Fiery Burst unleashes the explosive nature of Fire Magic, amplifying both the precision and destructive reach of the caster’s attacks.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idFireMagic],
            [],
            [idIntelligence],
        ),
        [idLifeMagic] : getListEntry(idDefault,'Life Magic','0','0',
            'Life magic is the essence of vitality and growth, weaving celestial energies to heal wounds, compel loyalty, or invigorate allies. It is the counterpoint to Death magic, often seen as a source of hope and renewal. Yet, its power to compel and control reveals its subtler, more dangerous edge.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idLifeMagic)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [],
            [idCommandingSpell,idPotentHealing,idRestorativeSpell],
            [idIntelligence],
            [idCommandingSpell,idPotentHealing,idRestorativeSpell],
        ),
        [idCommandingSpell] : getListEntry(idDefault,'Commanding Spell','0','0',
            'Commanding Spell enhances the caster’s ability to manipulate and control others through Compulsion Magic. ',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idLifeMagic],
            [],
            [idIntelligence],
        ),
        [idPotentHealing] : getListEntry(idDefault,'Potent Healing','0','0',
            'Potent Healing focuses on enhancing the caster’s ability to restore life and resist harm.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idLifeMagic],
            [],
            [idIntelligence],
        ),
        [idRestorativeSpell] : getListEntry(idDefault,'Restorative Spell','0','0',
            'Restorative Spell enhances the caster’s proficiency with Life spells, making them more effective at healing and alleviating harmful conditions.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSurvival)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idLifeMagic],
            [],
            [idIntelligence],
        ),
        [idLightMagic] : getListEntry(idDefault,'Light Magic','0','0',
            'Light magic channels radiant energy, illuminating darkness and burning away corruption. It is a force of purity, capable of blinding enemies or shielding allies. Practitioners of light magic are often seen as champions of justice and truth, wielding the brilliance of the divine.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idLightMagic)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [],
            [idSolarEssence,idBurningRadiance,idPersistantLight],
            [idIntelligence],
            [idSolarEssence,idBurningRadiance,idPersistantLight],
        ),
        [idSolarEssence] : getListEntry(idDefault,'Solar Essence','0','0',
            'olar Essence harnesses the radiant power of light to bolster the caster’s defenses and sharpen their attacks against the forces of darkness.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idLightMagic],
            [],
            [idIntelligence],
        ),
        [idBurningRadiance] : getListEntry(idDefault,'Burning Radiance','0','0',
            'Blistering Radiance channels the intense, searing power of Light Magic, making every spell cast a blinding and punishing force.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idLightMagic],
            [],
            [idIntelligence],
        ),
        [idPersistantLight] : getListEntry(idDefault,'Persistant Light','0','0',
            'Persistent Light taps into the enduring power of Light Magic, ensuring that each strike not only shines brightly but also creates an unrelenting beacon that guides future attacks.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idLightMagic],
            [],
            [idIntelligence],
        ),
        [idWaterMagic] : getListEntry(idDefault,'Water Magic','0','0',
            'Water magic flows with grace and adaptability, manipulating rivers, seas, and ice. It allows practitioners to drown their foes, freeze the battlefield, or shape water into protective shields. Water magic embodies change and balance, as it can soothe or devastate with equal ease.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idWaterMagic)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [],
            [idJaggedIce,idDrivingWave,idEndlessOcean],
            [idIntelligence],
            [idJaggedIce,idDrivingWave,idEndlessOcean],
        ),
        [idJaggedIce] : getListEntry(idDefault,'Jagged Ice','0','0',
            'Jagged Ice sharpens the frigid power of Water Magic, making the caster’s spells as deadly as they are precise.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idDrivingWave] : getListEntry(idDefault,'Driving Wave','0','0',
            'Driving Wave empowers the caster to channel the relentless force of water, enhancing both the precision and the impact of their spells.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idEndlessOcean] : getListEntry(idDefault,'Endless Oceanm','0','0',
            'Endless Ocean grants the caster a deep connection to the boundless power of water, allowing them to thrive where others struggle.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
            idMagic,
            idRare,
            [idWaterMagic],
            [],
            [idIntelligence],
        ),
        [idInnerChi] : getListEntry(idDefault,'Inner Chi','0','0',
            'Inner Chi is the art of channeling mana inward, enhancing the body and mind rather than producing external effects. Practitioners use this discipline to heighten their physical prowess, sharpen their reflexes, and bolster their resilience.',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idInnerChi)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [],
            [],
            [idIntelligence],
        ),
        [idEldritchMagic] : getListEntry(idDefault,'Eldritch Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idEldritchMagic)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
            [],
            [],
            [idIntelligence],
        ),
        [idChaosMagic] : getListEntry(idDefault,'Chaos Magic','0','0',
            'this is short',
            'this is long',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idChaosMagic)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMagic,
            idUncommon,
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idDoubleAttack)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMartial,
            idUncommon,
            [],
            [idArchery,idAxes,idCrossbows,idHammers,idMaces,idShields,idSmallBlades,idSpears,idStaves,idSwords,idUnarmedCombat],
            [],
        ),
        [idDualWielding] : getListEntry(idDefault,'Dual Wielding','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idDualWielding)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMartial,
            idUncommon,
            [],
            [idArchery,idAxes,idCrossbows,idHammers,idMaces,idShields,idSmallBlades,idSpears,idStaves,idSwords,idUnarmedCombat],
            [],
        ),
        [idKeenShot] : getListEntry(idDefault,'Keen Shot','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idKeenShot)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMartial,
            idUncommon,
            [],
            [idArchery,idAxes,idCrossbows,idHammers,idMaces,idShields,idSmallBlades,idSpears,idStaves,idSwords,idUnarmedCombat],
            [],
        ),
        [idMartialRage] : getListEntry(idDefault,'Martial Rage','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idMartialRage)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMartial,
            idUncommon,
            [],
            [idArchery,idAxes,idCrossbows,idHammers,idMaces,idShields,idSmallBlades,idSpears,idStaves,idSwords,idUnarmedCombat],
            [],
        ),
        [idMeleeFocus] : getListEntry(idDefault,'Melee Focus','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idMeleeFocus)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMartial,
            idRare,
            [],
            [idArchery,idAxes,idCrossbows,idHammers,idMaces,idShields,idSmallBlades,idSpears,idStaves,idSwords,idUnarmedCombat],
            [],
        ),
        [idTwoHandedWielding] : getListEntry(idDefault,'Two Handed Wielding','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idTwoHandedWielding)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idMartial,
            idUncommon,
            [],
            [idArchery,idAxes,idCrossbows,idHammers,idMaces,idShields,idSmallBlades,idSpears,idStaves,idSwords,idUnarmedCombat],
            [],
        ),
    //armor skills
        [idLightArmor] : getListEntry(idDefault,'Light Armor','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idLightArmor)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idGraceInCombat)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idMediumArmor)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idDenseScales)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idHeavyArmor)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idMentalArmor)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idUnarmoedDefense)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idShields)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idShieldBash)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idArchery)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idDrillShot,idEntanglingShot,idImbueArrow,idStunShot],
            [],
        ),
        [idDrillShot] : getListEntry(idDefault,'Drill Shot','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idDrillShot)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idEntanglingShot)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idImbueArrow)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idStunShot)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idAxes)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idCleavingSlice,idHeadChop,idJaggedSlice],
            [],
        ),
        [idCleavingSlice] : getListEntry(idDefault,'Cleaving Slice','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idCleavingSlice)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idHeadChop)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idJaggedSlice)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idCrossbows)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idPiercingBolt,idPenetratingStrike,idScatterShot],
            [],
        ),
        [idPiercingBolt] : getListEntry(idDefault,'Piercing Bolt','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idPiercingBolt)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idPenetratingStrike)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idScatterShot)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idHammers)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idOverheadSmash,idHammerThrow,idLowSweep],
            [],
        ),
        [idOverheadSmash] : getListEntry(idDefault,'Overhead Smash','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idOverheadSmash)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idHammerThrow)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idLowSweep)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idMaces)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idBellRinger,idKneeBreaker,idFullSwing],
            [],
        ),
        [idBellRinger] : getListEntry(idDefault,'Bell Ringer','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idBellRinger)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idKneeBreaker)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idFullSwing)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSmallBlades)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idBladeThrowing,idOffHandParry,idJaggedStab],
            [],
        ),
        [idBladeThrowing] : getListEntry(idDefault,'Blade Throwing','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idBladeThrowing)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idOffHandParry)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idJaggedStab)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSpears)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idFirstStrike,idOverextend,idSpearThrowing],
            [],
        ),
        [idFirstStrike] : getListEntry(idDefault,'First Strike','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idFirstStrike)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idOverextend)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSpearThrowing)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idStaves)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idImprovedTrip,idMultiHit,idShaftDefense],
            [],
        ),
        [idImprovedTrip] : getListEntry(idDefault,'Improved Trip','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idImprovedTrip)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idMultiHit)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idShaftDefense)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSwords)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idDualStrike,idJaggedSlash,idSwordRebuke],
            [],
        ),
        [idDualStrike] : getListEntry(idDefault,'Dual Strike','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idDualStrike)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idJaggedSlash)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idSwordRebuke)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idUnarmedCombat)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
                },
            },
            {
            },
            {
            },
            idArmorWeapon,
            idCommon,
            [],
            [idBoneBreaker,idPressurePoints,idDeflection],
            [],
        ),
        [idBoneBreaker] : getListEntry(idDefault,'Bone Breaker','0','0',
            'survial is fun',
            'survival is the fiction that you will live',
            '',
            {
                [idMaxRank] : {
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idBoneBreaker)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idPressurePoints)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
                    [idFormula] : '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel),
                    [idKFormula] : '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,idDeflection)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}',
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
    [idCombatValues] : {
        [idMeleeDamage] : getListEntry(idDefault,'Melee Damage','0','0',
            'Damage with a melee weapon',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : capitalize(idStrength)+ '/5',
                    [idKFormula] : '(floor(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength) + '}/5))'
                },
            },
            {
            },
            {
            },
        ),
        [idMeleeAcc] : getListEntry(idDefault,'Melee Acc','0','0',
            'Accurancy with a melee weapon',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : capitalize(idDexterity) + ' + (' + capitalize(idLuck) + '/10)',
                    [idKFormula] : '@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idDexterity) + '} + ' + 
                                    '(floor(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck) + '}/10))',
                },
            },
            {
            },
            {
            },
        ),
        [idThrownDamage] : getListEntry(idDefault,'Thrown Damage','0','0',
            'Damage with a thrown weapon',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : capitalize(idStrength) + '/5',
                    [idKFormula] : '(floor(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idStrength) + '}/5))'
                },
            },
            {
            },
            {
            },
        ),
        [idThrownAcc] : getListEntry(idDefault,'Thrown Acc','0','0',
            'Accuracy with a thrown weapon',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : capitalize(idAgility) + ' + (' + capitalize(idLuck) + '/10)',
                    [idKFormula] : '@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility) + '} + ' + 
                                    'floor(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck) + '}/10)',
                },
            },
            {
            },
            {
            },
        ),
        [idRangedDamage] : getListEntry(idDefault,'Ranged Damage','0','0',
            'Damage with a ranged weapon',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : capitalize(idDexterity) + '/5',
                    [idKFormula] : '(floor(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idDexterity) + '}/5))'
                },
            },
            {
            },
            {
            },
        ),
        [idRangedAcc] : getListEntry(idDefault,'Ranged Acc','0','0',
            'Accuracy with a ranged weapon',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : capitalize(idAgility) + ' + (' + capitalize(idLuck) + '/10)',
                    [idKFormula] : '@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idAgility) + '} + ' + 
                                    '(floor(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck) + '}/10))',
                },
            },
            {
            },
            {
            },
        ),
        [idSpellDamage] : getListEntry(idDefault,'Spell Damage','0','0',
            'Damage with a spell',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : capitalize(idWisdom) + '/5',
                    [idKFormula] : '(floor(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idWisdom) + '}/5))'
                },
            },
            {
            },
            {
            },
        ),
        [idSpellAcc] : getListEntry(idDefault,'Spell Acc','0','0',
            'Accuracy with a spell',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : capitalize(idIntelligence) + ' + (' + capitalize(idLuck) + '/10)',
                    [idKFormula] : '@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idIntelligence) + '} + ' + 
                                    'floor(@{' + getFieldID(idChaosSeed,idStats,idStats,idTotal,idLuck) + '}/10)',
                },
            },
            {
            },
            {
            },
        ),
        [idResists] : getListEntry(idDefault,'Resists','0','0',
            'Reduce damage for all resist types',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idEfficiencies] : getListEntry(idDefault,'Efficiencies','0','0',
            'increases the damage for all spell types',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),        
        [idArcaneEfficiencies] : getListEntry(idDefault,'Arcane Efficiencies','0','0',
            'Reduce mana cost for all spell types',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
    },
    [idRace] : {
        [idBeastling] : getListEntry(idDefault,'Beastling','0','0',
            'beastling is beastling',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idDrakarth] : getListEntry(idDefault,'Drakarth','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idCitydwarf] : getListEntry(idDefault,'City Dwarf','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idEeepdwarf] : getListEntry(idDefault,'Deeep Dwarf','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idHilldwarf] : getListEntry(idDefault,'Hill Dwarf','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idMountaindwarf] : getListEntry(idDefault,'Mountain Dwarf','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idHighelf] : getListEntry(idDefault,'High Elf','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idRiverelf] : getListEntry(idDefault,'River Elf','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idSandelf] : getListEntry(idDefault,'Sand Elf','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idWoodelf] : getListEntry(idDefault,'Wood Elf','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idFelixian] : getListEntry(idDefault,'Felixian','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idCoinhalfling] : getListEntry(idDefault,'Coin Halfling','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idQuickmounthalfling] : getListEntry(idDefault,'Quickmount Halfling','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idNomadhalfling] : getListEntry(idDefault,'Nomad Halfling','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idHuman] : getListEntry(idDefault,'Human','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idIrizari] : getListEntry(idDefault,'Irizari','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idForestsprite] : getListEntry(idDefault,'Forest Sprite','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idHillsprite] : getListEntry(idDefault,'Hill Sprite','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idMarshsprite] : getListEntry(idDefault,'Marsh Sprite','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idWoodsprite] : getListEntry(idDefault,'Woods Sprite','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idAstratyche] : getListEntry(idDefault,'Astra Tyche','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idDemostyche] : getListEntry(idDefault,'Demos Tyche','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
        [idSolostyche] : getListEntry(idDefault,'Solos Tyche','0','0',
            '',
            'this is long',
            '',
            {
                [idBase] : {
                    [idFormula] : '',
                    [idKFormula] : '',
                },
            },
            {
            },
            {
            },
        ),
    }
};
// listStatsCharacterCreation = createSublist(listStats,[idStrength]);

const parseKFormula = (iKFormula) => {
    const calculation = iKFormula.replace(/\s/g, ''); // remove any whitespace
    const matches = [...calculation.matchAll(/@\{(.*?)\}/g)]; // get any @{attr}s with regex    
    let theIDs = matches.map(([match, theID]) => theID); // get the raw variable names

    return theIDs;
};
const parseParamList = (iFieldName) => {
    let theList = iFieldName.split('|');

    return theList;
};

const parseFieldID = (iFieldID,iFieldNum) => {
    let theList = iFieldID.split('-');
    
    return theList[iFieldNum];
}

// ************************************************************************
// process schema to populate Affects
// ************************************************************************
let theSchema;
let theAffectsBySkill = {};
let theAffects = {};

const addAffect = ((iSelfID,iID,iSelfSkill,iSkill) => {
    let theAffect;
    if (iID!==iSelfID) {
          //do id based
        theAffect = theAffects[iID];
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

const addSkillAffect = ((iSelfSkill,iSkill) => {
    let theAffect;
    if ((iSelfSkill) && (iSkill)) {
        if (iSkill!==iSelfSkill) {
            theAffect = theAffectsBySkill[iSkill];
            if (!theAffect) {
                theAffectsBySkill[iSkill] = [];
                theAffectsBySkill[iSkill].push(iSelfSkill);
            } else {
                if (!theAffect.includes(iSelfSkill)) {
                    theAffectsBySkill[iSkill].push(iSelfSkill);
                }
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
//skills
let theStats;
let theSkills;
let theParents;
let theCalcs;
let theFuncs;
let theFormulas;
let theParent;
let theSelfID;
let theID;
theSchema = schemaCore[idSkills];
Object.keys(theSchema).forEach((theSkill) => {
    theSkills = theSchema[theSkill];


/*
    //update max rank formula
    theFormulas = theSkills[idFormulas];
    Object.keys(theFormulas).forEach((theFormulaID) => {
        if ((theFormulaID===idMaxRank) && (theSkills.rarity===idCommon)) {
            theFormulas = theFormulas[theFormulaID];
            theFormulas[idFormula] = '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel);
            theFormulas[idKFormula] = '2 + (@{'+getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,theSkill)+'}/25) + @{'+getFieldID(idHeader,idCharacter,'',idLevel)+'}';
        };
    });

    //update multiple stat calc
    theCalcs = theSkills[idCalcs];
    theStats = theSkills[idStats];
    Object.keys(theCalcs).forEach((theCalcID) => {
        if (theCalcID===idStat) {
            theCalcs = theCalcs[theCalcID];
            theCalcs[idCalcDesc] = 'Stat is the best of ';
            theCalcs[idCalc] = idCalcMaxOf;
            theCalcs[idCalcParams] = '';
            theStats.forEach((theStat) => {
                theCalcs[idCalcDesc] += capitalize(theStat)+',';
                theCalcs[idCalcParams] += '@{'+getFieldID(idChaosSeed,idStats,idStats,idTotal,theStat)+'}|';
            });
            //clean up dangling seperator
            theCalcs[idCalcDesc] = theCalcs[idCalcDesc].slice(0,-1);
            theCalcs[idCalcParams] = theCalcs[idCalcParams].slice(0,-1);
        };
    });
    //create max rank func, if parent
    theParents = theSkills[idParents];
    if (theParents.length===1) {
        theFuncs = theSkills[idFuncs];
        theParent = theParents[0];
        theSelfID = getFieldID(idChaosSeed,idSkills,idSkills,idMaxRank,theSkill);
        theID = getFieldID(idChaosSeed,idSkills,idSkills,idMaxRank,theParent);
        theFuncs[idMaxRank] = {};
        theFuncs[idMaxRank][idFuncDesc] = capitalize(theSkill)+' '+idMaxRank+' cannot excede '+capitalize(theParent)+' '+idMaxRank;
        theFuncs[idMaxRank][idFunc] = idFuncLessThen;
        theFuncs[idMaxRank][idFuncParams] = '@{'+theID+'}|@{'+theSelfID+'}';
    } else {
        //create max rank func, if no parent or multiple paraents(not real paraents, just way to display them as subskills)
        theFuncs = theSkills[idFuncs];
        theSelfID = getFieldID(idChaosSeed,idSkills,idSkills,idMaxRank,theSkill);
        theFuncs[idMaxRank] = {};
        theFuncs[idMaxRank][idFuncDesc] = '2 + ('+capitalize(idAffinity)+'/25) + '+capitalize(idLevel);
        theFuncs[idMaxRank][idFunc] = idFuncLessThen;
        theSelfID = getFieldID(idChaosSeed,idSkills,idSkills,idAffinity,theSkill)
        theID = getFieldID(idHeader,idCharacter,'',idLevel);        
        theFuncs[idMaxRank][idFuncParams] = '(@{'+theSelfID+'}/25)|(1+@{'+theID+'})';
    };
    //the above needs to be BEFORE affects;
*/

    //stats
    theStats = theSkills[idStats];
    theStats.forEach((theStat) => {
        theSelfID = getFieldID(idChaosSeed,idSkills,idSkills,idStat,theSkill)
        theID = getFieldID(idChaosSeed,idStats,idStats,idTotal,theStat);
        addAffect(theSelfID,theID);
        //addSkillAffect(theSkill,theStat);
    });
    //parents
    theParents = theSkills[idParents];
    theParents.forEach((theParent) => {
        theSelfID = getFieldID(idChaosSeed,idSkills,idSkills,idParentBonus,theSkill)
        theID = getFieldID(idChaosSeed,idSkills,idSkills,idTotal,theParent);
        addAffect(theSelfID,theID);
        //addSkillAffect(theSkill,theParent);
    });
/*
    //calcs
    theCalcs = theSkills[idCalcs];
    Object.keys(theCalcs).forEach((theCalcID) => {
        theSelfID = getFieldID(idChaosSeed,idSkills,idSkills,theCalcID,theSkill)
        const theCalc = theCalcs[theCalcID];
        const theParams = theCalc[idCalcParams];
        //extract fields
        const theIDs = parseParamList(theParams);
        theIDs.forEach((theParamID) => {
            theParamID = parseKFormula(theParamID);
            addAffect(theSelfID,theParamID);
        });
    })
    //funcs
    theFuncs = theSkills[idFuncs];
    Object.keys(theFuncs).forEach((theFuncID) => {
        theSelfID = getFieldID(idChaosSeed,idSkills,idSkills,theFuncID,theSkill)
        const theFunc = theFuncs[theFuncID];
        const theParams = theFunc[idFuncParams];
        //extract fields
        const theIDs = parseParamList(theParams);
        theIDs.forEach((theParamID) => {
            theParamID = parseKFormula(theParamID);
            addAffect(theSelfID,theParamID);
        });
    })
*/
});

/*
//now apply affects and catagories
let theSkillAffects;
  //do stats, ignore the variable names, just lazy
theSchema = schemaCore[idStats];
Object.keys(theSchema).forEach((theSkill) => {
    theSkills = theSchema[theSkill];

console.log(theSkills[idAffects]);    
    theSkillAffects = theAffectsBySkill[theSkill];
    if (!theSkillAffects) {
        theSkills[idAffects] = theSkillAffects;
    }
console.log(theSkills[idAffects]);    
});
  //do skills
theSchema = schemaCore[idSkills];
Object.keys(theSchema).forEach((theSkill) => {
    theSkills = theSchema[theSkill];

console.log(theSkills[idAffects]);    
    theSkills[idAffects] = theAffectsBySkill[theSkill];
console.log(theSkills[idAffects]);    
});
*/

//console.log(JSON.stringify(theAffectsBySkill,null,4));

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