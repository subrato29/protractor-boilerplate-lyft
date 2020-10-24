'use strict'

let utils = require('../../lib/commonUtils.js');

class CitiesPage {

	get find_your_city () {
        return new Promise((resolve, reject) => {
            element(by.xpath('//input[@placeholder = \'Find Your City\']')).isPresent().then((present) => {
                if (present) {
                    resolve(element(by.xpath('//input[@placeholder = \'Find Your City\']')));
                } else {
                    browser.getCurrentUrl().then((url) => {
                        reject('Error retrieving find_your_city text. ' + url);
                    });
                }
            });
        });
    };

    get got_your_easy_ride () {
        return new Promise((resolve, reject) => {
            utils.isElementPresent('//h1[contains(text(), \'got your easy ride across town\')]');
            element(by.xpath('//h1[contains(text(), \'got your easy ride across town\')]')).isPresent().then((present) => {
                if (present) {
                    resolve(element(by.xpath('//h1[contains(text(), \'got your easy ride across town\')]')));
                } else {
                    browser.getCurrentUrl().then((url) => {
                        reject('Error retrieving got_your_easy_ride text. ' + url);
                    });
                }
            });
        });
    };

    no_lyft_service () {
        return new Promise((resolve, reject) => {
            element(by.xpath('//h1[contains(text(), \'got your easy ride across town\')]')).isPresent().then((present) => {
                if (present) {
                    reject (false);
                } else {
                    resolve (true);
                }
            });
        });
    };

    get ride_for_every_occasion () {
        return new Promise((resolve, reject) => {
            utils.isElementPresent('//h2[text() = \'A ride for every occasion\']');
            element(by.xpath('//h2[text() = \'A ride for every occasion\']')).isPresent().then((present) => {
                if (present) {
                    resolve (true);
                } else {
                    reject (false);
                }
            });
        });
    };

    verify_ride_for_every_occasion_lux () {
        return new Promise((resolve, reject) => {
            utils.isElementExist('//x`span[text() = \'LUX\']').then((present) => {
                if (present) {
                    element(by.xpath('//span[text() = \'LUX\']')).click().then(() => {
                        utils.isElementExist('//p[contains(text(), \'Lyft Lux is your high\')]').then((present) => {
                            if (present) {
                                resolve (true);
                            } else {
                                reject ('//p[contains(text(), \'Lyft Lux is your high\')] is not visible');
                            }
                        });
                    });
                } else {
                    reject ('//span[text() = \'LUX\'] is not displayed');
                }
            });
        });
    };

    verify_ride_for_every_occasion_lyft_xl () {
        return new Promise((resolve, reject) => {
            utils.isElementExist('//span[text() = \'LYFT XL\']').then((present) => {
                if (present) {
                    element(by.xpath('//span[text() = \'LYFT XL\']')).click().then(() => {
                        utils.isElementExist('//p[contains(text(), \'Lyft XL is a supersized\')]').then((present) => {
                            if (present) {
                                resolve (true);
                            } else {
                                reject ('//p[contains(text(), \'Lyft XL is a supersized\')] is not visible');
                            }
                        });
                    });
                } else {
                    reject ('//span[text() = \'LYFT XL\'] is not displayed');
                }
            });
        });
    };

    set_find_your_city(city_loc) {
    	let set_find_your_city = this.find_your_city;
        return set_find_your_city.then((_promise) => {
            set_find_your_city = _promise;
            set_find_your_city.sendKeys(city_loc);
            return new Promise((resolve, reject) => {
                utils.isElementPresent('//ul[@role = \'listbox\']/li[1]//span');
                utils.wait(3000);
                element(by.xpath('//ul[@role = \'listbox\']/li[1]//span')).isPresent().then((present) => {
                    if (present) {
                        resolve (element(by.xpath('//ul[@role = \'listbox\']/li[1]//span')).click());
                    } else {
                            browser.getCurrentUrl().then((url) => {
                            //reject('Error retrieving set_find_your_city text. ' + url);
                        });
                    }
                });
            });
        }).catch((err) => {
            Promise.reject(err);
        });
    }

    verify_got_your_easy_ride() {
        let verify_got_your_easy_ride = this.got_your_easy_ride;
        return verify_got_your_easy_ride.then((_promise) => {
            verify_got_your_easy_ride = _promise;
            return verify_got_your_easy_ride.getText();
        }).catch((err) => {
            return Promise.reject(err);
        })
    }
}

module.exports = new CitiesPage();