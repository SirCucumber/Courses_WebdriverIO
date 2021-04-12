describe("Verify whether webdriveruniversity links on homepage work correctly", () => {
  it("check that the contact us button opens the contact us page", (done) => {
    browser.setWindowSize(1200, 800);
    browser.url("/");
    let title = browser.getTitle();
    expect(title).to.equal("WebDriverUniversity.com");
    console.log("Title is: " + title);

    $("#contact-us").click();
    browser.switchWindow("WebDriver | Contact Us");
    let title2 = browser.getTitle();
    expect(title2).to.equal("WebDriver | Contact Us");

    let url = browser.getUrl();
    expect(url).to.include("Contact-Us", "URL Mismatch");
    browser.closeWindow();
    browser.switchWindow("/");
  });

  it("check that the login button opens the login portal page", (done) => {
    browser.url("/");

    let title = browser.getTitle();
    title.should.equal("WebDriverUniversity.com");
    console.log("Title is: " + title);

    $("#login-portal").click();
    browser.switchWindow("WebDriver | Login Portal");
    let title2 = browser.getTitle();
    expect(title2).to.equal("WebDriver | Login Portal");

    let url = browser.getUrl();
    expect(url).to.include("Login-Portal", "URL Mismatch");
  });
});
