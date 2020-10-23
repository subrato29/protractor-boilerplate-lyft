    
'use strict';

var CommonUtils = {
	waitForElement: function (el) {
		var EC = protractor.ExpectedConditions;
		browser.wait(function () {
		    browser.wait(EC.visibilityOf(el), 10000);
		    return el;
		});
	},

	elementToBeClickable: function (ptor, el) {
		var EC = protractor.ExpectedConditions;
		browser.wait(function () {
			browser.wait(EC.elementToBeClickable(el), 10000);
			return el;
		});
	},

    wait: function (timeout) {
        browser.driver.sleep(timeout);
    },

    /**
     * @function
     * @name isElementPresent
     * @param {string} locator
     * @returns {boolean}
     */
    isElementPresent: function(locator) {
        let nTime = 1;
        while (nTime < 10000) {
            try {
                if (elements(by.xpath(locator)).length() > 0) {
                    return true;
                } else {
                    nTime++;
                }
            } catch(err) {
                nTime++;
            }
        }
        return false;
    },

    /**
     * @function
     * @name isElementNotPresent
     * @param {string} locator
     * @returns {boolean}
     */
    isElementNotPresent: function(locator) {
        let nTime = 1;
        while (nTime < 10000) {
            try {
                if (elements(by.xpath(locator)).length() = 0) {
                    return true;
                } else {
                    nTime++;
                }
            } catch(err) {
                nTime++;
            }
        }
        return false;
    },

	/**
     * @function
     * @name getElement
     * @param {string} locator
     * @returns {webElement}
     */
    getElement: function (locator) {
        if (locator.indexOf("css") !== -1) {
            var name = locator.split("~")[1];
            var elem = element(by.css(name));
            return elem;
        }
        if (locator.indexOf("xpath") !== -1) {
            var name = locator.split("~")[1];
            var elem = element(by.xpath(name));
            return elem;
        }
        if (locator.indexOf("id") !== -1) {
            var name = locator.split("~")[1];
            var elem = element(by.id(name));
            return elem;
        }
    },
    getValue: function (ptor, locator) {
        if (locator.indexOf("input") !== -1) {
            var name = locator.split("~")[1];
            var elem = name;
            return elem;
        }
    },
    getAllElements: function (ptor, locator) {
        if (locator.indexOf("css") !== -1) {
            var name = locator.split("~")[1];
            var elem = element.all(by.css(name));
            return elem;
        }
        if (locator.indexOf("xpath") !== -1) {
            var name = locator.split("~")[1];
            var elem = element.all(by.xpath(name));
            return elem;
        }
        if (locator.indexOf("id") !== -1) {
            var name = locator.split("~")[1];
            var elem = element.all(by.id(name));
            return elem;
        }
    },
    consoleLog: function (str) {
        console.log("[INFO] " + str);
    }

};

module.exports = CommonUtils;