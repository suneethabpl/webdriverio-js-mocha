
import { expect as chaiExpect } from 'chai';
import watchesPage from './pageobjects/watchesPage';
describe('Watches Page', () => {
    before(() => {
        watchesPage.open();
        watchesPage.fashionLink.moveTo();
        watchesPage.watchesLink.waitForDisplayed({ timeout: 1000 });
        watchesPage.watchesLink.click();
    })
  

    after(() => {
        browser.url('https://ebay.com');
    });
    afterEach(() => {
        browser.refresh();
    })


    it('should contain link on banner button and verify its clickable', () => {
        expect(watchesPage.shopButton).toHaveLinkContaining('/fashion/');
        expect(watchesPage.shopButton).toBeClickable();
        expect(watchesPage.shopButton).toBeClickable();
    });



    it('should clcik on the shop button and verify the new url by using chaiJS to check url is exist or not instead of toHaveUrlContaining which is reqular webdriverIO assertion', () => {
        watchesPage.shopButton.click();
        const url = browser.getUrl();
        chaiExpect(url).to.include('/fashion/');
        expect(browser).toHaveUrl('https://www.ebay.com/e/fashion/rolex-021720');
    });
});