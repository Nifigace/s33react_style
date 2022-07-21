import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid blue"
};

customStyle.color = "green";

ReactDOM.render(
  <h1 style={customStyle}>Hello people</h1>,
  document.getElementById("root")
);
