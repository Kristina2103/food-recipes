import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";

import classes from "./Layout.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
  onLayoutClick = () => {
    if (this.props.isTooltipOpened) return this.props.toggleLoginTooltip();
  };
  render() {
    return (
      <div className={classes.Layout}>
        <Header />
        <main onClick={this.onLayoutClick} className={classes.Main}>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isTooltipOpened: state.isTooltipOpened
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleLoginTooltip: () => dispatch(actions.toggleLoginTooltip())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
