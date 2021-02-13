import Page from './basicpage';
class watchesPage extends Page {
    get promoBanner() {
        return $$('section.b-promobanner.clearfix._FCF2BD5C1B05.d1img70')[1];
    }
    get infoTitle() {
        return $('.b-promobanner__info-title');
    }

    get shopButton() {
        return $('.b-promobanner__info-btn');
    }

    get watchesCateoryList() {
        return $$('section[id="s0-16-13-0-1[0]-0-0"] ul li ');

    }
    get fashionLink() {
        return $$('.hl-cat-nav__js-tab a[href*="Fashion"]')[0];

    }
    
    get watchesLink() {
        return $('.hl-cat-nav__sub-cats a[href*="Watches-Parts"]')
    }

    open() {
        super.open(
            'https://www.ebay.com/'
        )
    }

    getWatchesCategoryListText() {
        const wathesList = [];
        this.watchesCateoryList.map((element) => wathesList.push(element.getText()));
        return wathesList;
    }

}
export default new watchesPage();
