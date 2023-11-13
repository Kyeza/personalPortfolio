import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

import '../styles/HomeDetails.css';
import profilePic from '../assets/profile-picture.jpg';

function HomeDetails() {
    return (
        <Container>
            <Row>
                <Col lg={4} className={"position-fixed d-none d-lg-block profile-image"}>
                </Col>
                <Col xs lg={8} className={"text-left text-sm-center"}>
                    <div className={"text-content"}>
                        <h1>I'M STEVE MILNER.</h1>
                        <h2>WEB DESIGNER</h2>
                        <p>
                            I'm a Tunisian based web designer & front-end developer focused on
                            crafting clean & user-friendly experiences, I am passionate about
                            building excellent software that improves the lives of those around me.
                        </p>
                        <Button variant="warning">MORE ABOUT ME</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeDetails;
