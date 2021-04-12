beforeEach(() => {
  browser.url("/Hidden-Elements/index.html");
});

describe("Test whether specific elements are visible within viewport", () => {
  it("should resize the current viewport", () => {
    browser.setWindowSize(1200, 800);
    browser.pause(2000);

    let windowSize = browser.getWindowRect();
    console.log(windowSize);
  });

  it("should detect if an element is visible", () => {
    let isVisibleWithinViewport = $("#not-displayed").isDisplayedInViewport();
    console.log(isVisibleWithinViewport);
    isVisibleWithinViewport = $("#visibility-hidden").isDisplayedInViewport();
    console.log(isVisibleWithinViewport);
    isVisibleWithinViewport = $("#zero-opacity").isDisplayedInViewport();
    console.log(isVisibleWithinViewport);
    isVisibleWithinViewport = $("h1").isDisplayedInViewport();
    console.log(isVisibleWithinViewport);

    let wh = browser.getWindowSize();
    console.log(wh);
  });
});
