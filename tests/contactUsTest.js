const request = require("sync-request");

beforeEach(() => {
  browser.url("/Contact-Us/contactus.html");
});

describe("Test Contact Us form WebdriverUni", () => {
  let res = request(
    "GET",
    "http://jsonplaceholder.typicode.com/posts/1/comments"
  );
  let contactusDetails = JSON.parse(res.getBody().toString("utf8"));

  let firstNameSelector = "[name = 'first_name']";
  let lastNameSelector = "[name = 'last_name']";
  let emailAdressSelector = "[name = 'email']";
  let commentsSelector = "textarea";
  let successfulSubmissionSelector = "#contact_reply h1";
  let unsuccessfulSubmissionSelector = "body";
  let submitButtonSelector = "[type = 'submit']";

  function setFirstName(firstName) {
    return $(firstNameSelector).setValue(firstName);
  }

  function setLastName(lastName) {
    return $(lastNameSelector).setValue(lastName);
  }

  function setEmailAddress(emailAddress) {
    return $(emailAdressSelector).setValue(emailAddress);
  }

  function setComments(comments) {
    return $(commentsSelector).setValue(comments);
  }

  function clickSubmitButton() {
    return $(submitButtonSelector).click();
  }

  function confirmSuccessfulSubmission() {
    let validateSubmissionHeader = browser.waitUntil(() => {
      return (
        $(successfulSubmissionSelector).getText() ==
          "Thank You for your Message!",
        {
          timeout: 5000,
          timeoutMsg: "error1",
        }
      );
    });
    console.log(validateSubmissionHeader);
    expect(
      validateSubmissionHeader,
      "Successful Submission Message does not Exist!"
    ).to.be.true;
  }

  function confirmUnsuccessfulSubmission() {
    let validateSubmissionHeader = browser.waitUntil(() => {
      return (
        $(unsuccessfulSubmissionSelector).getText() ==
          "Error: all fields are required",
        {
          timeout: 6000,
          timeoutMsg: "error2",
        }
      );
    });
    console.log(validateSubmissionHeader);
    expect($(unsuccessfulSubmissionSelector).getText()).to.include(
      "Error: all fields are required"
    );
  }

  contactusDetails.forEach((contactDetail) => {
    it("Should be able to submit a successful sebmission via contact us form as all fields are required", () => {
      setFirstName("Joe");
      setLastName("Blogs");
      setEmailAddress(contactDetail.email);
      setComments(contactDetail.body);
      clickSubmitButton();
      confirmSuccessfulSubmission();
    });
  });

  it("Should not be able to submit a successful sebmission via contact us form as all fields are required", () => {
    setFirstName("Mike");
    setLastName("Woods");
    setEmailAddress("mike_woods@mail.com");
    clickSubmitButton();
    confirmUnsuccessfulSubmission();
  });

  it("Should be able to submit a successful sebmission via contact us form as all fields are required", () => {
    setFirstName("Sarah");
    setEmailAddress("sarah_woods@mail.com");
    clickSubmitButton();
    confirmUnsuccessfulSubmission();
  });

  it("Should be able to submit a successful sebmission via contact us form as all fields are required", () => {
    setLastName("Jomes");
    setEmailAddress("sarah_jomes@mail.com");
    clickSubmitButton();
    confirmUnsuccessfulSubmission();
  });
});
