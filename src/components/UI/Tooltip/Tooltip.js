import React from "react";
import classes from "./Tooltip.css";

const ToolTip = props => {
  let tooltipClasses = [classes.Tooltip];
  props.opened
    ? tooltipClasses.push(classes.Open)
    : tooltipClasses.push(classes.Close);
  return <div className={tooltipClasses.join(" ")}>{props.children}</div>;
};

export default ToolTip;
