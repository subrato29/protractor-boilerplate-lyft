
let url = require('../../../config/urls.js');
let how_can_we_help = require('../../pages/how_can_we_help_page.js')
let data = require("../../../data/data.js");
let utils = require('../../../lib/commonUtils.js');

browser.ignoreSynchronization = true;

describe('Validating how can we help page: ', function() {

	beforeEach((done) => {
	    browser.waitForAngularEnabled(false);
	    browser.get(url.url.howCanWeHelpYou.baseUrl).then(() => {
	        done();
	    });
	});

	it('Verifying how can e help: ', function() {
		browser.driver.manage().deleteAllCookies().then(() => {
			return browser.driver.manage().window().maximize();
		}).then(() => {
			return how_can_we_help.riding_with_lyft();
		}).then((list) => {
			let array = utils.getArray(data.how_can_we_help.riding_with_lyft, ',');
			for (let i = 0; i < list.length; i++) {
				expect(array.includes(list[i])).toBe(true);
			}
		});
	});

	afterEach((done) => {
	    browser.get(url.url.login.baseUrl).then(() => {
	        done();
	    });
	});

});