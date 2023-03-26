import { useContext, useEffect, useState } from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext'
import EditEmployee from './EditEmployee'
import { Button, Modal } from "react-bootstrap"


const Employee = ({ employee }) => {
    const { delEmp } = useContext(EmployeeContext)
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }
    useEffect(()=>{
        handleClose()
    }, [employee])

    return (
        <>
            <td>{employee.Name}</td>
            <td>{employee.Location}</td>
            <td>{employee.Salary}</td>
            <td>{employee.Department}</td>
            <td> {
                    employee.PhotoFileName !== '' ? <img src={employee.PhotoFileName} width="70"></img> : 'No image'
                }
                
            </td>
            <td>
                <button onClick={handleShow} className='btn text-warning btn-sm edit' data-toggle='modal'>
                    <i className="material-icons" data-toggle='tooltip' title="Edit">&#xE254;</i>
                </button>
                <button onClick={() => delEmp(employee.Id)} className='btn btn-sm text-danger delete' data-toggle='modal'>
                    <i className="material-icons" data-toggle='tooltip' title="Delete">&#xE872;</i>
                </button>
            </td>

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

export default Employee