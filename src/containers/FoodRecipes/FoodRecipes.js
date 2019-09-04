import React, { Component } from "react";
import { classes } from "./FoodRecipes.css";
import aboutImg from "../../assets/images/about.jpg";
class FoodRecipes extends Component {
  render() {
    return (
      <div>
        FoodRecipes
        <h2>About Us</h2>
        <section id="about">
          <p>
            Integer eget urna tristique, accumsan metus et, interdum turpis.
            Morbi eu neque sem. Integer pretium ante velit. Vestibulum auctor
            libero rutrum, tincidunt turpis ut, aliquam metus. Praesent in arcu
            eget enim rhoncus elementum in ultrices ante. Praesent ut lacus
            ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam pretium nisi tortor, quis blandit est cursus sit amet. Aliquam
            ac ante eget enim pulvinar luctus. Nam vitae dui ac lacus porta
            tempor vitae sed libero. Morbi laoreet nulla in orci malesuada
            euismod.
          </p>
          <img src={aboutImg} />
        </section>
        <h2>Contact</h2>
        <section id="contact">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in metus
          dapibus, venenatis diam sit amet, ullamcorper lectus. Sed feugiat
          turpis vel est mattis molestie. Praesent leo ligula, sodales non
          rhoncus vitae, sodales eget massa. Quisque consequat luctus odio in
          pulvinar. Proin malesuada ultricies turpis at vulputate. Donec aliquam
          condimentum lectus, cursus mattis eros faucibus vitae. Pellentesque
          varius, dolor quis commodo consectetur, enim nisl egestas nunc, id
          suscipit lorem risus sit amet enim. Suspendisse potenti. Donec
          porttitor velit ex, eu pharetra tortor lacinia non. Phasellus tempus
          interdum erat. Sed ac nisl et orci elementum fermentum. Nam sodales
          lobortis condimentum. Nulla consectetur nunc ut mi lobortis, ut
          dapibus erat vestibulum. Cras tempus, ex vel condimentum rhoncus, enim
          nunc ullamcorper ex, eu condimentum nunc mauris quis nibh. Integer
          eget urna tristique, accumsan metus et, interdum turpis. Morbi eu
          neque sem. Integer pretium ante velit. Vestibulum auctor libero
          rutrum, tincidunt turpis ut, aliquam metus. Praesent in arcu eget enim
          rhoncus elementum in ultrices ante. Praesent ut lacus ipsum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium nisi
          tortor, quis blandit est cursus sit amet. Aliquam ac ante eget enim
          pulvinar luctus. Nam vitae dui ac lacus porta tempor vitae sed libero.
          Morbi laoreet nulla in orci malesuada euismod. Ut feugiat ornare
          tellus. Suspendisse elementum erat nec lectus euismod egestas. Quisque
          eu condimentum erat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus lacus mi, suscipit vitae ultricies ac,
          sollicitudin vitae ipsum. In mi nunc, consequat non tellus in, egestas
          tincidunt nisi. Suspendisse congue odio quis diam molestie, ac dapibus
          magna dapibus. Nunc aliquam magna quis tempor sollicitudin. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </section>
      </div>
    );
  }
}

export default FoodRecipes;
