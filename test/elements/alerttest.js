const alertPage = require('../pageobjects/alertpage')
import {expect as chaiExpect, assert}  from 'chai';
describe("handle alert pop ups", function () {
    it('accept alert', function () {
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        alertPage.clickOnAlertButton(1)
        const alertText = browser.getAlertText();
        console.log(alertText);
        assert.equal('I am a JS Alert', alertText);
        browser.acceptAlert();
        console.log(alertPage.getResultText());
        assert.equal('You successfuly clicked an alert', alertPage.getResultText());
        browser.pause(30000);
    })

    it('dismiss alert', function () {
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        alertPage.clickOnAlertButton(2)
        browser.dismissAlert();
        console.log(alertPage.getResultText());
        assert.equal('You clicked: Cancel', alertPage.getResultText());
        browser.pause(30000);
    })

    it('enter text on alert and accept', function() {
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        alertPage.clickOnAlertButton(3)
        browser.sendAlertText('this is Alert text');
        browser.acceptAlert();
        console.log(alertPage.getResultText());
        assert.equal('You entered: this is Alert text', alertPage.getResultText());
        browser.pause(30000);
    })

    
    it('alert accept on rediffmail login page', function(){
        browser.url("https://mail.rediff.com/cgi-bin/login.cgi");
        $(`//input[@type='submit']`).waitForDisplayed();
        $(`//input[@type='submit']`).click();
        browser.pause(9000);
        const text = browser.getAlertText();
        console.log(text);
        assert.equal('Please enter a valid user name',text);
        browser.acceptAlert();
        browser.pause(9000);
    })
})