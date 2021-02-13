describe("interaction with web element", function () {
    it("enter value in a field", function () {
        browser.url('https://www.amazon.com');
        browser.maximizeWindow();
         const search = $('#twotabsearchtextbox');
        search.setValue('Apple MAc Book');
        browser.pause(10000);
   
    });

    it("get text of field", function () {
        browser.url('https://www.amazon.com');
        browser.maximizeWindow();
        browser.pause(10000);
        const label = $('span.a-size-base.a-color-base');
        let text = label.getText();
        console.log(text);
    });

    it("clcik on  a field", function () {
        browser.url('https://www.amazon.com');
        const icon = $('input.nav-input');
        icon.click();
    });
});



