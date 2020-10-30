    
'use strict';

var CommonUtils = {
	waitForElement: function (locator) {
		var EC = protractor.ExpectedConditions;
        var el = element(by.xpath(locator));
		browser.wait(function () {
		    browser.wait(EC.visibilityOf(el), 10000);
		    return el;
		});
	},

	elementToBeClickable: function (locator) {
		var EC = protractor.ExpectedConditions;
        var el = element(by.xpath(locator));
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
        CommonUtils.waitForElement(locator);
        element.all(by.xpath(locator)).then((list) => {
            return list.length;
        });
    },

    /**
     * @function
     * @name isElementExist
     * @param {string} locator
     * @returns {boolean}
     */
    isElementExist: function(locator) {
        CommonUtils.isElementPresent(locator);
        return new Promise((resolve, reject) => {
            element(by.xpath(locator)).isPresent().then((present) => {
                if (present) {
                    resolve (true);
                } else {
                    reject (false);
                }
            });
        });
    },

    scrollToElement: function(locator) {
        browser.actions().mouseMove(element(by.xpath(locator))).click().perform();
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
    getArray: function(string, separator) {
        return string.split(separator);
    },
    consoleLog: function (str) {
        console.log("[INFO] " + str);
    }

};

module.exports = CommonUtils;