import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { EmployeeContext } from '../contexts/EmployeeContext'

const EditEmployee = ({emp}) => {
    const { updateEmp } = useContext(EmployeeContext);
    const [employee, setEmployee] = useState(emp);
    const onInputChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmp(employee.Id, employee)
    }

    
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control className="mb-3" type='text'
                        placeholder='Name *' required name="Name" value={employee.Name || ''}
                        onChange={(e) => onInputChange(e)} />
                </Form.Group>
                <Form.Group>
                    <Form.Control className="mb-3" type='text'
                        placeholder='Location *' required name='Location' value={employee.Location || ''}
                        onChange={(e) => onInputChange(e)} />
                </Form.Group>
                <Form.Group>
                    <Form.Control className="mb-3" as='textarea'
                        placeholder='Department' rows={3} name='Department' value={employee.Department || ''}
                        onChange={(e) => onInputChange(e)} />
                </Form.Group>
                <Form.Group>
                    <Form.Control className="mb-3" type='text'
                        placeholder='Salary' name='Salary' value={employee.Salary || ''}
                        onChange={(e) => onInputChange(e)} />
                </Form.Group>
                <Button variant='success' type='submit' block='true'>
                    Update Employee
                </Button>
            </Form>
        </>
    )
}

export default EditEmployee