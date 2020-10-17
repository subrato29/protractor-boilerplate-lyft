let config = require('../../../config/urls.js');
let websitePage = require('../../pages/website_page.js')
let data = require("../../..//data/data.js");

browser.ignoreSynchronization = true;


describe('Resouces Page Testing: ', function() {

	beforeEach((done) => {
	    browser.waitForAngularEnabled(false);
	    browser.get(config.url.help.baseUrl).then(() => {
	        done();
	    });
	});

	it('Verifying choosing 99 plan: ', function() {

		browser.driver.manage().deleteAllCookies().then(() => {
	    }).then(() => {
	        return browser.driver.manage().window().maximize();
	    }).then(() => {
	    	return websitePage.clickChoosePlan_99();
	    }).then(() => {
	    	return websitePage.click_domain();
	    }).then(() => {
	    	return websitePage.set_domain('tempdomain');
	    }).catch((err) => {
	    	return Promise.reject ('Verifying choosing 99 plan: ' + err);
	    });
	});


	afterEach((done) => {
	    browser.get(config.url.getStarted.baseUrl).then(() => {
	        done();
	    });
	});

});