import React from "react";
import classes from "./ContactForm.css";
import Button from "../UI/Button/Button";
import { Field, reduxForm } from "redux-form";

//Validate form
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.message) {
    errors.message = "Required";
  }
  return errors;
};
//Define fields config
const renderField = ({
  input,
  label,
  type,
  formFiled,
  className,
  rows,
  meta: { touched, error }
}) => (
  <div>
    <div>
      {formFiled === "textarea" ? (
        <textarea
          rows={rows}
          className={className}
          {...input}
          placeholder={label}
          type={type}
        ></textarea>
      ) : (
        <input
          className={className}
          {...input}
          placeholder={label}
          type={type}
        />
      )}

      {touched && (error && <p className={classes.ErrorMsg}>{error}</p>)}
    </div>
  </div>
);

let ContactForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          className={classes.Input}
          name="firstName"
          label="First Name"
          component={renderField}
          type="text"
        />
      </div>
      <div>
        <Field
          className={classes.Input}
          name="lastName"
          label="Last Name"
          component={renderField}
          type="text"
        />
      </div>
      <div>
        <Field
          className={classes.Input}
          name="email"
          label="E-mail"
          component={renderField}
          type="email"
        />
      </div>
      <div>
        <Field
          rows="7"
          formFiled="textarea"
          className={classes.Input}
          name="message"
          label="Message"
          component={renderField}
          type="text"
        />
      </div>
      <Button type="submit" disabled={submitting}>
        Submit
      </Button>
    </form>
  );
};
ContactForm = reduxForm({
  form: "contact",
  validate
})(ContactForm);

export default ContactForm;
