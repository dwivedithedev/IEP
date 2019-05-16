/*
 * File Name:- Categories.js (Javascript File with JSX Code)
 * Description:- This file consists of the the code which
 * is for the categories page. This is our one of the main
 * component as it displays all the categories with the other
 * three major components i.e. Astronomy, History & Geography.
 * This page has chances to have high load but it still has faster
 * loading because of dynamic component calls and usage.
 * Project by:- Vaibhav Dwivedi
 */

// Importing Required Libraries
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "card-vibes";
import Astronomy from "./Astronomy";
import Geography from "./Geography";
import History from "./History";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVrCardboard,
  faPlus,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";

import { Button, Badge, Container, Row, Col, Jumbotron } from "react-bootstrap";

//Categories class is an exported component with 3 major components being called in them.
export default class Categories extends React.Component {
  render() {
    return (
      <div className="App header">
        <Jumbotron>
          <Badge variant="info">
            <h1>EducationalVR</h1>
          </Badge>
          <h6>Learning in Virtual Reality</h6>
          <Container>
            <Row className="headerTopPad30">
              <Col xs={12}>
                <h5>
                  <b>Before Your Proceed,</b>
                </h5>
                <h6>
                  1. For the Optimal Experience, It is recommended to access
                  this website on a <b>Desktop PC / Laptop / Tablet</b>. <br />{" "}
                  <br />
                  2. On Smartphone, It is recommended to be accessed on{" "}
                  <b>Google Chrome browser.</b>
                  <br /> <br />
                  3. All the major VR Headsets like HTC Vive, Oculus Rift,
                  Oculus Go, Google Daydream / Cardboard, Samsung GearVR, Vive
                  Focus.
                </h6>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Router>
          <div>
            <Container>
              <Row>
                <h3>Choose a category</h3>
              </Row>
            </Container>
            <div className="App header">
              <Container>
                <Row className="justify-content-center">
                  <Col xs="auto" lg="4">
                    <Link to="/cat/geography">
                      <Card>
                        <b>Geography</b>
                      </Card>
                    </Link>
                  </Col>
                  <Col xs="auto" lg="4">
                    <Link to="/cat/history">
                      <Card>
                        <b>History</b>
                      </Card>
                    </Link>
                  </Col>
                  <Col xs="auto" lg="4">
                    <Link to="/cat/astronomy">
                      <Card>
                        <b>Astronomy</b>
                      </Card>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
            <Route path="/cat/geography" component={Geography} />
            <Route path="/cat/astronomy" component={Astronomy} />
            <Route path="/cat/history" component={History} />
          </div>
        </Router>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
