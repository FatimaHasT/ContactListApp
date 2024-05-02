import {test} from "@playwright/test";
import LoginPage from "../../pages/login.page";
import ContactPage from "../../pages/contact.page";


test.describe.parallel('Go to Contact Page and add new contact',() => {

    test('Adding new contact', async({page})=>{
        let email = "fatima.atlant@gmail.com"
        let password = "Atlant123"
        let firstName = "Fatima"
        let lastName = "Hasanovic"
        let birthdate ="1999-01-01"
        let phone = "01234567"
        let street1 = "dsada"
        let city = "Sarajevo"
        let stateProvince = "Sarajevo"
        let postalCode = "71000"
        let country = "BiH"

        const loginPage = new LoginPage(page);
        await loginPage.populateLoginForm(email, password);
        const contactPage = new ContactPage(page);
        await contactPage.populateNewContactData(firstName, lastName, birthdate, email, phone, street1, city, stateProvince, postalCode, country);
        await contactPage.submitForm();
    });


    test('Verify Cancel button funcionality', async({page})=>{
        let email = "fatima.atlant@gmail.com"
        let password = "Atlant123"
        let firstName = "Fatima"
        let lastName = "Hasanovic"
        let birthdate ="1999-01-01"
        let phone = "01234567"
        let street1 = "dsada"
        let city = "Sarajevo"
        let stateProvince = "Sarajevo"
        let postalCode = "71000"
        let country = "BiH"

        const loginPage = new LoginPage(page);
        await loginPage.populateLoginForm(email, password);
        const contactPage = new ContactPage(page);
        await contactPage.populateNewContactData(firstName, lastName, birthdate, email, phone, street1, city, stateProvince, postalCode, country);
        await contactPage.cancelForm();
    });
});