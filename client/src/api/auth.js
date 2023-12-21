import axios from "./axios.js";

export const registerRequest = user => axios.post(`users/register`, user);

export const loginRequest = user => axios.post(`users/login`, user);

export const verityTokenRequest = () => axios.get('users/verify')
