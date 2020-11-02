
let url = require('../../../config/urls.js');
let payPage = require('../../pages/pay_page.js')
let data = require("../../../data/data.js");
let genericUtils = require('../../../lib/genericUtils.js');

browser.ignoreSynchronization = true;

describe('Apply to drive: ', function() {

	beforeEach((done) => {
	    browser.waitForAngularEnabled(false);
	    browser.get(url.url.pay.baseUrl).then(() => {
	        done();
	    });
	});

	it('I have a car: ', function() {
		browser.driver.manage().deleteAllCookies().then(() => {
			return browser.driver.manage().window().maximize();
		}).then(() => {
			return payPage.applyToDrive();
		}).then(() => {
			return payPage.select_have_car();
		}).then(() => {
			return payPage.set_mobile_no(genericUtils.generateRandomNumber(10));
		}).then(() => {
			return payPage.chk_i_agree();
		}).then(() => {
			return payPage.click_next();
		}).then(() => {
			return payPage.verify_drive_toward_what_matter();
		}).then ((text) => {
			return expect(text).toContain('Drive toward what matters');
			done();
		}).catch((err) => {
			return Promise.reject(err);
		})
	});

	it('I have a car: ', function() {
		browser.driver.manage().deleteAllCookies().then(() => {
			return browser.driver.manage().window().maximize();
		}).then(() => {
			return payPage.applyToDrive();
		}).then(() => {
			return payPage.select_need_car();
		}).then(() => {
			return payPage.set_mobile_no(genericUtils.generateRandomNumber(10));
		}).then(() => {
			return payPage.chk_i_agree();
		}).then(() => {
			return payPage.click_next();
		}).then(() => {
			return payPage.verify_drive_toward_what_matter();
		}).then ((text) => {
			return expect(text).toContain('Drive toward what matters');
			done();
		}).catch((err) => {
			return Promise.reject(err);
		})
	});

	afterEach((done) => {
	    browser.get(url.url.getStarted.baseUrl).then(() => {
	        done();
	    });
	});

});