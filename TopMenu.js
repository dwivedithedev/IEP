/*
 * File Name:- TopMenu.js (Javascript File with JSX Code)
 * Description:- This file consists of the the code required
 * to build the top most navigation menu for accessing
 * different pages in the web application.
 * Project by:- Vaibhav Dwivedi
 */

// Importing Required Libraries
import React from "react";
import "./src/NavBar";
import { Link } from "react-router-dom";

//Topmenu is a Class component which returns the TopMenu
export default class TopMenu extends React.Component {
  render() {
    return (
      <Nav className="justify-content-end">
        <Nav.Item as="li">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link>
            <Link to="/categories">Categories</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link>
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
