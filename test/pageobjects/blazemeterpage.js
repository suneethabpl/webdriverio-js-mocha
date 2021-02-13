class BlazePage {
    get parent() {
        return $('ul.list-nav-links');
    }
    get childElements() {
        return this.parent.$$('li');
    }
    get getTextForLi() {
        return this.childElements.filter(element => {
            console.log(element.getText());
        });
    }

    // get usecaseselements() {
    //     return $$('div#main_b_footer_second_block>ul>li')
    // }
    // get usecaseelementtext() {
    //     return this.usecaseselements.filter(element => {
    //         console.log(element.getText());
    //     });
    // }

    specifyChildElement(index) {
        return this.parent.$(`li:nth-child(${index})`)
    }
    getspecificChildElementText(index) {
        console.log(this.specifyChildElement(index).getText());
    }
    get mainheader() {
        return $('div.v4-is-here-block')
    }
    get jmeterLink() {
        return $("//a[text()=JMeter]")
    }
    get productLink() {
        return $('ul.list-nav-links li:nth-child(1) a')
    }
    clcikOnProductLink() {
        if (this.productLink.isDisplayed === true) {
            this.productLink.click();
        }
    }
}

module.exports = new BlazePage();