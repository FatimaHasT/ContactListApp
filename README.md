# ContactListApp

# Automated Testing for Contact List Application

## Introduction

This repository contains automated tests for the Contact List application. These tests are designed to verify the functionality and behavior of key features within the application.

## Test Overview

The following tests have been implemented:

1. **Sign in with valid data** and **Sign in with invalid data** Verifies the functionality of the login feature, ensuring users can successfully authenticate into the application.
2. **Adding new contact** and **Create New Contact Data** Tests the ability to add a new contact to the contact list.
3. **Update Contact Data:** Validates the functionality to update an existing contact's information.
4. **Delete Contact Data:** Tests the ability to delete a contact from the contact list.

## Technologies Used

The tests are written in JavaScript and utilize the Playwright testing framework for browser automation.

## Running the Tests

Once you have cloned the repository and installed the dependencies, you can run the automated tests using the following command:

npx playwright test - for all tests

npx playwright test --grep '@smoke' - for smoke tests

npx playwright test -g 'TEST NAME' - To run a specific test by its name, replacing 'TEST NAME' with the actual name of the test