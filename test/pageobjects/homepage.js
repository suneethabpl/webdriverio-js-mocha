class HomePage{
    get pageHeader(){return $('h1');}
    get subHeading(){return $('div.banner-text-content > p.sub-text')};
    get supportLink(){return $("//span[text()='Support']")};
    get customersLink(){return $("//a[text()='Customers']")};
}
module.exports = new HomePage();
