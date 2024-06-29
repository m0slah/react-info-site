import React from "react";
import ReactDOM from "react-dom";

const page = (
  <div>
    <h1>React is Awesome!</h1>
    <p>most popular javascript framework and library</p>
    <ul>
      <li>composable</li>
      <li>declaretive</li>
      <li>component based</li>
    </ul>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
// ReactDOM.render(document.getElementById("root").append(JSON.stringify(page)));
