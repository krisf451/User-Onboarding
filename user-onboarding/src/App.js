import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import User from "./components/User";

import axios from "axios";
import * as yup from "yup";
import schema from "./validation/formSchema";

//create initial states
const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false
};
const initialFormErrors = {
  name: "",
  email: "",
  password: ""
};
const initialUsers = [];
const initialDisabled = true;

function App() {
  //set up state
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  //helper functions

  //validate function
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };
  //change function for formValues
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  // POST FUNCTION
  const postNewUser = newUser => {
    axios
      .post(`https://reqres.in/api/users`, newUser)
      .then(res => {
        console.log(res.data);
        // setUsers([res.data.data, ...users])
        setUsers([newUser, ...users]);
      })
      .catch(err => console.error(err));
    setFormValues(initialFormValues);
  };

  //submit function
  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms.toString()
    };
    postNewUser(newUser);
  };

  //side effects
  //adjust disabled everytime the formValues changes
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="App">
      <h1>USER ONBOARDING APP</h1>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {users.map((user, index) => {
        return <User key={index} details={user} />;
      })}
    </div>
  );
}

export default App;
