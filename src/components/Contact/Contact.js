import React, { Component } from "react";
import classes from "./Contact.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
class Contact extends Component {
  state = {
    auth: {
      FirstName: {
        value: "",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "First Name"
        }
      },
      LastName: {
        value: "",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Last Name"
        }
      },
      Email: {
        value: "",
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-mail"
        }
      },
      Message: {
        value: "",
        elementType: "textarea",
        elementConfig: {
          type: "textarea",
          placeholder: "Message"
        }
      }
    },
    SuccessMsg: false,
    ErrorMsg: false
  };
  onInputChange = (e, id) => {
    const value = e.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        auth: {
          ...prevState.auth,
          [id]: {
            ...prevState.auth[id],
            value: value
          }
        }
      };
    });
  };
  onFormSubmit = e => {
    e.preventDefault();
    let errors = [];
    Object.keys(this.state.auth).map(el => {
      if (this.state.auth[el].value === "") {
        errors.push(el);
      }
      return errors;
    });
    if (errors.length > 0) {
      return this.setState({ ErrorMsg: true });
    }
    Object.keys(this.state.auth).map(el =>
      localStorage.setItem(`${el}`, this.state.auth[el].value)
    );
    return this.setState({ SuccessMsg: true, ErrorMsg: false });
  };
  render() {
    let succesContactFormSubmit;
    if (this.state.SuccessMsg)
      succesContactFormSubmit = (
        <p className={classes.SuccessMsg}>
          Your message has successfully been sent!
        </p>
      );
    if (this.state.ErrorMsg) {
      succesContactFormSubmit = (
        <p className={classes.ErrorMsg}>All fields are required!</p>
      );
    }
    const inputs = Object.keys(this.state.auth).map(el => {
      return (
        <Input
          key={el}
          value={this.state.auth[el].value}
          elementType={this.state.auth[el].elementType}
          onInputChange={e => this.onInputChange(e, el)}
          elementConfig={this.state.auth[el].elementConfig}
        />
      );
    });
    return (
      <div className={classes.Contact}>
        {succesContactFormSubmit}
        <form onSubmit={this.onFormSubmit}>
          {inputs}
          {/* <p className={classes.ErrorMsg}>{wrongCredentialsMsg}</p> */}
          <Button typeButton="">Send</Button>
        </form>
      </div>
    );
  }
}

export default Contact;
