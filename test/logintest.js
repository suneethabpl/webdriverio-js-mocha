const loginPage = require("./pageobjects/loginpage");
import {expect as chaiExpect, assert}  from 'chai';
describe("handle application login", function () {
    it("enter username", function () {
        browser.url(`${browser.options.baseUrl}/login`);
        loginPage.enterUserName('tomsmith');
        assert.equal('tomsmith', loginPage.username.getValue());
        //here assert is chai assertion and equal to check whatever the value that we have entered the 
        //same can you enter it or not. so i sent 'tomsmith'. and whqatever loginPage that you have got 
        //username element that we have created and tehn we getValue() instead og getText(). 
        //we use getText()method whenever there is a link, label, text and span elements.
        //getValue() means get the value from the textarea and the input fields.  
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
        //for click on username 
        loginPage.username.click();
        loginPage.username.clearValue();
        // assert.equal('tomsmith', loginPage.username.getValue());
        //and then clearvalue
        //and then check the value has been cleared or not 
        //actually after clear , we have blank space there so, get the blankspace by getvalue and then we compare it with tomsmith so here text will be failed.so,
        assert.equal('', loginPage.username.getValue());
        //now check with blackspace , test will be paased.
    });
});