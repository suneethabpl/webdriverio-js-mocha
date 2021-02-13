class InternetHerokuapp{
    getLinkElement(index){
        return $(`ul li:nth-child(${index}) a`);
    }
  
    clickOnLink(index){
        this.getLinkElement(index).waitForDisplayed();
        this.getLinkElement(index).click();
    }

    get h3Header(){
        return $('h3');
    }

    getCheckBoxElement(index){
        return $(`form#checkboxes input:nth-child(${index})`);
    }

    clickOnCheckBox(index){
        this.getCheckBoxElement(index).waitForDisplayed();
        this.getCheckBoxElement(index).click();
    }
}
    module.exports = new InternetHerokuapp();

