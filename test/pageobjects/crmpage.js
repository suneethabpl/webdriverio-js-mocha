class crmPage {
    get forgotpwdLink() {
        return $('=Forgot Password?')
    }
    moveToElement(element) {
        element.waitForDisplayed();
        element.moveTo();
    }
}
module.exports = new crmPage();