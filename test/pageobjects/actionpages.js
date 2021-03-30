class Spicejet{
    //create a webelement with get
    get loginSignupLink() {return $('#ctl00_HyperLinkLogin')};
    get spiceClubMembers() {return $('=SpiceClub Members')};
    //=SpiceClub Members behaves like link test.
    get memberLogin() {return $('=Member Login')};
    //Member Login and SpiceClub Members do not have any class and id. 
    moveToElement(element){
        element.waitForDisplayed();
        element.moveTo();
    }
    //normally moveTo method have xoffset means top-leftcorner and yoffsetmeand top-right corner  arguments. 
    //here we ont want to give any arquments, so it goes to middle of teh element. 
    //just go to middle of element and then move there.
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