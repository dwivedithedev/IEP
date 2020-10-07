/*
 * File Name:- Astronomy.js (Javascript File with JSX Code)
 * Description:- This file consists of the the code which
 * is for the astronomy category in our web application offers.
 * It has the WebVR code for state changes to be done to generate
 * dynamically the environment in Virtual Reality. The function calls
 * passes the 'preset' and 'valuetext' to dynamically update the state
 * of the react to update changes in text board and environment in the preview.
 * Project by:- Vaibhav Dwivedi
 */

// Importing Required Libraries

import React from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";
import "aframe-environment-component";
import {
  Card,
  Alert,
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";
import "../styles.css";

//Astronomy category's class component has two functions by which VR scene are generated
// toStarry() & toOsiris() are These functions on call update the state of react and thus, WebVR scene component
export default class Astronomy extends React.Component {
  constructor() {
    super();
    this.state = {
      preset: "osiris",
      valueText: "About the Environment"
    };
  }

  toStarry() {
    this.setState({
      preset: "starry",
      valueText:
        "Every star you see in the night sky is bigger and brighter than our sun. Of the 5,000 or so stars brighter than magnitude 6, only a handful of very faint stars are approximately the same size and brightness of our sun and the rest are all bigger and brighter. "
    });
  }

  toOsiris() {
    this.setState({
      preset: "osiris",
      valueText:
        "Civil twilight occurs when the Sun is less than 6 degrees below the horizon. In the morning, civil twilight begins when the Sun is 6 degrees below the horizon and ends at sunrise. In the evening, it begins at sunset and ends when the Sun reaches 6 degrees below the horizon."
    });
  }

  render() {
    return (
      <div className="App header">
        <Alert variant="info">
          <Alert.Heading>Learn Astronomy Lessons in VR</Alert.Heading>
          <p>
            Following are some of the concepts you can learn in Virtual Reality.
            A VR Headset is recommended for best and full experience, to
            understand concepts better.
          </p>
        </Alert>
        <Container>
          <Row>
            <Col xs="auto" lg="6">
              <Card>
                <Card.Body>
                  <Card.Title>Full Star Night Experience</Card.Title>
                  <Card.Text>
                    The Virtual Experience and explanation about a night full of
                    stars which you might not know.
                  </Card.Text>
                  <Button variant="primary" onClick={this.toStarry.bind(this)}>
                    Load FullNightStarVR
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="auto" lg="6">
              <Card>
                <Card.Body>
                  <Card.Title>Civil Twilight Night Experience</Card.Title>
                  <Card.Text>
                    Learn about and experience Civil twilight which is the
                    brightest of the 3 twilight phases.
                  </Card.Text>
                  <Button variant="primary" onClick={this.toOsiris.bind(this)}>
                    Civil Twilight Night
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/*Below code is for Aframe WebVR Scene */}
        <Card>
          <Card.Body>
            <Card.Title>Preview</Card.Title>
            <hr />
            <Container>
              <Row>
                <Col>
                  <div id="myEmbeddedScene">
                    <Scene
                      vr-mode-ui="enterVRButton: #myEnterVRButton"
                      embedded
                    >
                      <Entity environment={this.state} />
                      <Entity
                        text={{
                          value: this.state.valueText,
                          side: "double",
                          align: "center",
                          tabSize: 3.99
                        }}
                        scale="15 15 15"
                        position={{ x: 0.0, y: 2.649, z: -10.0 }}
                      />
                      <Entity
                        primitive="a-plane"
                        color="#CCC"
                        height="15"
                        width="10"
                        position={{ x: 0.0, y: 0.949, z: -10.0 }}
                        rotation="0 0 -90"
                      />
                    </Scene>
                  </div>
                </Col>
              </Row>
            </Container>
          </Card.Body>
          <Row>
            <Col>
              <div className="header">
                <Button
                  id="myEnterVRButton"
                  href="#"
                  size="lg"
                  variant="primary"
                >
                  LAUNCH EXPERIENCE
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
