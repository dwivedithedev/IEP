import React from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";
import "aframe-particle-system-component";
import "aframe-environment-component"; //This is necessary for any enviroment related work. This is seperate component now

const boxofvr = {
  width: "350px",
  height: "250px"
};

export default class Aframe extends React.Component {
  constructor() {
    super();
    this.state = {
      clsName: "",
      envset: "",
      testval: "ahaan",
      value: "Welcome to WebVR lesson 1",
      side: "double",
      align: "center",
      tabSize: 3.99
    };
  }

  render() {
    return (
      <div style={boxofvr}>
        <h1>Home</h1>
        <Scene embedded>
          <Entity
            primitive="a-sky"
            src="https://raw.githubusercontent.com/aframevr/aframe/v0.9.0/examples/boilerplate/panorama/puydesancy.jpg"
          />
          <Entity
            text={{
              value: this.state.value,
              side: "double",
              align: "center",
              tabSize: 3.99
            }}
            scale="25 25 25"
            position={{ x: 0.0, y: 1.949, z: -10.0 }}
          />
        </Scene>
      </div>
    );
  }
}
