
import {expect as chaiExpect, assert}  from 'chai';
import 'chai/register-should';

describe('Watches Page', () => {
    it('should show the banner container', () => {
        browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535')
        const promoBanner = $('section.b-promobanner.clearfix._FCF2BD5C1B05.d1img70');
        expect(promoBanner).toBeDisplayed();
    });


    it('should show the banner title', () => {
        const infoTitle = $('.b-promobanner__info-title');
        const infoTitleText = infoTitle.getText();
        expect(infoTitle).toHaveTextContaining('Up to 30% off Rolex');
        chaiExpect(infoTitleText).to.not.be.empty;
        infoTitle.should.not.be.empty;
        assert.isNotEmpty(infoTitleText);
    });


    it('should contain link on banner button and verify its clickable', () => {
        const shopButton = $('.b-promobanner__info-btn');
        const tag = shopButton.getTagName();

        expect(shopButton).toHaveLinkContaining('/fashion/');
        expect(shopButton).toBeClickable();
        chaiExpect(tag).to.equal('a');
        tag.should.be.equal('a');
    });

    it('should clcik on the shop button and verify the new url', () => {
        const shopButton = $('.b-promobanner__info-btn');
        shopButton.click();
        expect(shopButton).toHaveUrlContaining('https://www.ebay.com/e/fashion/rolex-021720');
        expect(browser).toHaveUrl('https://www.ebay.com/e/fashion/rolex-021720')
    });

});