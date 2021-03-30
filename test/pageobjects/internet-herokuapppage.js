class InternetHerokuapp{

    //create generic/normall/non getter method because need to pass index.
    getLinkElement(index){
        return $(`ul li:nth-child(${index}) a`);
    }
    //${index}) for what index we want to select.

    clickOnLink(index){
        this.getLinkElement(index).waitForDisplayed();
        //if the element is displayed or not on the page 
        //wait for until it displayed and then 
        this.getLinkElement(index).click();
    }

    get h3Header(){
        return $('h3');
    }

    getCheckBoxElement(index){
        return $(`form#checkboxes input:nth-child(${index})`);
        //checkboxes isin form and which input we want and pass the index.
    }

    clickOnCheckBox(index){
        //call above method
        this.getCheckBoxElement(index).waitForDisplayed();
        this.getCheckBoxElement(index).click();
    }
}
    module.exports = new InternetHerokuapp();

