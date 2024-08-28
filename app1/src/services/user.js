import axios from 'axios'
import config from '../config'

export async function register(firstName, email, phone, password) {
  // body parameters
  const body = {
    "full_name":firstName,
    email,
    "phone_no":phone,
    password, 
  }

  // make API call
  const response = await axios.post(`${config.url}/user/register`, body)

  // read JSON data (response)
  return response.data
}

export async function login(email, password) {
  // body parameters
  const body = {
    email,
    password,
  }

  // make API call
  const response = await axios.post(`${config.url}/user/login`, body)

  // read JSON data (response)
  return response.data
}
