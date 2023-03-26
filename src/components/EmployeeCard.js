import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext';
import EditEmployee from './EditEmployee';


const EmpCard = ({ employee }) => {
    const { delEmp } = useContext(EmployeeContext)

    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }
    useEffect(() => {
        handleClose()
    }, [employee])

    return (
        <>
            <Card className='shadow'>
                <Card.Img variant="top" src={employee.PhotoFileName} />
                <Card.Body>
                    <Card.Title>{employee.Name}</Card.Title>
                    <Card.Text>
                        <span className="text-muted" style={{fontSize:12}}>
                            {employee.Location} | {employee.Department}<br/>
                            {employee.Salary}
                        </span>
                    </Card.Text>
                    <Card.Text>
                        This is a longer card with supporting text
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button onClick={handleShow} className='btn text-warning edit' data-toggle='modal'>
                        <i className="material-icons" data-toggle='tooltip' title="Edit">&#xE254;</i>
                    </button>
                    <button onClick={() => delEmp(employee.id)} className='btn text-danger delete' data-toggle='modal'>
                        <i className="material-icons" data-toggle='tooltip' title="Delete">&#xE872;</i>
                    </button>
                </Card.Footer>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditEmployee emp={employee}></EditEmployee>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save</Button>

                </Modal.Footer>
            </Modal>
        </>



    )
}

export default EmpCard