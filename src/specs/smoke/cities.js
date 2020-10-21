let url = require('../../../config/urls.js');
let resourcePage = require('../../pages/cities_page.js')
let data = require("../../..//data/data.js");

browser.ignoreSynchronization = true;


describe('Cities Page Testing: ', function() {

	beforeEach((done) => {
	    browser.waitForAngularEnabled(false);
	    browser.get(url.url.cities.baseUrl).then(() => {
	        done();
	    });
	});


	afterEach((done) => {
	    browser.get(url.url.getStarted.baseUrl).then(() => {
	        done();
	    });
	});

});