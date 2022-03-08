import axios from 'axios'

const baseURL = 'http://localhost:3001/login'

const login = async credential => {
    const {data} = await axios.post(baseURL, credential)
    console.log('hey pana' + data.token)
    return data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {login}