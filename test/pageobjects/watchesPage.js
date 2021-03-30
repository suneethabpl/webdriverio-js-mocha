import Page from './basicpage';
class watchesPage extends Page {
    // const promoBanner = $('section.b-promobanner.clearfix._FCF2BD5C1B05.d1img70');
    get promoBanner() {
        // return $('section.b-promobanner.clearfix._FCF2BD5C1B05.d1img70');//find element
        // return $$('section.b-promobanner.clearfix._FCF2BD5C1B05.d1img70');//find elements--this return array
        //so we have to capture that array. in this scenario, i have only single element. so, just add 0th element like this.
        // return $$('section.b-promobanner.clearfix._FCF2BD5C1B05.d1img70')[0];//here 0 is first index.//now o/p is it run the test and picked up first element and works fine.
        //if i changed [1] instead of [0] then test is failed because we are tring to get 2 elements 
        //but there is only one element. 
        return $$('section.b-promobanner.clearfix._FCF2BD5C1B05.d1img70')[1];
    }
    // const infoTitle = $('.b-promobanner__info-title');
    get infoTitle() {
        return $('.b-promobanner__info-title');
    }

    //    const shopButton = $('.b-promobanner__info-btn');
    get shopButton() {
        return $('.b-promobanner__info-btn');
    }

    //create a selector for getting all list items along with text
    get watchesCateoryList() {
        return $$('section[id="s0-16-13-0-1[0]-0-0"] ul li ');//to display all array elements whch is list items

    }
    get fashionLink() {
        return $$('.hl-cat-nav__js-tab a[href*="Fashion"]')[0];//this gives first element in fashionlink

    }
    
    get watchesLink() {
        return $('.hl-cat-nav__sub-cats a[href*="Watches-Parts"]')
    }

    open() {
        super.open(
            // 'https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535'
            'https://www.ebay.com/'
        )
    }

    //create a method to get the text for all list items
    getWatchesCategoryListText() {
        //here we call the get/getter function. we are inside of the class so we use this keyword to call getter function
        // which is watchesCateoryList()
        //and then we need to get text of all elements. 
        //we know getText for only get text for individual/single element.
        //here we need to return 6 elements.
        //we need to use loop function to get those 6 elements. 
        //so i use map method which works in javascript.
        //if you notice map takes value, so, i give value is element and tehn print those text of 6 elements like
        //map((element) => console.log(element.getText()))
        //and teh we return the entire function.
        //note--here we are calling getter function and we are looping through it and through each individual element and get teh text out of it.
        //note--and tehn we have to call the function. here we call it in before hook which is in the watchestest.js. like      watchesPage.getWatchesCategoryListText();
        // return this.watchesCateoryList.map((element) => console.log(element.getText()));
        //at this moment we have to acces our text of list items from the array.
        //now,create new empty array like this      const wathesList =[];
        const wathesList = [];
        this.watchesCateoryList.map((element) => wathesList.push(element.getText()));
        //and then we push those text into this watchesList array. instead of print text via console.log
        //for that 
        // wathesList.push(element.getText()));
        //and then return eatchesList
        return wathesList;
        //note--we created empty array and then all text thatw e were getting we 
        //are pushing that one by one to our watches list array. so basically 
        //it will have a collection of all these items here and then go to watchestest.js to print it.
    }

}
export default new watchesPage();//means here,we are exporting instance of the class by using 
//the new keyword.
//we type ebay.com in gogole to go to site and go to fashions link and tehn clcik on teh watches link
//we want to display  all the list items along with text in that page. 
//for that go to inspect, select our list items (<li>)to see the code in inspect.
//so, try to find out unique element. we can see section has ID. 
//so, i paste like this section[id="s0-16-13-0-1[0]-0-0"] in input field whch is in the inspect that is diaplayed by command+f.
//we can see it has only one node means unique at the end of the inputfield/textbox in inspect.
//and then we try to get li's so our unique element like section[id="s0-16-13-0-1[0]-0-0"] ul li then we can see 6 nodes/listitems
//
