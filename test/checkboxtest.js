const InternetHerokuapp = require("./pageobjects/internet-herokuapppage");
import { expect , assert } from 'chai';
describe("handling checkboxes", function () {

    //chcek we launch correct url or not

    // it("check page url", function () {
    //     browser.url('/');
    //     // expect(browser.getUrl()).equals("https://the-internet.herokuapp.com/")
    //     expect(browser.getUrl()).equals(`${browser.options.baseUrl}/`);
    // });

    it("check checkbox page header", function () {
        browser.url('/');
        InternetHerokuapp.clickOnLink(6);
        InternetHerokuapp.h3Header.waitForDisplayed();
        const text = InternetHerokuapp.h3Header.getText();
        expect(text).equals("Checkboxes");
    })

    // it("check checkbox page url", function () {
    //     browser.url('/');
    //     InternetHerokuapp.clickOnLink(6);
    //     expect(browser.getUrl()).equals(`${browser.options.baseUrl}/checkboxes`);
    // })


    it("should click checkbox", function () {
        browser.url("/");
        InternetHerokuapp.clickOnLink(6);
        InternetHerokuapp.h3Header.waitForDisplayed();
        //above line to check checkboxes headimg is displayed or not and
        //we use waitForDisplayed() to wait for specific element and then it will perform.
        //it is not visible , it will throw an expression. 
        //once checkboxes heading is displayed then click on the first checkbox. 
        InternetHerokuapp.clickOnCheckBox(1);
        //once clicked first checkbox, what we have to do that when we click on the 1st checkbox 
        //automatically checked property is there we can see in console. so, we have to write one assertion this is 
        //expect which is chai assertion. we already configure as    beforeTest: function () {
        //const chai = require('chai')
        //const chaiWebdriver = require('chai-webdriverio').default
        // chai.use(chaiWebdriver(browser))
        // global.assert = chai.assert
        // global.should = chai.should
        // global.expect = chai.expect 
        //}, in wdio.conf.js
        expect(InternetHerokuapp.getCheckBoxElement(1).isSelected()).equals(true);
        browser.pause(5000);
    });
});