import React, { Component } from "react";

import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Button from "../../components/UI/Button/Button";
import aboutImg from "../../assets/images/about.jpg";
// import { classes } from "./FoodRecipes.css";
import classes from "./FoodRecipes.css";
class FoodRecipes extends Component {
  render() {
    return (
      <Auxiliary>
        <section className={classes.Hero}>
          <div className={classes.TextDiv}>
            <div className={classes.TextDivChild}>
              <h1>Food Recipes</h1>
              <p>
                Integer eget urna tristique, accumsan metus et, interdum turpis.
                Morbi eu neque sem. Integer pretium ante velit. Vestibulum
                auctor libero rutrum, tincidunt turpis ut, aliquam metus.
                Praesent in arcu eget enim rhoncus elementum in ultrices ante.
                Praesent ut lacus ipsum. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. euismod.
              </p>
              <Button>Category</Button>
            </div>
          </div>
          <div className={classes.ImgDiv}>
            <img src={aboutImg} alt="About" />
          </div>
        </section>
      </Auxiliary>
    );
  }
}

export default FoodRecipes;
