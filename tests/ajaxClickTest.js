describe("Test that the button is clickable ince the Ajax loader completes loading", () => {
  it("Attempt to click the button asap", (done) => {
    browser.url("/Ajax-Loader/index.html");
    $("#button1555").click();
  });

  it("Attempt to click the button after 7 seconds", (done) => {
    browser.url("/Ajax-Loader/index.html");
    browser.setTimeout({ pageLoad: 20000 });
    browser.pause(7000);
    $("#button1").click();
    browser.pause(7000);
  });
});
