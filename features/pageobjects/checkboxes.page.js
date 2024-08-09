class CheckboxesPage {
  get elements() {
    return {
      header: () => $("h3"),
      checkbox: (num) => $(`#checkboxes > input:nth-of-type(${num})`),
    };
  }

  async select(num) {
    const checkbox = await this.elements.checkbox(num);
    await checkbox.click();
  }

  async areCheckboxesChecked(nums) {
    const results = [];
    for (const num of nums) {
      const checkbox = await this.elements.checkbox(num);
      const isChecked = await checkbox.isSelected(); // Check if the checkbox is selected
      results.push(isChecked);
    }
    return results; // Returns an array of booleans indicating whether each checkbox is checked
  }
}

export default new CheckboxesPage();
