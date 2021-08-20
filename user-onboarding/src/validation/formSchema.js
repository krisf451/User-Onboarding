//schema for our form
import * as yup from "yup";
// const yup = require("yup");
require("yup-password")(yup); // extend yup

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is a required field")
    .min(8, "Name must be 8 characters long"),
  email: yup
    .string()
    .trim()
    .email("Must be a valid email address")
    .required("Email is a required field"),
  password: yup
    .string()
    .password()
    .required("Please enter a password"),
  terms: yup.boolean()
});

export default formSchema;
