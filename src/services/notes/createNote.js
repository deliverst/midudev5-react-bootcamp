import axios from 'axios'

// eslint-disable-next-line no-unused-vars
let token = null

const setToken = (newToken) => {
    token = `Bearer ${newToken}`
}

const baseURL = 'http://localhost:3001/api/notes'

const createNote = (newObject) => {
    const config = {
        headers: {
            Authorization: token
        }
    }

    const req = axios.post(baseURL, newObject, config)
    console.log('POST ALV')
    return req.then(res => res.data)

}

// eslint-disable-next-line import/no-anonymous-default-export
export {createNote, setToken}

// .post('https://jsonplaceholder.typicode.com/posts', {title ,body ,userId})