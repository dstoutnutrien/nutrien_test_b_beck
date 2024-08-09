class DropdownPage {
  get elements() {
    return {
     // header: () => $("h3"),
      dropdown: () => $("#dropdown"),
      selectedOption: () => $('#dropdown option:checked'),
    };
  }
// Method to get the text of the selected option
  async getSelectedOptionText() {
    return await (await this.elements.selectedOption()).getText();
  }

  async select(option) {
    const dropdown = await this.elements.dropdown();
    await dropdown.selectByVisibleText(option);
  }

  async selectedOptionText() {
    const selectedOption = await this.elements.selectedOption();
    return await selectedOption.getText();
  }
}

export default new DropdownPage();
