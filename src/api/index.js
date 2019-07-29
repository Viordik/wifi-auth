import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:9001',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
