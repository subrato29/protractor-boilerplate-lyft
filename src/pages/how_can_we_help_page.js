'use strict'

let utils = require('../../lib/commonUtils.js');

class HowCanWeHelp {
	riding_with_lyft() {
		let locator = '//a[contains(text(), \'Riding with Lyft\')]';
		utils.waitForElement(locator);
		return new Promise((resolve, reject) => {
			element.all(by.xpath(locator + '/../..//a[not(contains(text(), \'Riding with Lyft\'))]')).getText().then((list) => {
				if(list.length > 1) {
					resolve (list);
				} else {
					reject (locator + ' is not present with more than 1 element');
				}
			});
		});
	};
}

module.exports = new HowCanWeHelp();