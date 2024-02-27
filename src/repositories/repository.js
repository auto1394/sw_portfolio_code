import axios from 'axios'

const baseURL = process.env.VUE_APP_API_DOMAIN

const api = axios.create({
  baseURL: baseURL,
  headers: {'x-api-key' : process.env.VUE_APP_API_KEY},
})

api.interceptors.request.use(response => {
  return response
}, error => {
  console.log(error)
  return Promise.reject(error)
})

export default api
