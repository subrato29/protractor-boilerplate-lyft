'use strict';

class LoginPage {

    get welcome_back_to_lyft () {
        return new Promise((resolve, reject) => {
            element(by.xpath('//h1[contains(text(), \'Welcome back to Lyft\')]')).isPresent().then((present) => {
                if (present) {
                    resolve(element(by.xpath('//h1[contains(text(), \'Welcome back to Lyft\')]')));
                } else {
                    browser.getCurrentUrl().then((url) => {
                        reject('Error retrieving welcome_back_to_lyft text. ' + url);
                    });
                }
            });
        });
    };

    get login () {
        return new Promise((resolve, reject) => {
            element(by.xpath('//input[@placeholder = \'Phone Number\']')).isPresent().then((present) => {
                if (present) {
                    resolve(element(by.xpath('//input[@placeholder = \'Phone Number\']')));
                } else {
                    browser.getCurrentUrl().then((url) => {
                        reject('Error retrieving login textbox. ' + url);
                    });
                }
            });
        });
    };

	verify_welcome_back_text() {
        let _this = this;
        let verify_welcome_back_text = _this.welcome_back_to_lyft;
        return verify_welcome_back_text.then((_verify_welcome_back_text) => {
            verify_welcome_back_text = _verify_welcome_back_text;
            return verify_welcome_back_text.getText();
        }).catch((err) => {
            return Promise.reject(err);
        });
    }

    set_login (phoneNo) {
        let _this = this;
        let set_login = _this.login;
        return set_login.then((_set_login) => {
            set_login = _set_login;
            return set_login.sendKeys(phoneNo);
        }).catch((err) => {
            return Promise.reject(err);
        });
    }

};

module.exports = new LoginPage();