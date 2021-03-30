// //describe our tets what we have a collection of our tests.
// //for that first we give name what a collection is. so, here i gave webdriver.io page
// //but we can give whatever we want. 
// //and then we create a funvtion ()=>
// //within the function we have it block 
// //it block is basically where our test wil be running
// //"""should have the right title""" this is the test we are actually trying to run. 
// //it should have right title
// //trying to verify title in it block.
// //next, browser.url means open the url which is webdriverio.
// //next,  we use expect which is our assertion library, we are trying to ensure what once the test is opened what we are trying to verify
// //in this scenario we are veryfying that it should have this title, so title is WebdriverIO · Next-gen browser and mobile automation test framework for Node.js
// //to verify the title is there or not , go to browser , go to the link, go to inspect, give command+f to display input field to us to search like <title> in dom elements. 
// describe('webdriver.io page', () => {
//     it('should have the right title', () => {
//         browser.url('https://webdriver.io')
//         expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
//     })
// })