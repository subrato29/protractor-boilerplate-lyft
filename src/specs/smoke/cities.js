let config = require('../../../config/urls.js');
let resourcePage = require('../../pages/resources_page.js')
let data = require("../../..//data/data.js");

browser.ignoreSynchronization = true;


describe('Resouces Page Testing: ', function() {

	beforeEach((done) => {
	    browser.waitForAngularEnabled(false);
	    browser.get(config.url.cities.baseUrl).then(() => {
	        done();
	    });
	});

	it('Verifying navigation of Manage tab: ', function() {

		browser.driver.manage().deleteAllCookies().then(() => {
	    }).then(() => {
	        return browser.driver.manage().window().maximize();
	    }).then(() => {
	    	return resourcePage.clickManage();
	    }).then(() => {
	    	return resourcePage.verifyManageText();
	    }).then((text) => {
	    	return expect(text).toBe('Manage');
	    	done();
	    }).catch((err) => {
	    	return Promise.reject (err);
	    });
	});


	afterEach((done) => {
	    browser.get(config.url.getStarted.baseUrl).then(() => {
	        done();
	    });
	});

});