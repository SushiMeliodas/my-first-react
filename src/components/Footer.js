import React from "react";
import { Container, Row, Col, Media } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .main-footer {
    color: white;
    background-color: #222;
    padding-top: 3em;
    position: relative;
    bottom: 0;
    width: 100%;
  }
`;

function Footer() {
  return (
    <Styles>
      {/* <Container className="main-footer"> */}
      <div className="main-footer">
        <Container>
          <Row>
            <Col>
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <Media as="li">Lorem ipsum</Media>
                <Media as="li">Lorem ipsum</Media>
                <Media as="li">Lorem ipsum</Media>
                <Media as="li">Lorem ipsum</Media>
                <Media as="li">Lorem ipsum</Media>
              </ul>
            </Col>
            <Col>
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <Media as="li">Lorem ipsum</Media>
                <Media as="li">Lorem ipsum</Media>
                <Media as="li">Lorem ipsum</Media>
                <Media as="li">Lorem ipsum</Media>
                <Media as="li">Lorem ipsum</Media>
              </ul>
            </Col>
            <Col>
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <Media as="li">Lorem ipsum</Media>
                <Media as="li">Lorem ipsum</Media>
                <Media as="li">Lorem ipsum</Media>
                <Media as="li">Lorem ipsum</Media>
                <Media as="li">Lorem ipsum</Media>
              </ul>
            </Col>
            <Col>
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <Media as="li">Lorem ipsum</Media>
                <Media as="li">Lorem ipsum</Media>
                <Media as="li">Lorem ipsum</Media>
                <Media as="li">Lorem ipsum</Media>
                <Media as="li">Lorem ipsum</Media>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              &copy;{new Date().getFullYear()} My App | All Right Reserved |
              Terms Of Service | Privacy
            </Col>
          </Row>
        </Container>
      </div>
      {/* </Container> */}
    </Styles>
  );
}

export default Footer;
