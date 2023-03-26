//Handles all HTTP requests so axios is required
import axios from "axios";
const baseUrl = "http://localhost:65472/api/"

export default {
    Employees (url=baseUrl + 'Employee/') {
        return {
            fetchAll: async()=> await axios.get(url),
            fetchById: id => axios.get(url, id),
            create: async (newRecord) => await axios.post(url, newRecord),
            update: async(id, updatedRecord) => await axios.put(url + id, updatedRecord),
            delete: async (id)=> await axios.delete(url + id)
        }
    }
}