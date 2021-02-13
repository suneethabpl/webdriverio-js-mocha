const spicejetPage = require("./pageobjects/actionpages");
import { expect as chaiExpect, assert } from 'chai';
describe("page actions features", function () {

    it("move to element", function () {
        browser.url("https://www.spicejet.com/")
        spicejetPage.moveToElement(spicejetPage.loginSignupLink);
        spicejetPage.moveToElement(spicejetPage.spiceClubMembers);
        spicejetPage.clcikElement(spicejetPage.memberLogin);
        browser.pause(10000);
    });
    it("keys action perform Tab", function () {
        browser.url("https://the-internet.herokuapp.com/key_presses");
        spicejetPage.enterSearch('Tab');
        const text = spicejetPage.getresultlabelText();
        console.log(text);
        assert.equal("You entered: TAB", text);
        browser.pause(10000);
    })
    it("keys action perform Shift", function () {
        browser.url("https://the-internet.herokuapp.com/key_presses");
        spicejetPage.enterSearch('Shift');
        const text = spicejetPage.getresultlabelText();
        console.log(text);
        assert.equal("You entered: SHIFT", text);
        browser.pause(10000);
    })
    it("keys action perform F1", function () {
        browser.url("https://the-internet.herokuapp.com/key_presses");
        spicejetPage.enterSearch('F1');
        const text = spicejetPage.getresultlabelText();
        console.log(text);
        assert.equal("You entered: F1", text);
        browser.pause(10000);
    })
});
