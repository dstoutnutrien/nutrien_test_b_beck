import { When, Then, Given } from "@cucumber/cucumber";
import { expect } from "@wdio/globals";
import dropdownPage from "../pageobjects/dropdown.page.js";

const DROPDOWN_PAGE_URL = 'https://the-internet.herokuapp.com/dropdown';

// Step definition for navigating to the Dropdown page
Given(/^I am on the Dropdown page$/, async () => {
  await browser.url(DROPDOWN_PAGE_URL);

});

When(/^I select "(.+)"$/, async function (option) {
  world.hello = "hello";
  console.log(world);
  await dropdownPage.select(option);
});

Then(/^The dropdown value should be "(.+)"$/, async function (option) {
  console.log(world);
  expect(await dropdownPage.selectedOptionText()).toBe(option);
});
