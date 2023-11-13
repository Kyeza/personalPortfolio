import React from "react";
import Container from 'react-bootstrap/Container';

import '../styles/Main.css';
import HomeDetails from "./HomeDetails";

function Main({ children }) {
    return (
        <Container className={"main-container p-0"} fluid>
            <div className={"diagonal-split-yellow-block"}></div>
            <div className={"children-container"}>
                {children} {/* Render the children here */}
            </div>
        </Container>
    );
}

export default Main;