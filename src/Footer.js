/*
 * File Name:- Footer.js (Javascript File with JSX Code)
 * Description:- This file consists of the the code which
 * contains the footer information for everypage. This component
 * is included in every page's footer to prevent code repetition.
 * Project by:- Vaibhav Dwivedi
 */

// Importing Required Libraries
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

//Footer is an exported component which returns footer information
// which can be used everywhere in the pages.
export default class Footer extends Component {
  render() {
    return (
      <div className="App footer">
        <h6 className="noTextDec">
          <Spinner animation="grow" size="sm" variant="info" /> Project by
          Vaibhav Dwivedi | <Link to="/">EducationalVR</Link>
        </h6>
      </div>
    );
  }
}
