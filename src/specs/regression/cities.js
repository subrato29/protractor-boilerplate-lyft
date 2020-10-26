
let url = require('../../../config/urls.js');
let citiesPage = require('../../pages/cities_page.js')
let data = require("../../../data/data.js");
let utils = require('../../../lib/commonUtils.js');

browser.ignoreSynchronization = true;

describe('Cities page testing: ', function() {

	beforeEach((done) => {
	    browser.waitForAngularEnabled(false);
	    browser.get(url.url.cities.baseUrl).then(() => {
	        done();
	    });
	});

	it('Verifying correct navigation of valid destination: ', function() {
		browser.driver.manage().deleteAllCookies().then(() => {
	    }).then(() => {
	        return browser.driver.manage().window().maximize();
	    }).then(() => {
	    	return citiesPage.set_find_your_city(data.prod.destination);
	    }).then(() => {
	    	return citiesPage.verify_got_your_easy_ride();
	    }).then((text) => {
	    	return expect(text).toContain(data.prod.city);
	    	done();
	    }).catch((err) => {
	    	return Promise.reject (err);
	    });
	});

	// it('Verifying destination where lyft service is not allowed: ', function() {
	// 	browser.driver.manage().deleteAllCookies().then(() => {
	// 		return browser.driver.manage().window().maximize();
	// 	}).then(() => {
	// 		return citiesPage.set_find_your_city(data.prod.destination_without_lyft_service);
	// 	}).then(() => {
	//     	return citiesPage.no_lyft_service();
	//     	done();
	//     }).catch((err) => {
	//     	return Promise.reject (err);
	//     });
	// });

	it('A ride for every occasion: ', function() {
		browser.driver.manage().deleteAllCookies().then(() => {
	    }).then(() => {
	        return browser.driver.manage().window().maximize();
	    }).then(() => {
	    	return citiesPage.set_find_your_city(data.prod.destination);
	    }).then(() => {
	    	return citiesPage.ride_for_every_occasion;
	    }).then((bool) => {
	    	return expect(bool).toBe(true);
	    }).then(() => {
	    	return citiesPage.verify_ride_for_every_occasion_lyft_xl();
	    }).then((bool) => {
	    	return expect(bool).toBe(true);
	    }).then(() => {
	    	return citiesPage.verify_ride_for_every_occasion_lux();
	    }).then((bool) => {
	    	return expect(bool).toBe(true);
	    	done();
	    }).catch((err) => {
	    	return Promise.reject (err);
	    });
	});

	it('Validate fare estimate: ', function() {
		browser.driver.manage().deleteAllCookies().then(() => {
		}).then(() => {
			return browser.driver.manage().window().maximize();
		}).then(() => {
			return citiesPage.set_find_your_city(data.prod.destination);
		}).then(() => {
			return citiesPage.set_pick_up_loc(data.prod.pick_up);
		}).then(() => {
			return citiesPage.set_drop_off_loc(data.prod.drop_off);
		}).then(() => {
			return citiesPage.click_get_estimate();
		}).then(() => {
			return citiesPage.get_ride_types();
			done();
		}).catch((err) => {
			return Promise.reject(err);
		})
	}); 

	it('Currently no rides for this route: ', function() {
		browser.driver.manage().deleteAllCookies().then(() => {
		}).then(() => {
			return browser.driver.manage().window().maximize();
		}).then(() => {
			return citiesPage.set_find_your_city(data.prod.destination);
		}).then(() => {
			return citiesPage.set_pick_up_loc("401 West Seminole Boulevard, Sanford, FL, USA");
		}).then(() => {
			return citiesPage.set_drop_off_loc("151 Wooster St, New York, NY 10012, USA");
		}).then(() => {
			return citiesPage.click_get_estimate();
		}).then(() => {
			return citiesPage.currently_no_rides;
			done();
		}).catch((err) => {
			return Promise.reject(err);
		})
	}); 


	afterEach((done) => {
	    browser.get(url.url.getStarted.baseUrl).then(() => {
	        done();
	    });
	});

});