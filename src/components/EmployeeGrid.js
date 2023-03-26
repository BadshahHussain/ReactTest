import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import EmpCard from "./EmployeeCard";

function EmployeesGrid() {
    const { employees } = useContext(EmployeeContext)

    return (
        <Row xs={1} md={4} className="g-4 mt-4 mb-5">
            { 
                employees.map(
                    (employee) => (
                        <Col key={employee.Id}>
                            <EmpCard employee={employee}/>
                        </Col>
                    ))
            }

        </Row>
    );
}

export default EmployeesGrid;