import React, { Component } from "react";

import classes from "./Layout.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Header />
        <main className={classes.Main}>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
export default Layout;
