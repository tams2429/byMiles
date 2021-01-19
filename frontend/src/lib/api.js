import axios from 'axios'


const withLoginHeaders = () => {
  return {
    headers: { environment: 'mock' },
  }
}

export const login = formData => {
  return axios.post('https://api.bybits.co.uk/auth/token', formData, withLoginHeaders())
}

