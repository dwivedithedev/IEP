/*
 * File Name:- index.js (Javascript File with JSX Code)
 * Description:- This file consists of the the code which
 * renders the Web Application in React to the HTML component
 * of index.html . The element in which it renders has an ID
 * of "root".
 * Project by:- Vaibhav Dwivedi
 */

// Importing Required Libraries
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NavBar from "./NavBar";

//render components App and NavBar to root div
const rootElement = document.getElementById("root");
ReactDOM.render(
  <NavBar>
    <App />
  </NavBar>,
  rootElement
);
