import axios from 'axios'

const baseUrl = 'http://xmeme-utkarsh.herokuapp.com/memes'

const getAll = () => {
    
    const req = axios.get(baseUrl)

    return req.then((response) => {
        return response.data
    })
}


const addMeme = (newMeme) => {

    const req = axios.post(baseUrl, newMeme)

    return req.then((response) => {
        return response.data
    })
}

export default {getAll, addMeme};