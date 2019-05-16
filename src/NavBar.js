/*
 * File Name:- NavBar.js (Javascript File with JSX Code)
 * Description:- This file consists of the the code which
 * links the pages with each of the component and develops
 * the actual navigation as it consists of the code for it.
 * Project by:- Vaibhav Dwivedi
 */

// Importing Required Libraries

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Nav } from "react-bootstrap";

// Importing the Stylesheet file
import "./styles.css";

//Importing the Components which were exported
import Home from "./App";
import About from "./About";
import Contact from "./Contact";
import Categories from "./categories/Categories";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

//NavBar class is an exported component which provides navigation
export default class NavBar extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/categories" component={Categories} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}
