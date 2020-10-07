/*
 * File Name:- App.js (Javascript File with JSX Code)
 * Description:- This file consists of the the code which
 * is for the Homepage. It includes the exported components,
 * CTA buttons, Icons and Routing links for navigation.
 * Project by:- Vaibhav Dwivedi
 */

// Importing Required Libraries

import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import {
  Button,
  Badge,
  Container,
  Row,
  Col,
  Jumbotron
} from "react-bootstrap";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVrCardboard,
  faPlus,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";

//Importing the TopMenu Component
//import TopMenu from "../TopMenu";

//Minor Inline CSS usage using React methodology
var iconStyle = {
  paddingRight: "5px"
};


//App is the main component of our web application
export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="App header">
            <Jumbotron>
              <Badge variant="info">
                <h1>EducationalVR</h1>
              </Badge>
              <Container>
                <Row>
                  <Col className="headerTB30" xs={12}>
                    <FontAwesomeIcon
                      style={iconStyle}
                      icon={faVrCardboard}
                      size="5x"
                    />
                    <FontAwesomeIcon icon={faPlus} size="2x" spin />
                    <FontAwesomeIcon icon={faGraduationCap} size="5x" />
                  </Col>
                  <Col xs={12}>
                    <h4>
                      EducationalVR is a platform made for people to understand
                      and study different and various fields of subjects by
                      experiencing them in Virtual Reality.
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="header">
                      <Link to="/categories">
                        <Button size="lg" variant="info">
                          Start Learning
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Jumbotron>
          </div>
        </header>

        <main />

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
