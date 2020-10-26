'use strict'

let utils = require('../../lib/commonUtils.js');

class GetRide {
	get where_are_your_going() {
		return new Promise((resolve, reject) => {
			utils.waitForElement('//h1[contains(text(), \'Where are you going\')]');
			element(by.xpath('//h1[contains(text(), \'Where are you going\')]')).isPresent().then((present) => {
				if (present) {
					resolve (element(by.xpath('//h1[contains(text(), \'Where are you going\')]')));
				} else {
					reject ('where_are_your_going element is not present');
				}
			});
		});
	};

	get ride_details() {
        utils.wait(1000);
        utils.elementToBeClickable('//button[not(@disabled)]//span[text() = \'Ride details\']');
		return new Promise((resolve, reject) => {
			element(by.xpath('//button[not(@disabled)]//span[text() = \'Ride details\']')).isPresent().then((present) => {
				if(present) {
					resolve(element(by.xpath('//button[not(@disabled)]//span[text() = \'Ride details\']')));
				} else {
					reject('ride_details button is not present');
				}
			});
		});
	}

    get fare_estimate() {
        return new Promise((resolve, reject) => {
            utils.waitForElement('//h1[text() = \'Fare estimate\']');
            element(by.xpath('//h1[text() = \'Fare estimate\']')).isPresent().then((present) => {
                if (present) {
                    resolve (element(by.xpath('//h1[text() = \'Fare estimate\']')));
                } else {
                    reject ('fare_estimate element is not present');
                }
            });
        });
    };

    get trip_details_drop_off() {
        return new Promise((resolve, reject) => {
            utils.waitForElement('//span[text() = \'Drop-off\']/../../..//div[@data-testid = \'primary-address\']//div/span');
             element(by.xpath('//span[text() = \'Drop-off\']/../../..//div[@data-testid = \'primary-address\']//div/span')).isPresent().then((present) => {
                if (present) {
                    resolve (element(by.xpath('//span[text() = \'Drop-off\']/../../..//div[@data-testid = \'primary-address\']//div/span')));
                } else {
                    reject ('trip_details_pick_up element is not present');
                }
            });
        });
    }

	set_pick_up_loc(location) {
        return new Promise((resolve, reject) => {
            utils.isElementExist('//span[contains(text(), \'Enter a pickup location\')]/../..//input').then((present) => {
                if(present) {
                    element(by.xpath('//span[contains(text(), \'Enter a pickup location\')]/../..//input')).sendKeys(location).then(() => {
                        utils.elementToBeClickable('//ul/li[1][@tabindex = \'0\']');
                        resolve (element(by.xpath('//ul/li[1][@tabindex = \'0\']')).click());
                    });
                } else {
                    reject('set_pick_up_loc function is failed');
                }
            });
        });
    };

    set_drop_off_loc(location) {
        return new Promise((resolve, reject) => {
            utils.isElementExist('//span[contains(text(), \'Enter a drop-off location\')]/../..//input').then((present) => {
                if(present) {
                    element(by.xpath('//span[contains(text(), \'Enter a drop-off location\')]/../..//input')).sendKeys(location).then(() => {
                        utils.elementToBeClickable('//ul/li[1][@tabindex = \'0\']');
                        resolve (element(by.xpath('//ul/li[1][@tabindex = \'0\']')).click());
                    });
                } else {
                    reject('set_drop_off_loc function is failed');
                }
            });
        });
    };

    click_ride_details() {
    	let click_ride_details = this.ride_details;
    	return click_ride_details.then((_promise) => {
            click_ride_details = _promise;
            return click_ride_details.click();
        }).catch((err) => {
            return Promise.reject('error in click_ride_details function');
        })
    };

    get_ride_types() {
        utils.waitForElement('//span[text() = \'Lyft\']');
        element.all(by.xpath('//button[@role = \'option\']/div/div/div/div/span')).getText().then((list) => {
            expect(list.length).toEqual(5);
            expect(list.includes('Lyft')).toBe(true);
            expect(list.includes('Lyft XL')).toBe(true);
            expect(list.includes('Lux')).toBe(true);
            expect(list.includes('Lux Black')).toBe(true);
            expect(list.includes('Lux Black XL')).toBe(true);
        });
    };

    verify_trip_details_drop_off() {
        let verify_trip_details_drop_off = this.trip_details_drop_off;
        return verify_trip_details_drop_off.then((_promise) => {
            verify_trip_details_drop_off = _promise;
            return verify_trip_details_drop_off.getText();
        }).catch((err) => {
            return Promise.reject('error in verify_trip_details_pick_up function');
        })
    };

}

module.exports = new GetRide();