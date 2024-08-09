class InputsPage {
  get elements() {
    return {
      inputField: () => $('.example input[type="number"]')
    };
  }

  // Method to set a value to the input field
  async setInputValue(value) {
    const inputField = await this.elements.inputField();
    await inputField.setValue(value);
  }

  // Method to get the value of the input field
  async getInputValue() {
    return await (await this.elements.inputField()).getValue();
  }
}

export default new InputsPage();
