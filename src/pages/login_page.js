'use strict';

let utils = require("../..//lib/commonUtils.js");

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

    get next() {
        return new Promise ((resolve, reject) => {
            element(by.xpath('//button[text() = \'Next\']')).isPresent().then((present) => {
                if (present) {
                    resolve(element(by.xpath('//button[text() = \'Next\']')));
                } else {
                    browser.getCurrentUrl().then((url) => {
                        reject('Error retrieving next checkbox. ' + url);
                    });
                }
            });
        });
    };

    get unable_to_contact() {
        return new Promise ((resolve, reject) => {
            utils.isElementPresent('//input[@type = \'email\']');
            element(by.xpath('//p[@class = \'text-book\']/span')).isPresent().then((present) => {
                if (present) {
                    resolve(element(by.xpath('//p[@class = \'text-book\']/span')));
                } else {
                    browser.getCurrentUrl().then((url) => {
                        reject('Error retrieving unable_to_contact text. ' + url);
                    });
                }
            });
        });
    };

    get find_your_account() {
        return new Promise ((resolve, reject) => {
            element(by.xpath('//a[text() = \'Find your account\']')).isPresent().then((present) => {
                if (present) {
                    resolve(element(by.xpath('//a[text() = \'Find your account\']')));
                } else {
                    browser.getCurrentUrl().then((url) => {
                        reject('Error retrieving find_your_account link. ' + url);
                    });
                }
            });
        });
    };

    get email() {
        return new Promise ((resolve, reject) => {
            utils.isElementPresent('//input[@type = \'email\']');
            element(by.xpath('//input[@type = \'email\']')).isPresent().then((present) => {
                if (present) {
                    resolve(element(by.xpath('//input[@type = \'email\']')));
                } else {
                    browser.getCurrentUrl().then((url) => {
                        reject('Error retrieving email textbox. ' + url);
                    });
                }
            });
        });
    };

    get check_your_email() {
        return new Promise ((resolve, reject) => {
            utils.isElementPresent('//h1[text() = \'Check your email\']');
            element(by.xpath('//h1[text() = \'Check your email\']')).isPresent().then((present) => {
                if (present) {
                    resolve(element(by.xpath('//h1[text() = \'Check your email\']')));
                } else {
                    browser.getCurrentUrl().then((url) => {
                        reject('Error retrieving check_your_email text. ' + url);
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

    click_next() {
        let click_next = this.next;
        return click_next.then((_click_next) => {
            click_next = _click_next;
            return click_next.click();
        }).catch((err) => {
            return Promise.reject(err);
        })
    }

    verify_unable_to_contact() {
        let verify_unable_to_contact = this.unable_to_contact;
        return verify_unable_to_contact.then((_verify_unable_to_contact) => {
            verify_unable_to_contact = _verify_unable_to_contact;
            return verify_unable_to_contact.getText();
        }).catch((err) => {
            return Promise.reject(err);
        })
    }

    click_find_your_account() {
        let click_find_your_account = this.find_your_account;
        return click_find_your_account.then((_promise) => {
            click_find_your_account = _promise;
            return click_find_your_account.click();
        }).catch((err) => {
            return Promise.reject(err);
        })
    }

    set_email(email_ID) {
        let set_email = this.email;
        return set_email.then((_promise) => {
            set_email = _promise;
            return set_email.sendKeys(email_ID);
        }).catch((err) => {
            return Promise.reject(err);
        })
    }

    verify_check_your_email() {
        let verify_check_your_email = this.check_your_email;
        return verify_check_your_email.then((_promise) => {
            verify_check_your_email = _promise;
            return verify_check_your_email.getText();
        }).catch((err) => {
            return Promise.reject(err);
        })
    }

};

module.exports = new LoginPage();