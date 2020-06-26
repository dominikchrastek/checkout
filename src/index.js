import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import "@ventrata/checkout/dist/esm";

const Comp = () => {
  return (
    <ventrata-checkout
      product="44c797ef-4197-49d2-94c0-824e0aa70ecf"
      token="45d4f9e9-c649-4a74-87e3-63c3fd3ecb04"
    ></ventrata-checkout>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Comp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
