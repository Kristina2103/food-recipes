import React from "react";
import classes from "./ListItem.css";
const ListItem = props => {
  return (
    <div className={classes.ListItem}>
      <img
        className={classes.Image}
        src={props.img}
        alt={props.name}
        onClick={props.onListImageClick}
      />
      <p className={classes.Name}>{props.name}</p>
    </div>
  );
};
export default ListItem;
