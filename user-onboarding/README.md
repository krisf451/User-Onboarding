# Module Project: Advanced Form Management - User Onboarding

## Project Description

We've seen many different styles of form management by now -- simple to complex. Today we are going to unleash your inner form-wizard! 🧙

## Instructions

### Task 1: Set Up The Project

- [ ] Start off by installing a blank React app by running `npx create-react-app <app-name> --use-npm`.
- [ ] Using `npm`, add the following as dependencies inside your React app:
  - `yup`
  - `axios`
- [ ] Create a component file called `Form.js`, import it into your `App.js` file, and place the component in your JSX there.

### Task 2: MVP

#### Create Your Advanced Form

We want to create a form to onboard a new user to our system. We need _at least_ the following pieces of information about our new user:

- [ ] Name
- [ ] Email
- [ ] Password
- [ ] Terms of Service (checkbox)
- [ ] A Submit button to send our form data to the server.

#### Implement Form Validation and Error Messaging

Form validation is one of the facets of an application that makes it feel polished and controlled from a user perspective. With that in mind, implement the following:

- [ ] Using Yup, set up _at least_ two different validations along with custom error messages that will display on screen when validation fails.

#### Make a POST Request

Being able to `POST` data is a key skill of any developer, no matter your skill level.

- [ ] Craft a `POST` request using `axios` that sends your form data to the following endpoint: _`https://reqres.in/api/users`_
- [ ] Verify using a `console.log()` that you are receiving a successful response back

(Note: For those that are curious, we're using [reqres.in](https://reqres.in/) for this assignment's API. It's a free API that allows us to simulate a `POST` request for any data that we send it. Pretty awesome!)

#### Display Returned Data to Screen

When you get your data back, you will want to do something with it, right? Let's display a list of users in our app.

- [ ] Set up a state property called `users` that is initialized with an empty array
- [ ] Every time you make a `POST` request, and get that new user data back, update your `users` state with the new user added to the array
- [ ] Render `users` in your app. You can use the html pre tag and JSON.stringify() method to display your post request.

### Task 3: Stretch Goals

The following are stretch goals that you should attempt _after_ you meet MVP for your project:

- [ ] Add basic styling to your form in your app. Make it look pretty with any styling method you choose.
- [ ] Implement a dropdown menu in your form. Add a `role` value to your state and add a dropdown with different roles for your users.
- [ ] Create 3 new inputs inside your form of your choice along with corresponding validation and error messaging
- [ ] Add to your existing handling so that, if a user inputs their email as `waffle@syrup.com`, they receive an error message in their form that says _"That email is already taken."_

## Submission Format

- [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's Repo). **Please don't merge your own pull request**

DAY 2:

# Module Challenge: Cypress Testing

The module challenge is the afternoon project or assignment that students work through independently. This expands on the guided project completed earlier with the instructor.

## Single Page Applications

## Cypress.io

## Objectives

- explain what end-to-end testing is and its importance
- use the Cypress GUI to write tests and interact with Elements
- use Cypress to test controlled input
- run all tests in without any UI

## Introduction

In this challenge you will write tests with Cypress to debug your forms app from the last objective.

## Instructions

### Task 1: Set up Project

This project is a continuation of the work you have done previously.

- [ ] CD into your old project
- [ ] Continue to make changes and push to the same branch
- [ ] Install Cypress with npm.
      `npm install cypress --save-dev`
- [ ] run `npx cypress open`, After a moment, the Cypress Test Runner will launch.
- [ ] Locate the integration folder at cypress/integration in your code editor
- [ ] Create a form_test.js file.
- [ ] Watch the Cypress Test Runner update the list of specs.
- [ ] Launch Cypress in interactive mode.

_Note:_
You will see an error that says "No tests found in your file:" with your particular file path. This is because we have not written any tests yet. Now you will start writing tests.

### Task 2a: Write and Run Tests (MVP)

In order to complete this challenge you will need to write and run the following tests. They do _not_ need to pass, so long as the reasons they are failing is legitimate.

Set up tests that will...

- [ ] Get the `Name` input and type a name in it.
- [ ] Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
- [ ] Get the `Email` input and type an email address in it
- [ ] Get the `password` input and type a password in it
- [ ] Set up a test that will check to see if a user can check the terms of service box
- [ ] Check to see if a user can submit the form data
- [ ] Check for form validation if an input is left empty

### Task 3: Stretch Goals

If you have time, write and run different tests based on common issues you have encountered working on this code for the past few days.

## FAQs

**What if not all of my tests pass?**

_Depending on the quality of your code from previous lessons, your tests might not pass. That is quite alright! The purpose of this project is to design tests that point out errors. As such, you just need to be sure that the tests are failing because of issues with your web page code, not issues with your test code._

---

## Resources

📚 [Cypress Documentation](https://www.cypress.io/how-it-works/)

🤔 [Blog: Setting up Tests with Cypress](https://medium.com/better-practices/end-to-end-testing-with-cypress-bfcd59633f1a)

## Submission Format

- [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's Repo). **Please don't merge your own pull request**
