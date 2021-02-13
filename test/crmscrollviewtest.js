const crmPage = require('./pageobjects/crmpage')
describe("scroll to elemewnt", function () {
        it("should scroll to forgot pwd link", function () {
        browser.url("https://crmpro.com/");
        console.log("in view port", crmPage.forgotpwdLink.isDisplayedInViewport());
        crmPage.forgotpwdLink.click();
        crmPage.forgotpwdLink.scrollIntoView();
        console.log("in view port", crmPage.forgotpwdLink.isDisplayedInViewport());
        crmPage.forgotpwdLink.click();
    })

    it("should scroll to forgot pwd link,move and click", function () {
    browser.url("https://crmpro.com/");
    console.log("in view port", crmPage.forgotpwdLink.isDisplayedInViewport());
    crmPage.forgotpwdLink.click();
    crmPage.forgotpwdLink.scrollIntoView();
    console.log("in view port", crmPage.forgotpwdLink.isDisplayedInViewport());
    crmPage.moveToElement(crmPage.forgotpwdLink);
    crmPage.forgotpwdLink.click();
})
})