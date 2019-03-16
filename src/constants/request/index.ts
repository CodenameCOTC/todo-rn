import axios from 'axios'

const request = axios.create({
  baseURL: 'https://todoapp22.azurewebsites.net/',
})

export default request
