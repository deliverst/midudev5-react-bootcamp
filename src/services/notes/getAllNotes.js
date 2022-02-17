import axios from 'axios'

const getAllNotes = () => {
    return axios
        .get('http://localhost:3001/api/notes')
        .then(response => {
            const {data} = response
            return data
        })
}

export default getAllNotes()


// .get('https://jsonplaceholder.typicode.com/posts')