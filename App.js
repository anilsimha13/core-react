import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <div className="main-div">
      <h1 className="main-heading">Heading🚀</h1>
    </div>
  );
};

const smallTitle = [
  <h3 className="small-title" key={1}>
    Small Title🚀
  </h3>,
  <h4 className="sm-sm-title" key={2}>
    Small Small Title🚀
  </h4>,
];

const Heading = () => {
  return (
    <div className="sub-div">
      <Title />
      <h2 className="sub-heading">Sub-heading🚀</h2>
      {smallTitle}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
