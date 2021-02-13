class Spicejet{
    get loginSignupLink() {return $('#ctl00_HyperLinkLogin')};
    get spiceClubMembers() {return $('=SpiceClub Members')};
    get memberLogin() {return $('=Member Login')};
    moveToElement(element){
        element.waitForDisplayed();
        element.moveTo();
    }
    clcikElement(element){
        element.waitForDisplayed();
        element.click();
    }
    get search(){return $('#target')};
    get resultlabel(){return $('#result')};

    getresultlabelText(){
        this.resultlabel.waitForDisplayed();
        return this.resultlabel.getText();
    }
    enterSearch(text){
        this.search.waitForDisplayed();
        this.search.setValue(text);
    }
}
module.exports = new Spicejet;