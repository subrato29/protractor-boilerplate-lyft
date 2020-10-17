'use strict'

let commonUtils = require('../../lib/commonUtils.js');

class WebsitePage {

	get btnChoosePlan_99() {
		return new Promise((resolve, reject) => {
			element(by.xpath('//span[text()=\'99\']/../../../../..//button')).isPresent().then((present) => {
				if (present) {
					resolve(element(by.xpath('//span[text()=\'99\']/../../../../..//button')));
				} else {
					browser.getCurrentUrl().then((url) => {
						reject('Error in retrieving the element btnChoosePlan_99 ' + url);
					});
				}
			});
		});
	};


	get domain() {
		return new Promise((resolve, reject) => {
			element(by.xpath('//h3[contains(text(), \'Kick off your\')]/..//input')).isPresent().then((present) => {
			commonUtils.wait (3000);	
				if (present) {
					resolve(element(by.xpath('//h3[contains(text(), \'Kick off your\')]/..//input')));
				} else {
					browser.getCurrentUrl().then((url) => {
						reject('Error in retrieving the element domain ' + url);
					});
				}
			});
		});
	};


	clickChoosePlan_99() {
		let _this = this;
		let btnChoosePlan_99 = _this.btnChoosePlan_99;
		return btnChoosePlan_99.then((_btnChoosePlan_99) => {
			btnChoosePlan_99 = _btnChoosePlan_99;
			browser.executeScript("arguments[0].scrollIntoView();", element(by.xpath('//span[text()=\'99\']')).getWebElement());
			return browser.actions().mouseMove(btnChoosePlan_99).click().perform();
		}).catch ((err) => {
			Promise.reject(err);
		});
	};

	click_domain() {
		let _this = this;
		let domain = _this.domain;
		return domain.then((_domain) => {
			domain = _domain;
			return domain.click();
		}).catch ((err) => {
			Promise.reject(err);
		});
	};

	set_domain(domain_address) {
		let _this = this;
		let domain = _this.domain;
		return domain.then((_domain) => {
		    domain = _domain;
		    return domain.clear();
		}).then(() => {
		    return domain.sendKeys(domain_address);
		}).catch((err) => {
		    return Promise.reject('set_domain: ' + err);
		});
	};
}

module.exports = new WebsitePage();