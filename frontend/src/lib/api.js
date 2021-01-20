import axios from 'axios'


const withLoginHeaders = () => {
  return {
    headers: { environment: 'mock' },
  }
}

const withInsuranceHeaders = (token) => {
  return {
    headers: { Authorization: `Bearer ${token}` },
  }
}

export const login = formData => {
  return axios.post('https://api.bybits.co.uk/auth/token', formData, withLoginHeaders())
}

export const policy = (token) => {
  return axios.get('https://api.bybits.co.uk/policys/details', withLoginHeaders(), withInsuranceHeaders(token))
}
