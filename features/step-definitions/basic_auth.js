import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import BasicAuthPage from "../pageobjects/basic_auth.page.js";

When(
  /^I use basic auth to login with (\w+) and (.+)$/,
  async (username, password) => {
    await BasicAuthPage.login(username, password);
  }
);

Then(/^I should see a paragraph saying (.+)$/, async (message) => {
  const messageElement = BasicAuthPage.message;

  // Check if the element exists
  const isExisting = await messageElement.isExisting();

  if (isExisting) {
    // Wait for the element to be visible
    await messageElement.waitForDisplayed({ timeout: 5000 }); // Adjust the timeout as needed

    // Check if the element has the correct text
    await expect(messageElement).toHaveTextContaining(message);
  } else {
    // Print message to the console if the element is not found
    console.log('Creds are failing');
    throw new Error('Expected message element was not found'); // Optional: Throw an error to fail the test
  }
});

