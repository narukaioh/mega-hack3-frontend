import axios from 'axios'

const token = 'cfc2020'
const baseURLlocal = 'http://localhost:8000/'
const baseURL = 'https://call-for-code-backend.herokuapp.com/'

const client = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `bearer ${token}`
  }
})

export const get = (endpoint) => client(endpoint).then(res => res.data)

export default client
