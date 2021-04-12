beforeEach(() => {
  browser.url("/Accordion/index.html");
});

describe("Verify the that correct text appears on the according page", () => {
  it("Verify loading complete text is visible after a set duration of time", () => {
    browser.waitUntil(
      () => $("#hidden-text").getText() === "LOADING COMPLETE.",
      {
        timeout: 20000,
        timeoutMsg: "expected text to be different after 5s",
      }
    );
  });
});
