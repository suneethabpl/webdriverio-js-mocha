const alertPage = require('../pageobjects/alertpage')

describe("handle alert pop ups", function () {
    it.skip('accept alert', function () {
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

    it.skip('dismiss alert', function () {
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        alertPage.clickOnAlertButton(2)
        browser.dismissAlert();
        console.log(alertPage.getResultText());
        assert.equal('You clicked: Cancel', alertPage.getResultText());
        browser.pause(30000);
    })

    it.skip('enter text on alert and accept', function() {
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        alertPage.clickOnAlertButton(3)
        browser.sendAlertText('this is Alert text');
        browser.acceptAlert();
        console.log(alertPage.getResultText());
        assert.equal('You entered: this is Alert text', alertPage.getResultText());
        browser.pause(30000);
        //note--this text this is Alert text which is passing and then it will give this particular message
        //You entered: this is Alert text and then capturing this message from getResultText() method 
        //and validating this(You entered: this is Alert text) is my expected and (getResultText())
        //this is my actual and then reading for 3 seconds. 
    })


    //note---https://mail.rediff.com/cgi-bin/login.cgi
    //in above link, we have username,password labels and textboxes and signin button. 
    //in the inspect, console, we noticed signin button does not have any specific id or class property.
    
    it('alert accept on rediffmail login page', function(){
        browser.url("https://mail.rediff.com/cgi-bin/login.cgi");
        $(`//input[@type='submit']`).waitForDisplayed();
        $(`//input[@type='submit']`).click();
        browser.pause(3000);
        const text = browser.getAlertText();
        console.log(text);
        assert.equal('Please enter a valid user name',text);
        browser.acceptAlert();
        browser.pause(3000);
    })
})