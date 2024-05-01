import {test} from "@playwright/test";
import LoginPage from "../../pages/login.page";
import ContactPage from "../../pages/contact.page";


test.describe('Go to Login Page and try to sign in',() => {

    test('Sign in with valid data', async({page})=>{
        let email = "fatima.atlant@gmail.com"
        let password = "Atlant123"

        const loginPage = new LoginPage(page);
        await loginPage.populateLoginForm(email, password);
        const contactPage = new ContactPage(page);
        await contactPage.verifyContactPageIsOpen();
    });

    test('Sign in with invalid data', async({page})=>{
        let email = "fatima.atlant@gmail.com"
        let password = "Wrongpass"

        const loginPage = new LoginPage(page);
        await loginPage.populateLoginForm(email, password);
        await loginPage.verifyLoginErrorMessage();
    });
});