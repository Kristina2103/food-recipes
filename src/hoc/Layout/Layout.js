import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import MobileMenu from "../../components/Header/MobileMenu/MobileMenu";
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
        <Header onMenuTogglerClick={this.props.toggleMobileMenu} />
        <MobileMenu isMobileOpen={this.props.isMobileOpen} />
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
    isTooltipOpened: state.auth.isTooltipOpened,
    isMobileOpen: state.main.isMobileOpen
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleLoginTooltip: () => dispatch(actions.toggleLoginTooltip()),
    toggleMobileMenu: () => dispatch(actions.toggleMobileMenu())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
