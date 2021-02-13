const loginPage = require("./pageobjects/loginpage");
import {expect as chaiExpect, assert}  from 'chai';
describe("handle application login", function () {
    it("enter username", function () {
        browser.url(`${browser.options.baseUrl}/login`);
        loginPage.enterUserName('tomsmith');
        assert.equal('tomsmith', loginPage.username.getValue());
        browser.pause(5000);
    });

    it("enter password", function () {
        loginPage.enterPassword('SuperSecretPassword');
        assert.equal('SuperSecretPassword', loginPage.password.getValue());
        browser.pause(5000);
    });

    it("clcik login button", function () {
        loginPage.clickOnLogin();
        browser.pause(1000);
    });

    it("should clear usernmae value", function () {
        loginPage.username.click();
        loginPage.username.clearValue();
        assert.equal('', loginPage.username.getValue());
    });
});