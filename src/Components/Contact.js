import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container fluid className="py-5 mt-4">
      <Row className="justify-content-center mt-5">
        <Col md={6} className='font'>
          <h1 className="text-center mb-5 font">Contact Us</h1>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
            </Form.Group>
            <Button className='mt-3' variant="primary" type="submit" block>
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h1 className="text-center mb-5 font">Contact Information</h1>
          <p className="text-center ">
            <i className="fa fa-map-marker fa-fw "></i> 123 Main St, City, State 12345
          </p>
          <p className="text-center">
            <i className="fa fa-phone fa-fw"></i> (123) 456-7890
          </p>
          <p className="text-center">
            <i className="fa fa-envelope fa-fw"></i> info@newvisionhighschool.com
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
