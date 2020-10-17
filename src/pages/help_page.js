'use strict';

class ResourcePage {

	get plan () {
		return new Promise((resolve, reject) => {
			element(by.xpath('//a[text()=\'Plan\']')).isPresent().then((present) => {
				if (present) {
					resolve(element(by.xpath('//a[text()=\'Plan\']')));
				} else {
					browser.getCurrentUrl().then((url) => {
						reject('Error in retrieving the element Plan.' + url);
					});
				}
			});
		});
	};

	get manage () {
		return new Promise((resolve, reject) => {
			element(by.xpath('//a[text()=\'Manage\']')).isPresent().then((present) => {
				if (present) {
					resolve(element(by.xpath('//a[text()=\'Manage\']')));
				} else {
					browser.getCurrentUrl().then((url) => {
						reject('Error in retrieving the element Manage.' + url);
					});
				}
			});
		});
	};

	get planText () {
		return new Promise((resolve, reject) => {
			element(by.xpath('//h1[text()=\'Plan\']')).isPresent().then((present) => {
				if (present) {
					resolve(element(by.xpath('//h1[text()=\'Plan\']')));
				} else {
					browser.getCurrentUrl().then((url) => {
						reject('Error in verifying the Plan text' + url)
					});
				}
			});
		});
	}

	get manageText () {
		return new Promise((resolve, reject) => {
			element(by.xpath('//h1[text()=\'Manage\']')).isPresent().then((present) => {
				if (present) {
					resolve(element(by.xpath('//h1[text()=\'Manage\']')));
				} else {
					browser.getCurrentUrl().then((url) => {
						reject('Error in verifying the Manage text' + url)
					});
				}
			});
		});
	}

	clickPlan () {
		let _this = this;
		let clickPlan = _this.plan;
		return clickPlan.then((_clickPlan) => {
			clickPlan = _clickPlan;
			return clickPlan.click();
		}).catch((err) => {
			return Promise.reject(err);
		});
	}

	clickManage () {
		let _this = this;
		let clickManage = _this.manage;
		return clickManage.then((_clickManage) => {
			clickManage = _clickManage;
			return clickManage.click();
		}).catch((err) => {
			return Promise.reject(err);
		});
	}

	verifyPlanText () {
		let _this = this;
		let verifyPlanText = _this.planText;
		return verifyPlanText.then((_verifyPlanText) => {
			verifyPlanText = _verifyPlanText;
			return verifyPlanText.getText();
		}).catch((err) => {
			return Promise.reject(err);
		});
	}

	verifyManageText () {
		let _this = this;
		let verifyManageText = _this.manageText;
		return verifyManageText.then((_verifyManageText) => {
			verifyManageText = _verifyManageText;
			return verifyManageText.getText();
		}).catch((err) => {
			return Promise.reject(err);
		});
	}


};

module.exports = new ResourcePage();