/*
 * File Name:- Contact.js (Javascript File with JSX Code)
 * Description:- This file consists of the the code which
 * is for the Contact Us page in our web application It consists
 * of input fields, validation methods/functions and state-based
 * as per the React analogy. It sends the feedback using Email API
 * of browser's of the device to generate the email in native app,
 * ready to be composed and send.
 * Project by:- Vaibhav Dwivedi
 */

// Importing Required Libraries
import React from "react";
import Footer from "./Footer";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Jumbotron,
  Badge
} from "react-bootstrap";

//Contact is an exported component used to include the contact us page with given elements
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { validated: false };
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.setState({ validated: true });
      event.preventDefault();
      let name = document.getElementById("formGroupName").value;
      let email = document.getElementById("formGroupEmail").value;
      let query = document.getElementById("formGroupContent").value;
      console.log("Name - " + name + ", email -" + email + " query - " + query);
      let pushEmail =
        "mailto:vaibhavforeverpr@gmail.com?body=" +
        query +
        "&subject= Query by " +
        name +
        "&cc=" +
        email;
      console.log(pushEmail);

      let redirectWindow = window.open(pushEmail, "_blank");
      return redirectWindow.location;
    }
  }

  render() {
    const { validated } = this.state;
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
                  <b>Contact Us</b>
                </h6>
                <p>
                  Please use the below form to submit bug reports, queries,
                  suggestions or to reach out to us.
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Row>
          <Col sm={{ span: 6, offset: 3 }}>
            <Form
              noValidate
              validated={validated}
              onSubmit={e => this.handleSubmit(e)}
            >
              <Form.Group controlId="formGroupName">
                <Form.Label>
                  <b>Name</b>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>
                  <b>Email</b>
                </Form.Label>

                <Form.Control
                  required
                  type="email"
                  placeholder="Enter Your Email"
                />
              </Form.Group>
              <Form.Group controlId="formGroupContent">
                <Form.Label>
                  <b>Describe Your Query</b>
                </Form.Label>
                <Form.Control required as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
