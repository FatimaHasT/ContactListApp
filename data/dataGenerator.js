import {faker} from '@faker-js/faker';

export class DataGenerator {
    generateNewUserData() {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            birthdate: "1992-02-02",
            email: faker.internet.email({provider: 'gmail.com'}),
            phone: faker.phone.number,
            street1: faker.location.streetAddress(),
            city: faker.location.city(),
            stateProvince: faker.location.countryCode(),
            postalCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
}

module.exports = DataGenerator;