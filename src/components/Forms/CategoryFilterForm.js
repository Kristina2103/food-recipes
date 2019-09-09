import React from "react";
import classes from "./Forms.css";
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

let CategoryFilterForm = props => {
  const { handleSubmit } = props;
  let options = "";
  if (props.options)
    options = props.options.map(o => (
      <option key={o} value={o}>
        {o}
      </option>
    ));
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          className={classes.SearchInput}
          name="category"
          label="Search Recipes"
          component="select"
        >
          <option key="0" value="0">
            Category
          </option>
          {options}
        </Field>
      </div>
    </form>
  );
};
CategoryFilterForm = reduxForm({
  form: "categoryFilter",
  validate
})(CategoryFilterForm);

export default CategoryFilterForm;
