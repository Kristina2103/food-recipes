import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Button from "../../components/UI/Button/Button";
import aboutImg from "../../assets/images/about.jpg";
import headerImg from "../../assets/images/header.png";
import classes from "./FoodRecipes.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import List from "../../components/Recipes/List/List";
import Contact from "../../components/Contact/Contact";
class FoodRecipes extends Component {
  componentDidMount() {
    this.props.getCategoryList();
  }

  render() {
    let content = this.props.errorCategory ? (
      "Error! Can't fetch data!"
    ) : (
      <Spinner />
    );

    if (this.props.categoryList.length !== 0) {
      content = (
        <Auxiliary>
          <section className={[classes.Hero, classes.First].join(" ")}>
            <div className={classes.TextDiv}>
              <div className={classes.TextDivChild}>
                <h1>Food Recipes</h1>
                <p>
                  Integer eget urna tristique, accumsan metus et, interdum
                  turpis. Morbi eu neque sem. Integer pretium ante velit.
                  Vestibulum auctor libero rutrum, tincidunt turpis ut, aliquam
                  metus. Praesent in arcu eget enim rhoncus elementum in
                  ultrices ante. Praesent ut lacus ipsum. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. euismod.
                </p>
                <Button>Category</Button>
              </div>
            </div>
            <div className={classes.ImgDiv}>
              <img src={headerImg} alt="Food Recipes" />
            </div>
          </section>
          <section className={classes.Categories}>
            <List
              listType="category"
              listStyle="Dark"
              itemsPerRow="4"
              param="name"
              onImageClickPath="category"
            />
          </section>

          <section id="about">
            <h2 className={classes.Underlined}>
              <span>About Us</span>
            </h2>
            <div className={classes.Hero}>
              <div className={classes.TextDiv}>
                <p>
                  Integer eget urna tristique, accumsan metus et, interdum
                  turpis. Morbi eu neque sem. Integer pretium ante velit.
                  Vestibulum auctor libero rutrum, tincidunt turpis ut, aliquam
                  metus. Praesent in arcu eget enim rhoncus elementum in
                  ultrices ante. Praesent ut lacus ipsum. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. euismod. Morbi eu neque
                  sem. Integer pretium ante velit. Vestibulum auctor libero
                  rutrum, tincidunt turpis ut, aliquam metus. Praesent in arcu
                  eget enim rhoncus elementum in ultrices ante. Praesent ut
                  lacus ipsum. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. euismod.Morbi eu neque sem. Integer pretium
                  ante velit. Vestibulum auctor libero rutrum, tincidunt turpis
                  ut, aliquam metus. Praesent in arcu eget enim rhoncus
                  elementum in ultrices ante. Praesent ut lacus ipsum. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. euismod.
                </p>
              </div>
              <div className={classes.ImgDiv}>
                <img src={aboutImg} alt="About" />
              </div>
            </div>
          </section>
          <section id="contact" className={classes.Contact}>
            <h2 className={classes.Underlined}>
              <span>Contact</span>
            </h2>
            <Contact />
          </section>
        </Auxiliary>
      );
    }

    return <Auxiliary>{content}</Auxiliary>;
  }
}
const mapStateToProps = state => {
  return {
    categoryList: state.main.categoryList,
    errorCategory: state.main.errorCategory
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCategoryList: () => dispatch(actions.getCategoryList())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodRecipes);
