import axios from 'axios'

const token = 'megahack3'
const baseURLlocal = 'http://localhost:8000/'
const baseURL = 'https://megahack3-backend.herokuapp.com/'

const client = axios.create({
  baseURL: baseURLlocal,
  headers: {
    Authorization: `bearer ${token}`
  }
})

export default client
