'use strict';

var choiceId = 2; // used by the addChoice() function to keep track of IDs

function addChoice() {
    choiceId++; // increment fileId to get a unique ID for the new element
    var html = '<input type="text" ' +
               '<a href="" onclick="javascript:removeElement('choice' + choiceId + ''); return false;">Remove</a>';
    addElement('files', 'p', 'choice' + choiceId, html);
};


