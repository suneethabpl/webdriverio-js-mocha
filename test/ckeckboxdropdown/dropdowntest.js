describe("drop down handling", function () {
    it.skip("select drop down value by text", function () {
        browser.url("https://www.facebook.com/signup");
        $('#day').selectByVisibleText('26');
        $('#month').selectByVisibleText('Jan');
        $('#year').selectByVisibleText('2010');
        browser.pause(10000);
    })

    it.skip("select drop down value by index", function () {
        browser.url("https://www.facebook.com/signup");
        $('#day').selectByIndex(28);
        $('#month').selectByIndex(8);
        $('#year').selectByIndex(13);
        browser.pause(10000);
    })

    it.skip("select drop down value by index", function () {
        browser.url("https://www.facebook.com/signup");
        $('#day').selectByAttribute('value', '25');
        $('#month').selectByAttribute('value', "7");
        $('#year').selectByAttribute('value', '2012');
        browser.pause(10000);
    })
    it.skip("get all the values from dropdown function", function () {
        browser.url("https://www.facebook.com/signup");
        let list = $$('#day option');
        console.log('length is', list.length);
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            console.log(element.getText());
            //means we iterate entire list, get the list of I one by one and from this 
            //this particular element we something get the text and then print it on the 
            //console so let's see it's printing fo the day or not. 
        }
    })
    it("get all the values from dropdown function", function () {
        browser.url("https://www.facebook.com/signup");
        let list = $$('#month option');
        console.log('length is', list.length);
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            console.log(i, element.getText());
            //means we iterate entire list, get the list of I one by one and from this 
            //this particular element we something get the text and then print it on the 
            //console so let's see it's printing fo the day or not. 
            if (element.getText() === 'Mar') {
                element.click();
                break;
                //my teaget is selct the march and break the loop. 
            }
        }
        browser.pause(5000);
        //interview question===how can i select without using selectByindexed(),
        //selectByAttribute(),selectByVisitedText()? we get on the list options from the particular list and then 
        //start a for loop and then simple use it. this kind of logic will work 
        //where the select tag is not avaliable. 
        //electByindexed(),
        //selectByAttribute(),selectByVisitedText(),selectByindexed() are select by index,attribute and 
        //visible text will work only when the dropdown HTML tag is selected then only works. 
        //<select aria-label="Day" name="birthday_day" id="day" title="Day" class="_9407 _5dba _9hk6 _8esg">
        //<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>
        //<option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option>
        //"
        //option value="29">29</option><option value="30">30</option><option value="31">31</option></select>

        //but what if there is a dropdown which does not have any select tag then we have to approach above logic.
    })

})