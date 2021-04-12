describe("Test the webdriveruniversity homepage", () => {
  it("Output the height of the homepage carousel", () => {
    browser.url("./");
    browser.pause(2000);
    let divCarouselHeight = $("#udemy-promo-thumbnail").getCSSProperty(
      "height"
    );
    console.log(divCarouselHeight);
  });
});
