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
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function addChoice() {
    choiceId++; // increment fileId to get a unique ID for the new element
    var html = 'Choice ' + choiceId + ':<br><input type="text" id="choice' + choiceId + '"><br><button type = "button" onclick="removeElement(choice' + choiceId + ');">Remove</button>';
    addElement('createpoll', 'b', 'choice' + choiceId, html);
};


