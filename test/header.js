
describe("interaction with web element", function () {
    it("get header value", function () {
        browser.url('https://www.freshworks.com');
        browser.maximizeWindow();
        const header = $('h1');
        let text = header.getText();
        console.log(`page title is {text}`);
    });
});