beforeEach(() => {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
});

describe("Test Selected Dropdown Menus, Checkboxes & Radio Buttons", () => {
  it("Dropdown item Java is selected therefore should return true", () => {
    let isSelected = $("option[value='java']").isSelected();
    console.log(isSelected);
  });

  it("Dropdown item maven is not selected therefore should return false", () => {
    let isSelected = $("option[value='maven']").isSelected();
    console.log(isSelected);
  });

  it("Option2 is not selected therefore should return false", () => {
    let isSelected = $("input[value='option-2']").isSelected();
    console.log(isSelected);
  });

  it("Option3 is selected therefore should return true", () => {
    let isSelected = $("input[value='option-3']").isSelected();
    console.log(isSelected);
  });

  it("Radion button pumbkin is selected therefore should be true", () => {
    let isSelected = $("input[value='pumpkin']").isSelected();
    console.log(isSelected);
  });
});
