

describe('wait for enabled case', function () {
    // it.skip(' should wait for button to enabled', function () {
    it(' should wait for button to enabled', function () {
        browser.url("https://classic.crmpro.com/register/")
        //we need one webelement for checkbox and other webelement is button. 
        //checkbox does not have any ID, class property so i'll using XPath for this. 
        //we use xpath by using name ="agreeTerms" 
        //xpath will start with double slashes like //
        const checkBox = $(`//input[@name='agreeTerms']`);
        const submitbtn = $('#submitButton');
        checkBox.click();
        browser.pause(3000);
        submitbtn.waitForEnabled(4000);
        assert.equal(true, submitbtn.isEnabled());
        //the moment we clcik on the checkbox this particular checkbox if the button is 
        //enabled we are checking we are waiting for button to be enabled for element to be 
        //enabled within 4 seconds. 
    })

    // it(' should wait for button to disabled', function () {
    //     browser.url("https://classic.crmpro.com/register/")
    //     //we need one webelement for checkbox and other webelement is button. 
    //     //checkbox does not have any ID, class property so i'll using XPath for this. 
    //     //we use xpath by using name ="agreeTerms" 
    //     //xpath will start with double slashes like //
    //     const checkBox = $(`//input[@name='agreeTerms']`);
    //     const submitbtn = $('#submitButton');
    //     checkBox.waitForDisplayed();
    //     checkBox.click();
    //     // browser.pause(3000);
    //     submitbtn.waitForEnabled(4000);
    //     assert.equal(true, submitbtn.isEnabled());
    //     //the moment we clcik on the checkbox this particular checkbox if the button is 
    //     //enabled we are checking we are waiting for button to be enabled for element to be 
    //     //enabled within 4 seconds. 
    //     checkBox.click();
    //     submitbtn.waitForEnabled(4000, true);
    //     assert.equal(false, submitbtn.isEnabled());
    //     //here we clicked on the checkbox and button is already disabled 
    //     //so isEnabled() will return false so that'swhy i have to write false
    //     //this test is should wait for button to be disabled, we are clicking checkbox,
    //     //waiting for enabled, and then assert it. and we clcik on checkbox 
    //     //and again we wait for button to be disabled by passing true, 
    //     //it will behave like the reverse on this and then again check button
    //     //is disabled. isenabled() will return false and  then give assert it. 
    //     //element will be waited for enabled,displayed in 500miliseconds by default.

    // })
})