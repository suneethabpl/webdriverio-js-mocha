const InternetHerokuapp = require("./pageobjects/internet-herokuapppage");
import { expect , assert } from 'chai';
describe("handling checkboxes", function () {
    it("check checkbox page header", function () {
        browser.url('/');
        InternetHerokuapp.clickOnLink(6);
        InternetHerokuapp.h3Header.waitForDisplayed();
        const text = InternetHerokuapp.h3Header.getText();
        expect(text).equals("Checkboxes");
    })

    it("should click checkbox", function () {
        browser.url("/");
        InternetHerokuapp.clickOnLink(6);
        InternetHerokuapp.h3Header.waitForDisplayed();
        InternetHerokuapp.clickOnCheckBox(1);
        expect(InternetHerokuapp.getCheckBoxElement(1).isSelected()).equals(true);
        browser.pause(5000);
    });
});