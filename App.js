import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", { key: 1, id: "main-div" }, [
  React.createElement(
    "h1",
    { key: 2, id: "main-heading" },
    "Hello I am from Div>h1"
  ),
  React.createElement(
    "h2",
    { key: 3, id: "second-heading" },
    "Hello I am from Div>h2"
  ),
  React.createElement(
    "div",
    { key: 4, id: "sub-div" },
    React.createElement(
      "a",
      { key: "link", href: "https://www.google.com", target: "_blank" },
      "Google link"
    ),

    React.createElement(
      "h3",
      { id: "third-heading" },
      "Hello I am from Div>Div>h3"
    )
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
