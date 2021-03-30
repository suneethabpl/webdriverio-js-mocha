const crmPage = require('./pageobjects/crmpagecrmpage')
describe("scroll to elemewnt", function () {
    // it.skip("should scroll to forgot pwd link", function () {
        it("should scroll to forgot pwd link", function () {
        browser.url("https://crmpro.com/");
        console.log("in view port", crmPage.forgotpwdLink.isDisplayedInViewport());
        crmPage.forgotpwdLink.click();//it goes to forgotpedLink and then click on it.
        //but sometimes it does not go to directly forgotpwdLink so i will use below process.
        crmPage.forgotpwdLink.scrollIntoView();//means scroll down to the specific element. and then
        //check to view port. 
        console.log("in view port", crmPage.forgotpwdLink.isDisplayedInViewport());
        crmPage.forgotpwdLink.click();
    })

    it("should scroll to forgot pwd link,move and click", function () {
    browser.url("https://crmpro.com/");
    console.log("in view port", crmPage.forgotpwdLink.isDisplayedInViewport());
    crmPage.forgotpwdLink.click();//it goes to forgotpedLink and then click on it.
    //but sometimes it does not go to directly forgotpwdLink so i will use below process.
    crmPage.forgotpwdLink.scrollIntoView();//means scroll down to the specific element. and then
    //check to view port. 
    console.log("in view port", crmPage.forgotpwdLink.isDisplayedInViewport());
    //now try to move to specfic element means here forgotpwdLink and then click on it. 
    crmPage.moveToElement(crmPage.forgotpwdLink);
    crmPage.forgotpwdLink.click();
})
})