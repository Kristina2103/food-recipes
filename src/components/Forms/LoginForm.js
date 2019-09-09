import React from "react";
import classes from "./Forms.css";
import Button from "../UI/Button/Button";
import { Field, reduxForm } from "redux-form";

//Validate form
const validate = values => {
  const errors = {};
  if (!values.pass) {
    errors.pass = "Required";
  } else if (values.pass !== "admin123") {
    errors.pass = "Invalid password";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (values.email !== "admin@admin.com") {
    errors.email = "Invalid email address! ";
  }
  return errors;
};
//Define fields config
const renderField = ({
  input,
  label,
  type,
  className,
  meta: { touched, error }
}) => (
  <div>
    <div>
      <input className={className} {...input} placeholder={label} type={type} />
      {touched && (error && <p className={classes.ErrorMsg}>{error}</p>)}
    </div>
  </div>
);

let LoginForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          className={classes.Input}
          name="email"
          label="admin@admin.com"
          component={renderField}
          type="email"
        />
      </div>
      <div>
        <Field
          className={classes.Input}
          name="pass"
          label="admin123"
          component={renderField}
          type="password"
        />
      </div>
      <Button type="submit" disabled={submitting}>
        Submit
      </Button>
    </form>
  );
};
LoginForm = reduxForm({
  form: "login",
  validate
})(LoginForm);

export default LoginForm;
