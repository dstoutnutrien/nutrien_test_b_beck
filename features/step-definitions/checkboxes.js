import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import checkboxesPage from "../pageobjects/checkboxes.page.js";


Given(/^I am on the Checkboxes page$/, async function () {
  await browser.url('https://the-internet.herokuapp.com/checkboxes');
});

When(/^I select checkbox (\d+)$/, async function (num) {
  await checkboxesPage.select(num);
});

Then(/^The checkbox (\d+) should be checked$/, async function (num) {
  const checkbox = await checkboxesPage.elements.checkbox(num);
  await expect(checkbox).toBeSelected(); // Checks if the checkbox is selected (checked)
});

// New step definition for checking multiple checkboxes
Then(/^The following (\d+)checkboxes should be checked:$/, async function (dataTable) {
  // Get the array of checkbox numbers from the data table
  const checkboxNumbers = dataTable.raw().map(row => parseInt(row[0]));

  for (const num of checkboxNumbers) {
    const checkbox = await checkboxesPage.elements.checkbox(num);
    await expect(checkbox).toBeSelected(); // Checks if the checkbox is selected (checked)
  }
});

