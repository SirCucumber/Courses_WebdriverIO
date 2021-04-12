beforeEach(() => {
  browser.url("/Ajax-Loader/index.html");
});

describe("Validate whether the click me button is visible", () => {
  it("Validate whether the click me button is visible within the DOM", () => {
    browser.setTimeout({ pageLoad: 20000 });
    let clickMeButton = "//p[text()='CLICK ME!']";
    $(clickMeButton).waitForExist({ timeout: 8000, reverse: false });
  });

  it("Validate whether the click me button appears once the Ajax loader fully loads", () => {
    browser.setTimeout({ pageLoad: 20000 });
    let clickMeButton = "//p[text()='CLICK ME!']";
    $(clickMeButton).waitForDisplayed({ timeout: 8000, reverse: false });
  });
});
