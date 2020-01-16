import React from 'react';
// import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import DirImg from "./assets/directory.png";

function Home() {
    return (
        <div>
            <NavBar />
                <Container>
                    <Row>
                    {/* <Col size="md-2"> */}
                    <Col size="md-2">
                        <img
                            src={DirImg}
                            alt="directory"
                            width="75px"
                            height="75px"
                        />
                    </Col>
                        <Col size="md-10">
                            <h1>Employee Directory</h1>
                        </Col>
                    </Row>
                        <Row>
                            <Col size="md-2">
                                <p>Sort By: </p>
                            </Col>
                                <Col size="md-3">
                                    <p>Dropdown placeholder</p>
                                </Col>
                                    <Col size="md-7">
                                        <p>Sort button placeholder</p>
                                    </Col>
                        </Row>
                            <Row>
                                <Col size="md-2">
                                    <p>Filter By: </p>
                                </Col>
                                    <Col size="md-3">
                                        <p>Dropdown placeholder</p>
                                    </Col>
                                        <Col size="md-7">
                                            <p>Filter button placeholder</p>
                                        </Col>
                            </Row>
                                <Row>
                                    <Col size="md-12">
                                        <h3>List of Cards will go here...</h3>
                                    </Col>
                                </Row>
                </Container>
            {/* <h1 class="text-center">Directory Placeholder</h1>
            <h3 class="text-center">Placeholder</h3> */}
        </div>
    )
}

export default Home;