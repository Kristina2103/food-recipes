import React, { Component, Fragment as ReactFragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import ButtonCss from "../../components/UI/Button/Button.css";
import aboutImg from "../../assets/images/about.jpg";
import headerImg from "../../assets/images/header.png";
import classes from "./FoodRecipes.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import List from "../../components/Recipes/List/List";
import ContactForm from "../../components/Forms/ContactForm";

class FoodRecipes extends Component {
  state = {
    isFormSubmited: false,
    formMsg: null
  };
  componentDidMount() {
    this.props.getCategoryList();
  }
  //Handle contact form submit
  submit = values => {
    this.setState({
      isFormSubmited: true,
      formMsg: " Your message has successfully been sent!"
    });
    //Save data in local storage
    Object.keys(values).map(el => localStorage.setItem(`${el}`, values[el]));
  };
  //Go to category page on button click
  onCategoryBtnClick = () => {
    this.props.history.push("/category");
  };
  render() {
    //Display data if categories are fetched
    let content = this.props.errorCategory ? (
      "Error! Can't fetch data!"
    ) : (
      <Spinner />
    );
    //Display success msg on form submit
    let formMsg = this.state.isFormSubmited ? (
      <p className={classes.SuccessMsg}>{this.state.formMsg}</p>
    ) : (
      ""
    );
    if (this.props.categoryList.length !== 0) {
      content = (
        <ReactFragment>
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
                  amet, consectetur adipiscing elit euismod. libero rutrum,
                  tincidunt turpis ut, aliquam metus.
                </p>
                <div className={classes.BtnLink}>
                  <a href="#categories" className={ButtonCss.Button}>
                    Categories
                  </a>
                </div>
              </div>
            </div>
            <div className={classes.ImgDiv}>
              <img src={headerImg} alt="Food Recipes" />
            </div>
          </section>
          <section id="categories" className={classes.Categories}>
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
            {formMsg}
            <ContactForm onSubmit={this.submit} />
          </section>
        </ReactFragment>
      );
    }

    return <ReactFragment>{content}</ReactFragment>;
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
