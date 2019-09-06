import React from "react";
import classes from "./Input.css";

const Input = props => {
  let inputElement = "";
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={classes.Input}
          {...props.elementConfig}
          value={props.value}
          onChange={props.onInputChange}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          rows="7"
          className={classes.Input}
          {...props.elementConfig}
          value={props.value}
          onChange={props.onInputChange}
        />
      );
      break;
    case "select":
      const options = props.options.map(o => (
        <option key={o} value={o}>
          {o}
        </option>
      ));

      inputElement = (
        <select value={props.value} onChange={props.onInputChange}>
          <option value="">{props.placeholder}</option>
          {options}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={classes.Input}
          {...props.elementConfig}
          value={props.value}
          onChange={props.onInputChange}
        />
      );
  }

  return <div className={classes.Input}>{inputElement}</div>;
};
export default Input;
