
let url = require('../../../config/urls.js');
let getRide = require('../../pages/get_a_ride.js')
let data = require("../../../data/data.js");
let utils = require('../../../lib/commonUtils.js');

browser.ignoreSynchronization = true;

describe('Get a ride destination testing: ', function() {

	beforeEach((done) => {
	    browser.waitForAngularEnabled(false);
	    browser.get(url.url.getRide.baseUrl).then(() => {
	        done();
	    });
	});

	it('Where are you going: ', function() {
		browser.driver.manage().deleteAllCookies().then(() => {
			return browser.driver.manage().window().maximize();
		}).then(() => {
			return getRide.where_are_your_going;
		}).then(() => {
			return getRide.set_pick_up_loc(data.prod.pick_up);
		}).then(() => {
			return getRide.set_drop_off_loc(data.prod.drop_off);
		}).then(() => {
			return getRide.click_ride_details();
		}).then(() => {
			return getRide.fare_estimate;
		}).then(() => {
			return getRide.get_ride_types();
		}).then(() => {
			return getRide.verify_trip_details_drop_off();
		}).then((text) => {
			console.log ('8888: ' + text);
			return expect(data.prod.drop_off).toContain(text);
		}).catch((err) => {
			return Promise.reject(err);
		});
	});

	afterEach((done) => {
	    browser.get(url.url.getRide.baseUrl).then(() => {
	        done();
	    });
	});

});