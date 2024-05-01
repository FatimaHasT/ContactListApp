import ContactLocator from "../locators/contact.locator";


const contactLocator = new ContactLocator();


class ContactPage {
    constructor(page) {
        this.page = page;
    }
    
    async verifyContactPageIsOpen() {
        await this.page.waitForSelector(contactLocator.LogoutBtn, {state: 'visible'});
    }

    async populateNewContactData() {
        await this.page.fill(contactLocator.FirstName, "Fatima");
    }
}


module.exports = ContactPage;