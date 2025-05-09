//build field entry
let curPage = '';
let curZone = '';
let curTable = '';
const getFieldEntry = (iFieldName,iDisplayName,iFieldType) => {
    let theField = {};
    theField[idName] = getFieldID(curPage,curZone,curTable,iFieldName,'');
    theField[idDisplayName] = iDisplayName;
    theField[idFieldType] = iFieldType;

    return theField;
};


//base schema
const schemaData = {
    version : '0.0.0',    
    defaultPage : idDatabase,
    [idPages] : {}
};

//do pages
//header page
curPage = idHeader;
curZone = '';
curTable = '';
schemaData.pages[curPage] = {
    [idLogo] : getFieldEntry(idLogo,'Logo',idImage),
    [idName] : getFieldEntry(idName,'Name',idText),
    [idXP] : getFieldEntry(idXP,'XP',idNumber),
    [idLevel] : getFieldEntry(idLevel,'Level',idNumber),
    [idAvatar] : getFieldEntry(idAvatar,'Avatar',idText),
    [idToken] : getFieldEntry(idToken,'Token',idText)
};


//chaosseed page
curPage = idChaosSeed;
curZone = '';
curTable = '';
schemaData.pages[curPage] = {
    [idPageClickName] : '',
    [idZones] : {}
};
//chaosseed-stats zone
curPage = idChaosSeed;
curZone = idStats;
curTable = '';
schemaData.pages[curPage].zones[curZone] = {
    [idTitle] : getFieldEntry(idTitle,'Abilities',idText),
    [idTemplates] : {}
};
//chaosseed-stats-stats table
let curFields = [];
let curFieldTypes = [];
const getTableHeaderEntry = (iHeaders) => {
    let theHeader = {};
    if (curFields.length>0) {
        let theIndex = 0;
        curFields.forEach(theField => {
            theHeader[theField] = iHeaders[theIndex];
            theIndex += 1;
        });
    };
    return theHeader;
};
const getTableListEntry = (iList,iListFields) => {
    let theEntry = {};
    if (iList) {
        for (const key in iList) {
            if (iList.hasOwnProperty(key)) {
                if (curFields.length>0) {
                    let theIndex = 0;
                    let theListEntry = {};
                    curFields.forEach(theField => {
                        theListEntry[theField] = {
                            [idValue] : iListFields[theIndex],
                            [idFieldType] : curFieldTypes[theIndex]
                        };
                        theIndex += 1;
                    });
                    theEntry[key] = theListEntry;
                };
            }
        }
    };

    return theEntry;
};
curPage = idChaosSeed;
curZone = idStats;
curTable = idStats;
curFields = [idName,idBase,idEquipBonus,idBuffBonus,idMiscBonus,idTotal,idMax,idHelpButton];
curFieldTypes = [idText,idNumber,idNumber,idNumber,idNumber,idNumber,idNumber,idHelpButton];
schemaData.pages[curPage].zones[curZone].templates[curTable] = {
    [idFields] : '',
    //[idHeader] : getTableHeaderEntry(['Ability','Base','Equip Bonus','Buff Bonus','Misc Bonus','Total','Max']),
    [idTemplates] : getTableListEntry(schemaCore[idStats],[idDisplayName,idDefault,'0','0','0',idDefault,'0',])
}
//chaosseed-combatstats zone
curPage = idChaosSeed;
curZone = idCombatStats;
curTable = '';
schemaData.pages[curPage].zones[curZone] = {
    [idTitle] : getFieldEntry(idTitle,'Combat Abilities',idText),
    [idTemplates] : {}
};
curPage = idChaosSeed;
curZone = idCombatStats;
curTable = idCombatStats;
curFields = [idName,idBase,idEquipBonus,idBuffBonus,idMiscBonus,idTotal];
curFieldTypes = [idText,idNumber,idNumber,idNumber,idNumber,idNumber,idHelpButton];
schemaData.pages[curPage].zones[curZone].templates[curTable] = {
    //[idHeader] : getTableHeaderEntry(['Combat Ability','Base','Equip Bonus','Buff Bonus','Misc Bonus','Total']),
    [idTemplates] : getTableListEntry(schemaCore[idCombatStats],[idDisplayName,idDefault,'0','0','0',idDefault])
}
//chaosseed-resists zone
curPage = idChaosSeed;
curZone = idResists;
curTable = '';
schemaData.pages[curPage].zones[curZone] = {
    [idTitle] : getFieldEntry(idTitle,'Resistances',idText),
    [idTables] : {}
};
curPage = idChaosSeed;
curZone = idResists;
curTable = idResists;
curFields = [idName,idBase,idEquipBonus,idBuffBonus,idMiscBonus,idTotal];
curFieldTypes = [idText,idNumber,idNumber,idNumber,idNumber,idNumber,idHelpButton];
schemaData.pages[curPage].zones[curZone].tables[curTable] = {
    [idHeader] : getTableHeaderEntry(['Resistance','Base','Equip Bonus','Buff Bonus','Misc Bonus','Total']),
    [idTables] : getTableListEntry(schemaCore[idResists],['','','','','',''])
}
//chaosseed-traits zone
curPage = idChaosSeed;
curZone = idTraits;
curTable = '';
schemaData.pages[curPage].zones[curZone] = {
    [idTitle] : getFieldEntry(idTitle,'Traits',idText),
    [idTables] : {}
};
curPage = idChaosSeed;
curZone = idTraits;
curTable = idTraits;
curFields = [idName,idBase,idEquipBonus,idBuffBonus,idMiscBonus,idTotal];
curFieldTypes = [idText,idNumber,idNumber,idNumber,idNumber,idNumber,idHelpButton];
schemaData.pages[curPage].zones[curZone].tables[curTable] = {
    [idHeader] : getTableHeaderEntry(['Traits','Base','Equip Bonus','Buff Bonus','Misc Bonus','Total']),
    [idTables] : getTableListEntry(schemaCore[idTraits],['','','','','',''])
}


//database page
curPage = idDatabase;
curZone = '';
curTable = '';
schemaData.pages[curPage] = {
    [idPageClickName] : '',
    [idZones] : {}
};
//databaes-event zone
curPage = idDatabase;
curZone = idEvent;
curTable = '';
schemaData.pages[curPage].zones[curZone] = {
    [idCollapse] : getFieldEntry(idCollapse,'',idCollapse),
    [idTables] : {}
};
//database-event-core table
curPage = idDatabase;
curZone = idEvent;
curTable = idCore;
schemaData.pages[curPage].zones[curZone].tables[curTable] = {
    [idName] : getFieldEntry(idName,'Core Events',idTable),
    [idFields] : {
        [idName] : getFieldEntry(idName,'Name',idText),
        [idType] : getFieldEntry(idType,'Type',idText),
        [idDesc] : getFieldEntry(idDesc,'Description',idText)
    }
};
//database-event-custom table
curPage = idDatabase;
curZone = idEvent;
curTable = idCustom;
schemaData.pages[curPage].zones[curZone].tables[curTable] = {
    [idName] : getFieldEntry(idName,'Custom Events',idTable),
    [idFields] : {
        [idName] : getFieldEntry(idName,'Name',idText),
        [idType] : getFieldEntry(idType,'Type',idText),
        [idDesc] : getFieldEntry(idDesc,'Description',idText)
    }
};
//database-event-upsert table
curPage = idDatabase;
curZone = idEvent;
curTable = idUpsert;
schemaData.pages[curPage].zones[curZone].tables[curTable] = {
    [idName] : getFieldEntry(idName,'Create/Edit Event',idTable),
    [idFields] : {
        [idName] : getFieldEntry(idName,'Name',idText),
        [idType] : getFieldEntry(idType,'Type',idText),
        [idDesc] : getFieldEntry(idDesc,'Description',idText)
    }
};



//write JS and PUG files
let schemaSheet = schemaData;

let schemaStr = 'const schemaSheet = '+JSON.stringify(schemaSheet,null,4);
console.log(schemaStr);

