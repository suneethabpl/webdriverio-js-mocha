
import searchPage from './pageobjects/searchPage';
describe('Ebay product search', () => {
    it('should open the main url and verify the title', () => {
        searchPage.open()
        expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay')
    })

    it('should search for a product and verify the search text value', () => {
        searchPage.searchInput.addValue('Laptop');
        searchPage.searchBtn.click();
        expect(searchPage.searchInput).toHaveValue('Laptop');
    })

    it('should redirect to a new page and verify the title', () => {
        expect(browser).toHaveTitle('Laptop | eBay');
    })


    it('should update the search category', () => {
        browser.waitUntil(
            function(){
                return searchPage.category.getText() === 'PC Laptops & Netbooks';
            }, {timeout: 3000}
        );
        expect(searchPage.category).toHaveText('PC Laptops & Netbooks');
    })
})