import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import api from "../api/api";
export const EmployeeContext = createContext()

const EmployeeContextProvider = (props) => {
    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        api.Employees().fetchAll()
        .then(response => {
            setEmployees(response.data)
        })
        .catch(err => console.log(err))
    }, [])
    
    const addEmp = (emp, onSuccess) => {
        api.Employees().create(emp)
        .then(response => {
            setEmployees([...employees, response.data])
            // onSuccess()
        })
        .catch(err => console.log(err))
    }

    const delEmp = (id) => {
        api.Employees().delete(id)
        .then(response => {
            setEmployees(employees.filter(e=>e.Id !== id))
            // onSuccess()
        })
        .catch(err => console.log(err))
    }
    const updateEmp = (id, updatedEmp) => {
        setEmployees(employees.map(emp=>emp.Id === id ? updatedEmp : emp))
    }

    return (
        //This provider will send the state in its value parameters to its children
        <EmployeeContext.Provider value={{employees, addEmp, delEmp, updateEmp}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;