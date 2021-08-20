//tests go here
describe("User Onboarding App", () => {
  beforeEach(() => {
    //each test needs a 'fresh state'
    cy.visit("http://localhost:3000");
  });

  //helpers to centralize the CSS selectors and clean up the tests a bit
  const nameInput = () => cy.get("input[name=name]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const termsInput = () => cy.get("input[name=terms]");
  const submitBtn = () => cy.get("button[id=submitBtn]");

  it("sanity check to make sure tests work", () => {
    //'it' is a test
    //'expect' is an assertion
    //There can be several assertions per test, but they all need to relate
    //to the one thing we're testing
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
    expect({}).not.to.equal({});
    expect({}).to.eql({});
  });

  it("the proper elements are showing", () => {
    nameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    submitBtn().should("exist");
  });
  describe("Filling out the name/password/email fields + more", () => {
    //using an option describe block
    it("can navigate to the site", () => {
      cy.url().should("include", "localhost");
    });
    it("submit button starts out disabled", () => {
      submitBtn().should("be.disabled");
    });

    //input checks
    it("can type in the inputs", () => {
      nameInput()
        .should("have.value", "")
        .type("Kristian Fulkerson")
        .should("have.value", "Kristian Fulkerson");

      passwordInput()
        .should("have.value", "")
        .type("Ssimon2020!")
        .should("have.value", "Ssimon2020!");

      emailInput()
        .should("have.value", "")
        .type("thisistheguy451@gmail.com")
        .should("have.value", "thisistheguy451@gmail.com");
    });

    it("the submit button enables when all the inputs are filled out", () => {
      nameInput().type("Kristian Fulkerson");
      passwordInput().type("Ssimon2020!");
      emailInput().type("thisistheguy451@gmail.com");
      submitBtn().should("not.be.disabled");
    });

    it("check to see if a user can check the terms of service box", () => {
      termsInput().check();
    });
  });

  describe("Adding a new user", () => {
    it("can submit a new user", () => {
      nameInput().type("Kristian Fulkerson");
      passwordInput().type("Ssimon2020!");
      emailInput().type("thisistheguy451@gmail.com");
      termsInput().check();
      submitBtn().click();
    });
  });
});
