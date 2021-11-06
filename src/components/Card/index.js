import React from "react";
import "./style.css";

function Card({ flip, content, flipped }) {
  let cardContent;
  if (flipped) {
    cardContent = content;
  } else {
    cardContent = "";
  }
  return (
    <div onClick={flip} className={`Card ${flipped ? "face-up" : ""}`}>
      {cardContent}
    </div>
  );
}

export default Card;
