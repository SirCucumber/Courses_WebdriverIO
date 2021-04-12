beforeEach(() => {
  browser.url("/Hidden-Elements/index.html");
});

describe("Test whether hidden elements exist", () => {
  it("Button display is set to non display therefore should return false", () => {
    let isVisible = $("#not-displayed").isDisplayed();
    console.log(isVisible);
  });

  it("Button display is set to visibility hidden therefore should return false", () => {
    let isVisible = $("#visibility-hidden").isDisplayed();
    console.log(isVisible);
  });

  it("Button display is set to zero opacity therefore should return false", () => {
    let isVisible = $("#zero-opacity").isDisplayed();
    console.log(isVisible);
  });

  it("Header text is visible therefore should return true", () => {
    let isVisible = $("h1").isDisplayed();
    console.log(isVisible);
  });
});
