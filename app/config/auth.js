'use strict';

module.exports = {
	'githubAuth': {
		'clientID': process.env.GITHUB_KEY,
		'clientSecret': process.env.GITHUB_SECRET,
		'callbackURL': process.env.APP_URL + 'auth/github/callback'
	},
	'twitterAuth': {
		'consumerKey': TWITTER_CONSUMER_KEY,
    	'consumerSecret': TWITTER_CONSUMER_SECRET,
    	'callbackURL': process.env.APP_URL + '/auth/twitter/callback'
	}
};
