//startup point for the side clint application
import React from "react";
import ReactDom from "react-dom"
import Homepage from "./components/homepage/homepage.component";

ReactDom.hydrate(<Homepage />, document.getElementById("root"));