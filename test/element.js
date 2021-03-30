describe("interaction with web element", function () {
    it("enter value in a field", function () {
        //first we lauch the URL and we already give baseurl in wdio.conf.js thatswhy we give('/')
        browser.url('https://www.amazon.com');
        browser.maximizeWindow();
        // browser.pause(10000);
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple MAc Book');
        browser.pause(10000);
   
    });

    it("get text of field", function () {
        //first we lauch the URL and we already give baseurl in wdio.conf.js thatswhy we give('/')
        browser.url('/');
        browser.maximizeWindow();
        browser.pause(10000);
        const label = $('span.a-size-base.a-color-base');
        let text = label.getText();
        console.log(text);
    });

    it("clcik on  a field", function () {
        //first we lauch the URL and we already give baseurl in wdio.conf.js thatswhy we give('/')
        browser.url('/');
        const icon = $('input.nav-input');
        icon.click();
    });
});



