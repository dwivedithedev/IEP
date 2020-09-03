/*
 * File Name:- About.js (Javascript File with JSX Code)
 * Description:- This file consists of the the code which
 * is for the about us page. This is general component as
 * there is no major action/function calls being executed.
 * This is to provide information related to our web application
 * to the end user.
 * Project by:- Vaibhav Dwivedi
 */

// Importing Required Libraries

import React from "react";
import Footer from "./Footer";
import { Container, Row, Col, Jumbotron, Badge } from "react-bootstrap";

//About component is exported to render the about us page
export default class About extends React.Component {
  render() {
    return (
      <div className="App header">
        <Jumbotron>
          <Badge variant="info">
            <h1>EducationalVR</h1>
          </Badge>
          <Container>
            <Row className="headerTopPad30">
              <Col xs={12}>
                <h6>
                  <b>About The Project</b>
                </h6>
                <p>
                  In this project of EducationalVR, The objective is to make a
                  platform (as in a web application) to help people learn and
                  understand and more importantly experience complex topics in
                  different subjects with the help of virtual reality. The main
                  goal is aimed to make complex topics, easier to understand and
                  effective for learning for the students and easier to be
                  taught by teachers as well. This will help in retaining the
                  concepts in student's mind in a better manner so that they can
                  perform better in further education.
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
