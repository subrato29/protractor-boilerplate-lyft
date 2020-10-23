
let url = require('../../../config/urls.js');
let citiesPage = require('../../pages/cities_page.js')
let data = require("../../../data/data.js");

browser.ignoreSynchronization = true;

describe('Valid destination testing: ', function() {

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

	it('Verifying destination where lyft service is not allowed: ', function(){
		browser.driver.manage().deleteAllCookies().then(() => {
			return browser.driver.manage().window().maximize();
		}).then(() => {
			return citiesPage.set_find_your_city(data.prod.destination_without_lyft_service);
		}).then(() => {
	    	return citiesPage.no_lyft_service();
	    }).then((text) => {
	    	return expect(text).toBe(true);
	    	done();
	    }).catch((err) => {
	    	return Promise.reject (err);
	    });
	}); 


	afterEach((done) => {
	    browser.get(url.url.getStarted.baseUrl).then(() => {
	        done();
	    });
	});

});