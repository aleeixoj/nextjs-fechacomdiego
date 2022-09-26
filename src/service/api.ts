/* eslint-disable dot-notation */
import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: process.env.URL_API,
});


export { api };