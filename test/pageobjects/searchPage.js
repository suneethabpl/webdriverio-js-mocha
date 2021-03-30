import Page from './basicpage';

class searchPage extends Page {
    //searchPage can access the all method inside of Page class because of inheritance.
    //const searchInput = $('#gh-ac');
    //now need to find element for button , that is id=gh-btn
    //const searchBtn = $('#gh-btn');

    get searchInput() {
        return $('#gh-ac');
    }
    get searchBtn() {
      return $('#gh-btn')
    }
    // const category = $('#gh-cat option:nth-child(1)');

    get category(){
        return $('#gh-cat option:nth-child(1)');
    }
    open() {
        super.open('https://www.ebay.com/');
        //super is using the parent class functionality or the methods of parent class.
    }
    // close() {
    //     //close the browser
    // }
}
export default new searchPage();//means here,we are exporting instance of the class by using 
//the new keyword. 