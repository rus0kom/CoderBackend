import axios from "axios";

const API = 'http://localhost:8080/users';

export const registerRequest = users => axios.post(`${API}/register`, users);