import LoginLocator from "../locators/login.locator";


const loginLocator = new LoginLocator();


class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async goToUrl() {
        await this.page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    }


    async populateLoginForm(email, password) {
        await this.goToUrl();
        await this.page.fill(loginLocator.Email, email);
        await this.page.fill(loginLocator.Password, password);
        await this.page.click(loginLocator.SubmitBtn);
    }


    async verifyLoginErrorMessage() {
        await this.page.isVisible(loginLocator.ErrorMsg);
    }
}


module.exports = LoginPage;