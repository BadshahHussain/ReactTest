import { useContext, useEffect, useState } from "react"
import { Alert, Button, Modal, Pagination } from "react-bootstrap"
import { EmployeeContext } from "../contexts/EmployeeContext"
import AddEmployee from "./AddEmployee"
import Employee from "./Employee"

const EmployeeList = () => {
    //curly braces here means destructuring an array 
    const { employees } = useContext(EmployeeContext)
    const [showAlert, setShowAlert] = useState(false);
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false)
        }, 2000)
    }
    useEffect(()=>{
        handleClose()
        return (()=> {
            handleShowAlert()
        })
    }, [employees])

    return (
        <>
            <div className="card card-success">
                <div className="card-header">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Manage <b>Employees</b></h2>
                        </div>
                        <div className="col-sm-6">
                            <Button onClick={handleShow} className="btn btn-success float-end" data-toggle="modal">
                                <i className="fa fa-plus"></i> Add New
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row p-3">
                        <Alert show={showAlert} variant="success" onClose={()=>setShowAlert(false)} dismissible>
                            Employee list updated successfully.
                        </Alert>
                        <table className="table table-sm table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Location</th>
                                    <th>Salary</th>
                                    <th>Department</th>
                                    <th>Photo</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {   //Ascending (-1, 1), Descending (1,-1)
                                    employees.sort((a,b)=>(a.Name<b.Name? 1 : -1)).map(
                                    (employee) => (
                                        <tr key={employee.Id}>
                                            <Employee employee={employee} />
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                        <Pagination></Pagination>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddEmployee></AddEmployee>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default EmployeeList