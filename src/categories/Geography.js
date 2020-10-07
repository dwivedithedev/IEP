/*
 * File Name:- Geography.js (Javascript File with JSX Code)
 * Description:- This file consists of the the code which
 * is for the geography category in our web application offers.
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

//Geography category's class component has two functions by which VR scene are generated
// toVolcano(), toForest() & toMars() are These functions on call update the state of react and thus, WebVR scene component
export default class Geography extends React.Component {
  constructor() {
    super();
    this.state = {
      preset: "forest",
      valueText: "About The Environment"
    };
  }

  toVolcano() {
    this.setState({
      preset: "volcano",
      valueText:
        "A volcano is a rupture in the crust of a planetary-mass object, such as Earth, that allows hot lava, volcanic ash, and gases to escape from a magma chamber below the surface. A Volcano is like a big zit that pops out on earth's face. You can swim in lava."
    });
  }

  toMars() {
    this.setState({
      preset: "yavapai",
      valueText:
        "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. A Mars rover is a motor vehicle that travels across the surface of the planet Mars upon arrival. Rovers have several advantages over stationary landers: they examine more territory."
    });
  }

  toForest() {
    this.setState({
      preset: "forest",
      valueText:
        "A forest is a large area dominated by trees. Hundreds of more precise definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, legal standing and ecological function. You can move around to see different types of trees here same as in reality."
    });
  }
  render() {
    return (
      <div className="App header">
        <Alert variant="info">
          <Alert.Heading>Learn Geography Lessons in VR</Alert.Heading>
          <p>
            Following are some of the concepts you can learn in Virtual Reality.
            A VR Headset is recommended for best and full experience, to
            understand concepts better.
          </p>
        </Alert>
        <Container>
          <Row>
            <Col xs="auto" lg="4">
              <Card>
                <Card.Body>
                  <Card.Title>MarsVR Experience</Card.Title>
                  <Card.Text>
                    Enter the view of Rover of MARS and visualise the experience
                    from its perspective. Use <b>WASD</b> Keys on keyboard to
                    move around.
                  </Card.Text>
                  <Button variant="primary" onClick={this.toMars.bind(this)}>
                    Load MarsVR
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="auto" lg="4">
              <Card>
                <Card.Body>
                  <Card.Title>ForestVR Experience</Card.Title>
                  <Card.Text>
                    Explore by being Stranded in the middle of Poly-mesh
                    generated tropical jungle. Use <b>WASD</b> Keys on keyboard
                    to explore around.
                  </Card.Text>
                  <Button variant="primary" onClick={this.toForest.bind(this)}>
                    Load ForestVR
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="auto" lg="4">
              <Card>
                <Card.Body>
                  <Card.Title>VolcanoVR Experience</Card.Title>
                  <Card.Text>
                    Wonder how the environment around a volcano is? This
                    experience will give you an idea. Use <b>WASD</b> Keys on
                    keyboard to move around.
                  </Card.Text>
                  <Button variant="primary" onClick={this.toVolcano.bind(this)}>
                    Load VolcanoVR
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
                      <Entity primitive="a-sky" color="#6EBAA7" />
                      <Entity
                        environment={{
                          preset: this.state.preset,
                          value: this.state.valueText
                        }}
                      />
                      <Entity
                        text={{
                          value: this.state.valueText,
                          side: "double",
                          align: "center",
                          tabSize: 1.99
                        }}
                        scale="15 15 15"
                        position={{ x: 0.0, y: 2.649, z: -7.7 }}
                      />
                      <Entity
                        primitive="a-plane"
                        color="#CCC"
                        height="15"
                        width="10"
                        position={{ x: 0.0, y: 0.949, z: -7.8 }}
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
