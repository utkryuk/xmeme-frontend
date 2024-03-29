import axios from 'axios'

const baseUrl = 'https://xmeme-utkarsh.herokuapp.com/memes'

const getAll = () => {
    
    const req = axios.get(baseUrl)

    return req.then((response) => {
        return response.data
    })
}

const getAMeme = (id) => {

    const req = axios.get(`${baseUrl}/${id}`)

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

export default {getAll, getAMeme, addMeme};