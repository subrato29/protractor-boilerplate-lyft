'use strict'

let utils = require('../../lib/commonUtils.js');

class Pay {
	applyToDrive () {
		return new Promise((resolve, reject) => {
			let locator = '//span/span[text() = \'Apply to drive\']';
			utils.scrollToElement('//p[contains(text(), \'debit card are not available everywhere\')]');
			utils.elementToBeClickable(locator);
			element(by.xpath(locator)).isPresent().then((present) => {
				utils.wait(2000);
				if (present) {
					resolve (element(by.xpath(locator)).click());
				} else {
					reject (locator + ' is not present');
				}
			})
		});
	};

	select_have_car () {
		return new Promise((resolve, reject) => {
			let locator = '//label[text() = \'I have a car\']//input';
			element(by.xpath(locator)).isPresent().then((present) => {
				if (present) {
					resolve (element(by.xpath(locator)).click());
				} else {
					reject (locator + ' is not present');
				}
			})
		});
	};

	select_need_car () {
		return new Promise((resolve, reject) => {
			let locator = '//label[text() = \'I need a car\']//input';
			element(by.xpath(locator)).isPresent().then((present) => {
				if (present) {
					resolve (element(by.xpath(locator)).click());
				} else {
					reject (locator + ' is not present');
				}
			})
		});
	};

	set_mobile_no (phoneNo) {
		return new Promise((resolve, reject) => {
			let locator = '//input[@name = \'phone\']';
			element(by.xpath(locator)).isPresent().then((present) => {
				if (present) {
					resolve (element(by.xpath(locator)).sendKeys(phoneNo));
				} else {
					reject (locator + ' is not present');
				}
			})
		});
	};

	chk_i_agree () {
		return new Promise((resolve, reject) => {
			let locator = '//input[@name = \'agreeToTerms\']';
			element(by.xpath(locator)).isPresent().then((present) => {
				if (present) {
					resolve (element(by.xpath(locator)).click());
				} else {
					reject (locator + ' is not present');
				}
			})
		});
	};

	click_next () {
		return new Promise((resolve, reject) => {
			let locator = '//input[@value = \'Next\']';
			element(by.xpath(locator)).isPresent().then((present) => {
				if (present) {
					resolve (element(by.xpath(locator)).click());
				} else {
					reject (locator + ' is not present');
				}
			})
		});
	};

	verify_drive_toward_what_matter() {
		return new Promise((resolve, reject) => {
			let locator = '//h1[contains(text(), \'Drive toward what matters\')]';
			element(by.xpath(locator)).isPresent().then((present) => {
				if (present) {
					resolve (element(by.xpath(locator)).getText());
				} else {
					reject (locator + ' is not present');
				}
			})
		});
	};
};

module.exports = new Pay();