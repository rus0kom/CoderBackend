import axios from "axios";

const API = 'http://localhost:8080/users';

export const registerRequest = user => axios.post(`${API}/register`, user);

export const loginRequest = user => axios.post(`${API}/login`, user);