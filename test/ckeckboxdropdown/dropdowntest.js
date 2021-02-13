describe("drop down handling", function () {
    it("select drop down value by text", function () {
        browser.url("https://www.facebook.com/signup");
        $('#day').selectByVisibleText('26');
        $('#month').selectByVisibleText('Jan');
        $('#year').selectByVisibleText('2010');
        browser.pause(10000);
    })

    it("select drop down value by index", function () {
        browser.url("https://www.facebook.com/signup");
        $('#day').selectByIndex(28);
        $('#month').selectByIndex(8);
        $('#year').selectByIndex(13);
        browser.pause(10000);
    })

    it("select drop down value by index", function () {
        browser.url("https://www.facebook.com/signup");
        $('#day').selectByAttribute('value', '25');
        $('#month').selectByAttribute('value', "7");
        $('#year').selectByAttribute('value', '2012');
        browser.pause(10000);
    })
    it("get all the values from dropdown function", function () {
        browser.url("https://www.facebook.com/signup");
        let list = $$('#day option');
        console.log('length is', list.length);
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            console.log(element.getText());
           
        }
    })
    it("get all the values from dropdown function", function () {
        browser.url("https://www.facebook.com/signup");
        let list = $$('#month option');
        console.log('length is', list.length);
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            console.log(i, element.getText());
            if (element.getText() === 'Mar') {
                element.click();
                break;
            }
        }
        browser.pause(5000);
    })

})