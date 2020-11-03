'use strict'

let utils = require('../../lib/commonUtils.js');

class Rider {
	click_pick_up_loc() {
		return new Promise((resolve, reject) => {
			let locator = '//input[@aria-label = \'Enter pick-up location\']';
			let locator1 = '//p[contains(text(), \'Sample fares are estimates\')]';
			utils.scrollToElement(locator1);
			utils.elementToBeClickable(locator);
			element(by.xpath(locator)).isPresent().then((present) => {
				if(present) {
					element(by.xpath(locator)).click().then(() => {
						resolve (element(by.xpath('//input[@aria-label = \'Enter pick-up location\']/..//div[@data-test = \'start-icon\']')).click());
					});
				} else {
					reject (locator + ' is not present');
				}
			});
		});
	};

	validate_select_valid_loc_pick_up() {
		return new Promise((resolve, reject) => {
			let locator = '//input[@aria-label = \'Enter pick-up location\']/../../../..//small[contains(text(), \'Please select a valid location\')]';
			element(by.xpath(locator)).isPresent().then((present) => {
				if (present) {
					resolve (element(by.xpath(locator)).getText());
				} else {
					reject (locator + ' is not present');
				}
			});
		});
	};

	click_drop_off_loc() {
		return new Promise((resolve, reject) => {
			let locator = '//input[@aria-label = \'Enter drop-off location\']';
			let locator1 = '//p[contains(text(), \'Sample fares are estimates\')]';
			utils.scrollToElement(locator1);
			utils.elementToBeClickable(locator);
			element(by.xpath(locator)).isPresent().then((present) => {
				if(present) {
					element(by.xpath(locator)).click().then(() => {
						resolve (element(by.xpath('//input[@aria-label = \'Enter drop-off location\']/..//div[@data-test = \'start-icon\']')).click());
					});
				} else {
					reject (locator + ' is not present');
				}
			});
		});
	};

	validate_select_valid_loc_drop_off() {
		return new Promise((resolve, reject) => {
			let locator = '//input[@aria-label = \'Enter drop-off location\']/../../../..//small[contains(text(), \'Please select a valid location\')]';
			element(by.xpath(locator)).isPresent().then((present) => {
				if (present) {
					resolve (element(by.xpath(locator)).getText());
				} else {
					reject (locator + ' is not present');
				}
			});
		});
	};
};

module.exports = new Rider();