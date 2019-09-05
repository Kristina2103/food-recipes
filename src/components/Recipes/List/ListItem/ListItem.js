import React from "react";
import classes from "./ListItem.css";
const ListItem = props => {
  let ListItemClasses = [classes.ListItem];
  props.itemsPerRow === "4"
    ? ListItemClasses.push(classes.Col4)
    : ListItemClasses.push(classes.Col3);
  ListItemClasses.push(classes[props.listStyle]);

  return (
    <div className={ListItemClasses.join(" ")}>
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
