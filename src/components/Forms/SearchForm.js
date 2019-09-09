import React from "react";
import classes from "./Forms.css";
import { Field, reduxForm } from "redux-form";

let SearchForm = props => {
  const { handleSubmit } = props;

  return (
    <form className={classes.SearchBar} onSubmit={handleSubmit}>
      <div>
        <Field
          className={classes.SearchInput}
          name="term"
          placeholder="Search Recipes"
          component="input"
          type="text"
        />
      </div>
      <button type="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};
SearchForm = reduxForm({
  form: "search"
})(SearchForm);

export default SearchForm;
