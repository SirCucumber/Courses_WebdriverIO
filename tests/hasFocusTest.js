describe("Test Checkboxes Buttons Page", () => {
  it("Should be able to focus on checkbox button elements", () => {
    browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
    browser.setWindowSize(1200, 800);
    $("#checkboxes label:nth-of-type(1) [type]").click();
    let checkboxButtonOne = $(
      "#checkboxes label:nth-of-type(1) [type]"
    ).isFocused();
    console.log("Check box one has a value of: " + checkboxButtonOne);
    expect(checkboxButtonOne, "The checkbox (One) should have focus!").to.be
      .true;

    let checkboxButtonTwo = $(
      "#checkboxes label:nth-child(5) [type]"
    ).isFocused();
    console.log("Check box two has a value of: " + checkboxButtonTwo);
    expect(checkboxButtonTwo, "The checkbox (Two) should have focus!").to.be
      .false;
  });
});
