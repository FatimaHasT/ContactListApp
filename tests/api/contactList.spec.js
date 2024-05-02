import {expect, test} from "@playwright/test";
import DataGenerator from "../../data/dataGenerator";
import ApiClient from "../../integration/apiClient";

test.describe.serial('Test Contact services', () => {
    const dataGenerator = new DataGenerator();
    const apiClient = new ApiClient();
    const service = 'https://thinking-tester-contact-list.herokuapp.com';
    let token;
    let headers;
    let contactId;

    test.beforeAll(async ({request}) => {
        const loginDataBody = { email: "fatima.atlant@gmail.com", password: "Atlant123" };
        const response = await apiClient.postRequest(request, service + "/users/login", loginDataBody);
        const jsonData = JSON.parse(await response.text());
        token = jsonData.token;
        headers = {'Authorization': `Bearer ${token}`, 'Cookie': `token=${token}`, 'Content-Type': 'application/json'};
    });

    test('Create New Contact Data', {tag: '@smoke'}, async ({request}) => {
        const requestBody = dataGenerator.generateNewUserData();
        const response = await apiClient.postRequest(request, service + "/contacts", requestBody, headers);

        if (response.status() !== 201) {
            console.log("Request wasn't successful. Status code was: " + response.status());
        }
        const jsonData = JSON.parse(await response.text());
        expect(jsonData._id).toBeTruthy();
        contactId = jsonData._id;
        expect(jsonData.firstName).toBe(requestBody.firstName);
    });

    test('Update Contact Data', {tag: '@smoke'}, async ({request}) => {
        //Update data for previously created contactId
        console.log("Contact ID that will be updated: " + contactId);
        const requestBody = dataGenerator.generateNewUserData();
        const response = await apiClient.patchRequest(request, service + "/contacts/" + contactId, requestBody, headers);

        if (response.status() !== 200) {
            console.log("Request wasn't successful. Status code was: " + response.status());
        }
        const jsonData = JSON.parse(await response.text());
        expect(jsonData._id).toBe(contactId);
        expect(jsonData.firstName).toBe(requestBody.firstName);
    });

    test('Delete Contact Data', {tag: '@smoke'}, async ({request}) => {
        //Delete previously created contactId
        console.log("Contact ID that will be deleted: " + contactId);
        const response = await apiClient.deleteRequest(request, service + "/contacts/" + contactId, headers);

        if (response.status() !== 200) {
            console.log("Request wasn't successful. Status code was: " + response.status());
        }
    });

    test('Deleted contactId cannot be fetched', {tag: '@smoke'}, async ({request}) => {
        //Delete previously created contactId
        console.log("Contact ID that will be searched: " + contactId);
        const response = await apiClient.fetchRequest(request, service + "/contacts/" + contactId, headers);

        if (response.status() !== 404) {
            console.log("Request wasn't successful. Status code was: " + response.status());
        }
    });
});