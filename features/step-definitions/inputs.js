import { When, Then } from "@cucumber/cucumber";
import { expect } from "@wdio/globals";
import inputsPage from "../pageobjects/inputs.page.js";

// Given step for navigating to the Inputs page
Given(/^I am on the inputs page$/, async function () {
  await browser.url('/inputs'); // Adjust the URL to the actual page path
});

// When step for entering a number into the input field
When(/^I enter "(.*)"$/, async function (num) {
  await InputsPage.setInputValue(num);
});

// Then step for verifying the value of the input field
Then(/^The input value should be the number I entered$/, async function () {
  const inputValue = await InputsPage.getInputValue();
  expect(inputValue).to.equal(this.currentScenarioExample.num); // Adjust as needed for example value
});