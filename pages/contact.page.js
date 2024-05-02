import { expect } from "@playwright/test";
import ContactLocator from "../locators/contact.locator";

const contactLocator = new ContactLocator();


class ContactPage {
    constructor(page) {
        this.page = page;
    }

    async goToContactList() {
        await this.page.goto('https://thinking-tester-contact-list.herokuapp.com/contactList');
    }

    async populateNewContactData(firstName, lastName, birthdate, email, phone, street1, city, stateProvince, postalCode, country) {
        await this.goToContactList();
        await this.page.click(contactLocator.AddContact);
        await this.page.fill(contactLocator.FirstName, firstName);
        await this.page.fill(contactLocator.LastName, lastName);
        await this.page.fill(contactLocator.BirthDate, birthdate);
        await this.page.fill(contactLocator.Email, email);
        await this.page.fill(contactLocator.Phone, phone);
        await this.page.fill(contactLocator.StreetOne, street1);
        await this.page.fill(contactLocator.City, city);
        await this.page.fill(contactLocator.StateProvince, stateProvince);
        await this.page.fill(contactLocator.PostalCode, postalCode);
        await this.page.fill(contactLocator.Country, country);
    }

    async submitForm() {
        await this.page.click(contactLocator.SubmitBtn);
    }

    async cancelForm() {
        await this.page.click(contactLocator.CancelBtn);
    }

    async verifyContactPageIsOpen() {
        await expect(this.page).toHaveURL('/contactList');
    }
}


module.exports = ContactPage;