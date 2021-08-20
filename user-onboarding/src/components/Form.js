import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = e => {
    e.preventDefault();
    submit();
  };

  const onChange = e => {
    const { name, value, checked, type } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };
  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Add a new user</h2>
        {/*Disable the button */}
        <button id="submitBtn" disabled={disabled}>
          SUBMIT
        </button>
        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
        </div>
      </div>
      <div className="form-group inputs">
        <h4>User Information:</h4>
        <label>
          Name:
          <input
            type="text"
            value={values.name}
            onChange={onChange}
            name="name"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={values.password}
            onChange={onChange}
            name="password"
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={values.email}
            onChange={onChange}
            name="email"
          />
        </label>
      </div>
      <div className="form-group checkboxes">
        <label>
          Agree to Terms of Service:
          <input
            type="checkbox"
            name="terms"
            value={values.terms}
            onChange={onChange}
          />
        </label>
      </div>
    </form>
  );
}
