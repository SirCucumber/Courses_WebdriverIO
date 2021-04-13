class ContactUs_Page {
  get firstName() {
    return $("[name = 'first_name']");
  }
  get lastName() {
    return $("[name = 'last_name']");
  }
  get comments() {
    return $("textarea");
  }
  get emailAddress() {
    return $("[name = 'email']");
  }
  get submitButton() {
    return $("[type = 'submit']");
  }

  setFirstName(firstName) {
    return this.firstName.setValue(firstName);
  }

  setLastName(lastName) {
    return this.lastName.setValue(lastName);
  }

  setEmailAddress(emailAddress) {
    return this.emailAddress.setValue(emailAddress);
  }

  setComments(comments) {
    return this.comments.setValue(comments);
  }

  clickSubmitButton() {
    return this.submitButton.click();
  }

  submitAllInformationViaContactUsForm(
    firstName,
    lastName,
    emailAddress,
    comments
  ) {
    if (firstName) {
      this.firstName.setValue(firstName);
    }
    if (lastName) {
      this.lastName.setValue(lastName);
    }
    if (emailAddress) {
      this.emailAddress.setValue(emailAddress);
    }
    if (comments) {
      this.comments.setValue(comments);
    }
    this.submitButton.click();
    this.confirmSuccessfulSubmission();
  }

  confirmSuccessfulSubmission() {
    let successfulSubmissionHeader = "#contact_reply h1";
    let validateSubmissionHeader = browser.waitUntil(() => {
      return (
        $(successfulSubmissionHeader).getText() ==
        "Thank You for your Message!" /* ,
      {
        timeout: 3000,
        timeoutMsg: "error1",
      } */
      );
    });
    console.log(validateSubmissionHeader);
    expect(
      validateSubmissionHeader,
      "Successful Submission Message does not Exist!"
    ).to.be.true;
  }

  confirmUnsuccessfulSubmission() {
    let unsuccessfulSubmissionHeader = "body";
    let validateSubmissionHeader = browser.waitUntil(() => {
      return (
        $(unsuccessfulSubmissionHeader).getText() ==
        "Error: all fields are required" /* ,
      {
        timeout: 3000,
        timeoutMsg: "error2",
      } */
      );
    });
    console.log(validateSubmissionHeader);
    expect($(unsuccessfulSubmissionHeader).getText()).to.include(
      "Error: all fields are required"
    );
  }
}

module.exports = new ContactUs_Page();
