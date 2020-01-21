import React, { useState } from 'react';
import EmployeeCard from "../Card";
import Employees from "../../Employees.json";
import Row from "../Row";
import Col from "../Col";

function EmployeeList() {

return (

Employees.map(employee => (

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
)) )                                    
 };

export default EmployeeList;