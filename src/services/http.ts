import axios from 'axios'

const timeout = 30000
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}


export const lmsService = axios.create({
    baseURL: '/api',
    withCredentials: true,
    timeout,
    headers

})
