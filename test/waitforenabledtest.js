
import {expect as chaiExpect, assert}  from 'chai';
describe('wait for enabled case', function () {
    it(' should wait for button to enabled', function () {
        browser.url("https://classic.crmpro.com/register/")
        const checkBox = $(`//input[@name='agreeTerms']`);
        const submitbtn = $('#submitButton');
        checkBox.click();
        browser.pause(3000);
        submitbtn.waitForEnabled(4000);
        assert.equal(true, submitbtn.isEnabled());
    })


})