class ContactLocator {
    constructor(page) {
        this.page = page;
        this.LogoutBtn = `#logout`;
        this.AddContact = `#add-contact`;
        this.FirstName = `#firstName`;
        this.LastName = `#lastName`;
        this.BirthDate = `#birthdate`;
        this.Email = `#email`;
        this.Phone = `#phone`;
        this.StreetOne = `#street1`;
        this.StreetTwo = `#street2`;
        this.City = `#city`;
        this.StateProvince = `#stateProvince`;
        this.PostalCode = `#postalCode`;
        this.Country = `#country`;
        this.SubmitBtn = `#submit`;
        this.CancelBtn = `#cancel`;
    }
}


module.exports = ContactLocator;