beforeEach(() => {
  browser.url("https://www.w3schools.com/html/html5_video.asp");

  browser.addCommand("isVideoPaused", () => {
    let isPaused = browser.execute(() => {
      console.log("Outputted inside the console window");

      let video = document.querySelector("#video1");
      return video.paused;
    });
    return isPaused;
  });
});

describe("Video test", () => {
  it("Validate that the video is paused upon accesing the page", () => {
    browser.setTimeout({ pageLoad: 20000 });
    browser.pause(6000);
    let isPaused = browser.isVideoPaused();
    expect(isPaused).to.be.true;
    browser.pause(6000);
  });

  it("Alter the width of the video", () => {
    let videoWidth = browser.execute(() => {
      let video = document.querySelector("#video1");
      return (video.style.width = "300px");
    });
    browser.pause(6000);
  });
});
