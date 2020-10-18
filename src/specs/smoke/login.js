
'use strict'

let config = require('../../../config/urls.js');
let loginPage = require('../../pages/login_page.js')
let data = require("../../..//data/data.js");
//let utils = require("../../..//lib/commonUtils.js");

browser.ignoreSynchronization = true;


describe('Login page validation: ', function() {

  beforeEach((done) => {
    browser.waitForAngularEnabled(false);
    browser.get(config.url.login.baseUrl).then(() => {
        done();
    });
  });

  it('validation to login page test- ', function() {
    browser.driver.manage().deleteAllCookies().then(() => {
    }).then(() => {
        return browser.driver.manage().window().maximize();
    }).then(() => {
        return loginPage.verify_welcome_back_text();
    }).then((text) => {
        return expect(text).toContain('Welcome back to Lyft');
    }).catch((err) => {
        return Promise.reject (err);
    });
  });

  it('validation with unregistered mobile no- ', function() {
    browser.driver.manage().deleteAllCookies().then(() => {
    }).then(() => {
      return browser.driver.manage().window().maximize();
    }).then(() => {
      return loginPage.set_login('888888888889999');
    }).then(() => {
      return loginPage.click_next();
    }).then(() => {
      return loginPage.verify_unable_to_contact();
    }).then((text) => {
      return expect(text).toContain('problem using this phone');
      done();
    }).catch((err) => {
      return Promise.reject (err);
    });
  });


  afterEach((done) => {
    browser.get(config.url.getStarted.baseUrl).then(() => {
        done();
    });
  });


});

  