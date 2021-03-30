//create basic search test for that write laptop in search input box and then 
//click on search button, once we are on the page .
//and tehn 1)verify we are on the currect  page by finding a title 
//and then 2)verify the value of the serach input field 
//3)and then verify dropdown gets updated to PC laptops and note books. 

import searchPage from './pageobjects/searchPage';
//1)this test for verify we are on the currect  page by finding a title 
describe('Ebay product search', () => {
    it('should open the main url and verify the title', () => {
        // browser.url('https://www.ebay.com/');
        searchPage.open()
        expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay')
    })


    //2) this test for create basic search test for that write laptop in search input box and then 
    //click on search button,
    it('should search for a product and verify the search text value', () => {
        //then go to ebay site and go to right click on the page to go to inspect, clcik on the inspect icon and then 
        //hover on the input textbox and then we can see our input field is highlighted in the dom.
        //and then we need to find the unique selector for our input. we have id in input tag in dom. 
        //copy the value of id and click command+f to open textfield in dom and then paste the id value in it.
        //we can see 13 nodes. we do not need all those so we
        //put # infront of id value like #gh-ac in textfield of dom. 
        //now we can see one node. 
        //paste #gh-ac , wrap this into strings and then add $ and paranthesis(), like this webdriver reads unique selector(gh-ac)
        //and then we put it into a variable we can use let or const. 
        // const searchInput = $('#gh-ac');
        //now need to find element for button , that is id=gh-btn
        // const searchBtn = $('#gh-btn');
        searchPage.searchInput.addValue('Laptop');
        searchPage.searchBtn.click();
        //add a value in search input box/field for that we use addValue method. 
        // searchInput.addValue('Laptop');
        //use click method to click on button
        // searchBtn.click();
        //now we need to add assertion to verify search text value has laptop that we are giving in input/textfield.
        // expect(searchInput).toHaveValue('Laptop');
        expect(searchPage.searchInput).toHaveValue('Laptop');
    })

    //3) this test for it should be redirect to new page and we will verify the title of the page
    it('should redirect to a new page and verify the title', () => {
        //for that we need one assertion, no need any actions.
        //go to ebay site, go to inspect,click coomand+f, give textbox/inputfield in dom and 
        //write like this <title> in it and tehn we can see <title>Laptop | eBay</title> in dom. 
        expect(browser).toHaveTitle('Laptop | eBay');
    })

    //4)this test for verify our search category gets updated means verify dropdown gets updated to PC laptops and note books. 
    it('should update the search category', () => {
        // go to ebay site, go to inspect, select inspect icon, select dropdwon and then 
        //we can see select tag for dropdownlist in dom. when we click on select then we can see all text in list.
        //and then we copy  id of the select tag and paste the dom textfield/input field (it appears command+f)
        //and then give space to write option next to id. 
        //now we get all the values of options but we need first option value only 
        //for that we give  nth-child(1) which is css selector
        //finally we write #gh-cat option:nth-child(1) in the dom textfield/input field.
        //we copy that and paste it in visual studio.
        // const category = $('#gh-cat option:nth-child(1)');
        //write assertiopn to verify the category should have text like PC Laptops & Netbooks
        browser.waitUntil(
            //create a function to retrun the truthy value.
            //waitUntil the text for this serach category is equal to 'PC Laptops & Netbooks'
            function(){
                return searchPage.category.getText() === 'PC Laptops & Netbooks';
            }, {timeout: 3000}
        );
        expect(searchPage.category).toHaveText('PC Laptops & Netbooks');
    })
})