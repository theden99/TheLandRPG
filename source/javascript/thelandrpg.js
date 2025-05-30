//log('==> The Land RPG mod v1.0.0')
on('chat:message',function(msg){
    const paramSetCharId = 'setcharid';
    const paramCharId = 'charid'
    const paramRegenMana = 'mana';
    const paramRegenStamina = 'stamina';
    const paramRegenHealth = 'health';
    const paramFullResources = 'full';

    const paramHasValueArray = [paramSetCharId,paramCharId];

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
                if (paramHasValueArray.includes(kv[0])) {
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

    function doSetCharId(iParams) {
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
            };
        });
    };
    
    function doResources(iParams) {
        const theCharId = iParams[paramCharId];

        const curMana = parseInt(doGetAttrByName(theCharId,'curmana'));
        const curStamina = parseInt(doGetAttrByName(theCharId,'curstamina'));
        const curHealth = parseInt(doGetAttrByName(theCharId,'curhealth'));

        const maxMana = parseInt(doGetAttrByName(theCharId,'chaosseed-combatstats-mana-total'));
        const maxStamina = parseInt(doGetAttrByName(theCharId,'chaosseed-combatstats-stamina-total'));
        const maxHealth = parseInt(doGetAttrByName(theCharId,'chaosseed-combatstats-health-total'));

        const regenMana = parseInt(doGetAttrByName(theCharId,'chaosseed-combatstats-manaregen-total'));
        const regenStamina = parseInt(doGetAttrByName(theCharId,'chaosseed-combatstats-staminaregen-total'));
        const regenHealth = parseInt(doGetAttrByName(theCharId,'chaosseed-combatstats-healthregen-total'));

        let attrMana = findObjs({ type: 'attribute', characterid: theCharId, name: 'curmana' })[0];
        let attrStamina = findObjs({ type: 'attribute', characterid: theCharId, name: 'curstamina' })[0];
        let attrHealth = findObjs({ type: 'attribute', characterid: theCharId, name: 'curhealth' })[0];

            //add mana regen to mana
        if (iParams[paramRegenMana]) {
            attrMana.set('current',curMana+regenMana);
        };

            //add stamina regen to stamina
        if (iParams[paramRegenStamina]) {
            attrStamina.set('current',curStamina+regenStamina);
        };

            //add stamina regen to stamina
        if (iParams[paramRegenHealth]) {
            attrHealth.set('current',curHealth+regenHealth);
        };

            //reset to full resources
        if (iParams[paramFullResources]) {
            log('setting:'+maxMana+'/'+maxStamina+'/'+maxHealth);
            attrMana.set('current',maxMana);
            attrStamina.set('current',maxStamina);
            attrHealth.set('current',maxHealth);
        };
    }

    if (msg.type=='api' && msg.content.indexOf('!tlrpg')==0){
        let theParams = parseParams(msg.content);
        log(theParams);

        //set Ids for all chars
        if (theParams[paramSetCharId]) {
            doSetCharId(theParams);
        } else {
            if (theParams[paramCharId]) {
                doResources(theParams);
            } else {
                log('no --charid found');
            };
        };
    };
});