/* eslint-disable dot-notation */
import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API,
});


export { api };