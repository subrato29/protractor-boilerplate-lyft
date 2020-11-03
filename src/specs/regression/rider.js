
let url = require('../../../config/urls.js');
let riderPage = require('../../pages/rider_page.js')
let data = require("../../../data/data.js");
let genericUtils = require('../../../lib/genericUtils.js');

browser.ignoreSynchronization = true;

describe('Validate rider page: ', function() {

	beforeEach((done) => {
	    browser.waitForAngularEnabled(false);
	    browser.get(url.url.rider.baseUrl).then(() => {
	        done();
	    });
	});

	it ('Validating select valid location- missing pick-up location', function() {
		browser.driver.manage().deleteAllCookies().then(() => {
			return browser.driver.manage().window().maximize();
		}).then(() => {
			return riderPage.click_pick_up_loc();
		}).then(() => {
			return riderPage.validate_select_valid_loc_pick_up();
		}).then((text) => {
			return expect(text).toContain('Please select a valid location');
		}).catch((err) => {
			return Promise.reject(err);
		});
	});

	it ('Validating select valid location- missing drop-off location', function() {
		browser.driver.manage().deleteAllCookies().then(() => {
			return browser.driver.manage().window().maximize();
		}).then(() => {
			return riderPage.click_drop_off_loc();
		}).then(() => {
			return riderPage.validate_select_valid_loc_drop_off();
		}).then((text) => {
			return expect(text).toContain('Please select a valid location');
		}).catch((err) => {
			return Promise.reject(err);
		});
	});

	afterEach((done) => {
	    browser.get(url.url.getStarted.baseUrl).then(() => {
	        done();
	    });
	});

});