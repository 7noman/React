import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:5000/api"
});

export const getEmp = ()=> API.get("/students");

export const addEmp = (employee)=> API.post("/students",employee);