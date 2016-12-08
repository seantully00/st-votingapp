'use strict';

var choiceId = 2; // used by the addChoice() function to keep track of IDs

function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

function removeElement(elementId) {
    // Removes an element from the document
    console.log(elementId);
    var createpoll = document.getElementById("createpoll");
    //var element = document.getElementById(elementId);
    createpoll.removeChild(elementId);
}

function addChoice() {
    choiceId++; // increment fileId to get a unique ID for the new element
    var html = 'Choice ' + choiceId + ':<br><input type="text" id="choice' + choiceId + '"><button type = "button" onclick="removeElement(choice' + choiceId + '); return false;">Remove</button><br>';
    addElement('createpoll', 'b', 'choice' + choiceId, html);
};


