import React from 'react';
// import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Employees from "../Employees.json";
import SortBy from "../components/Sort";
import FilterBy from "../components/Filter";
import EmployeeCard from "../components/Card";

function Home() {
    return (
        <div>
            <NavBar />
                <Container>
                    <Row>
                    <Col size="md-2">
                        <img
                            src={"ImageAssets/directory.png"}
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
                            <Col size="md-12">
                                <SortBy />
                                <FilterBy />
                            </Col>
                        </Row>
                            {Employees.map(employee => (
                                <Row>
                                    <Col size="md-12">
                                        <EmployeeCard
                                            image={employee.image}
                                            id={employee.id}
                                            firstName={employee.firstName}
                                            lastName={employee.lastName}
                                            department={employee.department}
                                            active={employee.active}
                                        />
                                    </Col>
                                </Row>
                            ))}                                    
                </Container>
        </div>
    )
}

export default Home;