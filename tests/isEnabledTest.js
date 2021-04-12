beforeEach(() => {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
  browser.setWindowSize(1200, 800);
  browser.pause(2000);
});

describe("Test Enabled Dropdown Menus, Checkboxes & Radio Buttons", () => {
  it("Dropdown item orange is disabled therefore should return false", () => {
    let isEnabled = $("option[value='orange']").isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(false);
  });

  it("Dropdown item grape is disabled therefore should return true", () => {
    let isEnabled = $("option[value='grape']").isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it("Option2 is enabled therefore should return true", () => {
    let isEnabled = $("input[value='option-2']").isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it("Radio button pumpkin is enabled therefore should be true", () => {
    let isEnabled = $("input[value='pumpkin']").isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it("Radio button cabbage is desabled therefore should be false", () => {
    let isEnabled = $("input[value='cabbage']").isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(false);
  });
});
