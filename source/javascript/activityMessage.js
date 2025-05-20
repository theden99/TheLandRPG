on('chat:message',function(msg){
    if (msg.type=='api' && msg.content.indexOf('!activityMessage')==0){
        let characters = findObjs({type:'character'});
        const charId = characters[0].get('id');
        log('character: '+charId);
        
        //let theMessage = getAttrByName(charID,'inventory-message');
        //log('message: '+theMessage);
        
        let theMsg = findObjs({ type: 'attribute', characterid: charId, name: 'inventory-message' })[0];
        //var theMsgValue = theMsg.get('current');
        //log('msg value: '+theMsgValue);

        let theMessage = msg.content.slice(17-msg.content.length);
        
        let theMessages = theMessage.split('|'); //0=field, 1=start message, 2=done message
        log(msg.content,theMessage);
        
        const theItemId = theMessages[0];
        const theMessageStart = theMessages[1];
        const theMessageDone = theMessages[2];

        let theCount = 0;
        theMsg.set('current',theMessageStart+' '+theCount);
log(theMessageStart+' '+theCount);
        let id = setInterval(CheckForItem, 500);
        function CheckForItem() {
            let theItem = findObjs({ type: 'attribute', characterid: charID, name: theItemId })[0];
            if (theItem) {
                clearInterval(id);
                theMsg.set('current',theMessageDone);
log(theMessageDone);
            } else {
                theCount++;
                theMsg.set('current',theMessageStart+' '+theCount);        
log(theMessageStart+' '+theCount);
            }
        };    
    };
});