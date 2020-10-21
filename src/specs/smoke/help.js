let url = require('../../../config/urls.js');
let websitePage = require('../../pages/website_page.js')
let data = require("../../..//data/data.js");

browser.ignoreSynchronization = true;


describe('help Page Testing: ', function() {

	beforeEach((done) => {
	    browser.waitForAngularEnabled(false);
	    browser.get(url.url.help.baseUrl).then(() => {
	        done();
	    });
	});


	afterEach((done) => {
	    browser.get(url.url.getStarted.baseUrl).then(() => {
	        done();
	    });
	});

});