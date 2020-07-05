import axios from 'axios'

const token = 'megahack3'

const client = axios.create({
  baseURL: 'https://megahack3-backend.herokuapp.com/',
  headers: {
    Authorization: `bearer ${token}`
  }
})

export default client
