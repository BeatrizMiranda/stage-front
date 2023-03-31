import axios, { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost/'
}

const _axios = axios.create(config)

export default _axios
