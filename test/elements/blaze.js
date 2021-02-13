const blazePage = require("../pageobjects/blazemeterpage");

describe("blaze page elements handle", function () {
    it("get texts of all main links", function () {
        browser.url('https://www.blazemeter.com/');
        console.log('third link is:', blazePage.specifyChildElement(3).getText());
        blazePage.getspecificChildElementText(4);
    })
    it('main heading exists?', function () {
        console.log(blazePage.mainheader.isDisplayed());
    })
    it('main heading enabled?', function () {
        console.log(blazePage.mainheader.isEnabled());
    })

    it('main heading exists?', function () {
        console.log(blazePage.mainheader.isExisting());
    })

    it('main heading displayed in viewport?', function () {
        console.log(blazePage.mainheader.isDisplayedInViewport());
    })

    it('jmeter is displayed in viewport?', function () {
        console.log(blazePage.jmeterLink.isDisplayedInViewport());
    })

    it('clcik on product link if displayed', function () {
      blazePage.clcikOnProductLink();
      browser.pause(10000);
    })
});