'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	/*github: {
		id: String,
		displayName: String,
		username: String,
      publicRepos: Number
	},*/
   nbrClicks: {
      clicks: Number
   },
   twitter: {
       id: String,
       name: String,
       screen_name: String
   }
});

var Poll = new Schema({
   title: String,
   owner: String,
   question: String,
   choices: [{choice1: String, choice2: String, choice3: String, choice4: String, choice5: String}]
});

module.exports = mongoose.model('User', User);
