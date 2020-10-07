/*
 * File Name:- History.js (Javascript File with JSX Code)
 * Description:- This file consists of the the code which
 * is for the History category in our web application offers.
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

//History category's class component has two functions by which VR scene are generated
// toJapan(), toEgypt are These functions on call update the state of react and thus, WebVR scene component
export default class History extends React.Component {
  constructor() {
    super();
    this.state = {
      preset: "japan",
      skyType: "none",
      dressingAmount: "10",
      valueText: "About the Environment",
      leftBoardText: "Information will load here.",
      rightBoardText: "Information will load here."
    };
  }

  toJapan() {
    this.setState({
      preset: "japan",
      skyType: "atmosphere",
      valueText:
        "The structures around you represent the Itsukushima Shrine in Japan which is a Shinto shrine on the island of Itsukushima, best known for its torii gate.",
        leftBoardText: "It is in the city of Hatsukaichi in Hiroshima Prefecture in Japan.",
        rightBoardText: "Itsukushima Shrine was registered on UNESCO's World Cultural Heritage list in December 1996."
      });
  }

  toEgypt() {
    this.setState({
      preset: "egypt",
      skyType: "atmosphere",
      valueText:
        "The Egyptian pyramids are ancient pyramid-shaped masonry structures located in Egypt."
      ,leftBoardText: "As of Nov. 2008, We have 118-138 total no. of identified Egyptian pyramids.",
      rightBoardText: " Most were built as tombs for the Pharaohs during the Old and Middle Kingdom periods."
      });
  }

  render() {
    return (
      <div className="App header">
        <Alert variant="info">
          <Alert.Heading>Learn History Lessons in VR</Alert.Heading>
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
                  <Card.Title>JapanVR Experience</Card.Title>
                  <Card.Text>
                    This VR experience gives you an idea about Japan's famous
                    monument called <b>Itsukushima Shrine</b>.
                  </Card.Text>
                  <Button variant="primary" onClick={this.toJapan.bind(this)}>
                    Load JapanVR
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="auto" lg="6">
              <Card>
                <Card.Body>
                  <Card.Title>EgyptVR Experience</Card.Title>
                  <Card.Text>
                    Learn about Pyramids of Egypt which has always been a
                    curious topic for lot of people.
                  </Card.Text>
                  <Button variant="primary" onClick={this.toEgypt.bind(this)}>
                    Load EgyptVR
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
                      <Entity
                        environment={{
                          preset: this.state.preset,
                          skyType: this.state.skyType,
                          valueText: this.state.valueText,
                          dressingAmount: "10"
                        }}
                      />
                      <Entity primitive="a-sky" color="#6EBAA7" />

                      <Entity
                        text={{
                          value: this.state.valueText,
                          side: "double",
                          align: "center",
                          tabSize: 3.99
                        }}
                        scale="15 15 15"
                        position={{ x: 0.0, y: 2.749, z: -10.0 }}
                      />
                      <Entity
                        primitive="a-plane"
                        color="#CCC"
                        height="15"
                        width="10"
                        position={{ x: 0.0, y: 0.949, z: -10.0 }}
                        rotation="0 0 -90"
                      />

                      {/* left board text */}
                      <Entity
                        text={{
                          value: this.state.leftBoardText,
                          side: "double",
                          align: "center",
                          tabSize: 3.99
                        }}
                        scale="12 12 12"
                        position={{ x: -10.0, y: 1.749, z: 10.0 }}
                        rotation="0 90 0"
                      />
                      <Entity
                        primitive="a-plane"
                        color="#696969"
                        height="15"
                        width="5"
                        position={{ x: -10.0, y: 0.949, z: 10.0 }}
                        rotation="0 90 -90"
                      />

                      {/* Right board text */}
                      <Entity
                        text={{
                          value: this.state.rightBoardText,
                          side: "double",
                          align: "center",
                          tabSize: 3.99
                        }}
                        scale="12 12 12"
                        position={{ x: 10.0, y: 1.749, z: 16.0 }}
                        rotation="0 -90 0"
                      />
                      <Entity
                        primitive="a-plane"
                        color="#696969"
                        height="15"
                        width="5"
                        position={{ x: 10.0, y: 0.949, z: 16.0 }}
                        rotation="0 -90 90"
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
