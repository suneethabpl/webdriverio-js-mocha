//note--to be displayed, to have text containing, to have link containg 
//we write tests on the watches page
//go to watches page, we have to hover on Fashion and then click on the watches link 
//make sure we are under ebay jewellery & Watches and watches, parts and Accessories
//and tehn write test for the watch-banner
//first the banner is displayed  and tehn write a test for text on the banner. 
//and then the banner has Get the Coupon link .
//when we click the link, it opens new url and then verify the url.

//need to install an extension for that clcik on the extensions give  mocha snippets and then we can see
//ES6 Mocha Snippets for Visual Studio Code and then install it. 
//note--- ES6 Mocha Snippets to reduce the amount of boiler plate you need to type when creating a test file using mocha.
//now type describe and click arrow key to select describe or clcik on enter key from keyboard.
import {expect as chaiExpect, assert}  from 'chai';
import 'chai/register-should';
//here we import the expect library just name is chaiExpect.
//o/p error is SyntaxError: Cannot use import statement outside a module.
//because webdriverIO is not recognizing this import keyword because import is next generation(es6) javascript keyword. 
//we need to Babel to test to work with java script es6
//babel can contain es6 javascrit file that is compatability with our test.
//installation of babel--npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register

describe('Watches Page', () => {
    it('should show the banner container', () => {
        browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535')
        //write test for the watch-banner
        //for that go to ebay site, go to inspect, select inspect icon and hover on watches banner
        //and tehn we can see section. but we have class not id in this section. so we use class as selector.
        //copy the class like this .b-promobanner and paste in the text/input field (by using command +f) in dom. 
        //and then we can see lots of node having end of the text/input field (by using command +f) in dom. 
        //if we add section.b-promobanner then we can see 2 nodes but we use the selector when it has one node at that time only it is unique selector.
        //so. i hover on the first sectionin dom then we can see selector of banner image  
        //type selector what u can see on the top of banner image in the text/input field (by using command +f) in dom. 
        const promoBanner = $('section.b-promobanner.clearfix._FCF2BD5C1B05.d1img70');
        //verify the banner is displayed or not
        //for that use expect assertion with toBeDisplayed method. 
        expect(promoBanner).toBeDisplayed();
    });


    //write test for verify text on the banner
    //here we have a use case where we don't even want to add this particular string
    //text is so dynamic it changes all the time so all we wanto to
    //verify is that the text is not empty we can do 
    //very easily with chai 
    it('should show the banner title', () => {
        //<h2 class="b-promobanner__info-title">Up to 30% off Rolex</h2>
        //this h2 on the banner image.
        //so we use it as selector 
        const infoTitle = $('.b-promobanner__info-title');
        //this test is to verify this selector b-promobanner__info-title or not
        //because infoTitle is a selector. it is not text.
        //so, to get the text we create variable , call infoTitleText.
        const infoTitleText = infoTitle.getText();
        expect(infoTitle).toHaveTextContaining('Up to 30% off Rolex');
        chaiExpect(infoTitleText).to.not.be.empty;
        infoTitle.should.not.be.empty;
        assert.isNotEmpty(infoTitleText);
    });


    //write for verify a link on a banner button
    //equla is to verify a particular string that you pass and it should be equal to what si teh 
    //the string we are trying to verify so 
    it('should contain link on banner button and verify its clickable', () => {
        //in dom, we can see class in a tag. 
        const shopButton = $('.b-promobanner__info-btn');
        const tag = shopButton.getTagName();

        expect(shopButton).toHaveLinkContaining('/fashion/');
        expect(shopButton).toBeClickable();
        //toBeClickable() to checs if an element can be clicked by calling isclcikable element.
        chaiExpect(tag).to.equal('a');
        tag.should.be.equal('a');
    });

    // it('should clcik on the shop button and verify the new url', () => {
    //     const shopButton = $('.b-promobanner__info-btn');
    //     shopButton.click();
    //     expect(shopButton).toHaveUrlContaining('https://www.ebay.com/e/fashion/rolex-021720');
    //     expect(browser).toHaveUrl('https://www.ebay.com/e/fashion/rolex-021720')
        // in this test, first we clcik on shopButton
        //once we clicked on shopButton then it goes to the new url 
        //and then we verify teh new url
        //when we developer change the url then what happened. we need to test whenever url is changed
        //at taht time test will not work. we need to build the test to work all the time unless.
        //there is specific change made by a developer
        //webdriverIO has toHaveLinkContaining() to check the link is 
    // });

    it('should clcik on the shop button and verify the new url by using chaiJS to check url is exist or not instead of toHaveUrlContaining which is reqular webdriverIO assertion', () => {
        const shopButton = $('.b-promobanner__info-btn');
        shopButton.click();
       const url = browser.getUrl();
       chaiExpect(url).to.include('/fashion/');
       //and then we use chai assertions to verify url
     
});
});