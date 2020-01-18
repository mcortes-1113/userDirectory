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
                            <Row>
                                <Col size="md-12">
                                        <EmployeeCard
                                            image={Employees[0].image}
                                            id={Employees[0].id}
                                            firstName={Employees[0].firstName}
                                            lastName={Employees[0].lastName}
                                            department={Employees[0].department}
                                            active={Employees[0].active}
                                        />
                                </Col>
                                <Col size="md-12">
                                        <EmployeeCard
                                            image={Employees[1].image}
                                            id={Employees[1].id}
                                            firstName={Employees[1].firstName}
                                            lastName={Employees[1].lastName}
                                            department={Employees[1].department}
                                            active={Employees[1].active}
                                        />
                                </Col>
                                <Col size="md-12">
                                        <EmployeeCard
                                            image={Employees[2].image}
                                            id={Employees[2].id}
                                            firstName={Employees[2].firstName}
                                            lastName={Employees[2].lastName}
                                            department={Employees[2].department}
                                            active={Employees[2].active}
                                        />
                                </Col>
                                <Col size="md-12">
                                        <EmployeeCard
                                            image={Employees[3].image}
                                            id={Employees[3].id}
                                            firstName={Employees[3].firstName}
                                            lastName={Employees[3].lastName}
                                            department={Employees[3].department}
                                            active={Employees[3].active}
                                        />
                                </Col>
                                <Col size="md-12">
                                        <EmployeeCard
                                            image={Employees[4].image}
                                            id={Employees[4].id}
                                            firstName={Employees[4].firstName}
                                            lastName={Employees[4].lastName}
                                            department={Employees[4].department}
                                            active={Employees[4].active}
                                        />
                                </Col>
                                <Col size="md-12">
                                        <EmployeeCard
                                            image={Employees[5].image}
                                            id={Employees[5].id}
                                            firstName={Employees[5].firstName}
                                            lastName={Employees[5].lastName}
                                            department={Employees[5].department}
                                            active={Employees[5].active}
                                        />
                                </Col>
                                <Col size="md-12">
                                        <EmployeeCard
                                            image={Employees[6].image}
                                            id={Employees[6].id}
                                            firstName={Employees[6].firstName}
                                            lastName={Employees[6].lastName}
                                            department={Employees[6].department}
                                            active={Employees[6].active}
                                        />
                                </Col>
                                <Col size="md-12">
                                        <EmployeeCard
                                            image={Employees[7].image}
                                            id={Employees[7].id}
                                            firstName={Employees[7].firstName}
                                            lastName={Employees[7].lastName}
                                            department={Employees[7].department}
                                            active={Employees[7].active}
                                        />
                                </Col>
                                <Col size="md-12">
                                        <EmployeeCard
                                            image={Employees[8].image}
                                            id={Employees[8].id}
                                            firstName={Employees[8].firstName}
                                            lastName={Employees[8].lastName}
                                            department={Employees[8].department}
                                            active={Employees[8].active}
                                        />
                                </Col>
                                <Col size="md-12">
                                        <EmployeeCard
                                            image={Employees[9].image}
                                            id={Employees[9].id}
                                            firstName={Employees[9].firstName}
                                            lastName={Employees[9].lastName}
                                            department={Employees[9].department}
                                            active={Employees[9].active}
                                        />
                                </Col>
                            </Row>
                </Container>
        </div>
    )
}

export default Home;