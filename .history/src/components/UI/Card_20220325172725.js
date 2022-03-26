import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div>
      <div className={`${classes.card} ${props.}`}>{props.children}</div>
    </div>
  );
};
export default Card;
