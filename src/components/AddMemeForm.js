import React, {useState} from 'react'
import memesService from '../services/memes'

const AddMemeForm = ({memes, setMemes}) => {

    const [username, setUserName] = useState('')
    const [caption, setCaption] = useState('')
    const [memeURL, setMemeURL] = useState('')
 
    const handleNameChange = (event) => {
        // console.log(event.target.value)
        setUserName(event.target.value)
    }

    const handleCaptionChange = (event) => {
        // console.log(event.target.value)
        setCaption(event.target.value)
    }

    const handleMemeURLChange = (event) => {
        setMemeURL(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        // console.log(event.target.value)
        let newMeme = {name: username, url: memeURL, caption: caption}
        
        memesService.addMeme(newMeme)
            .then((responseMeme) => {
                console.log(responseMeme)
                let tempNewMeme = {...newMeme, id: responseMeme.id}
                // console.log(tempNewMeme)
                setMemes([tempNewMeme].concat(memes))
                console.log('It is added')
                setUserName('')
                setCaption('')
                setMemeURL('')
            })
    }

    return (
        <div className = 'form-container'>
            <h3>Add your meme</h3>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='meme-name'>Name</label>
                <input name='meme-name' type='text' value={username} placeholder='Enter your full name' onChange={handleNameChange} autoFocus required></input>
                <label htmlFor='meme-caption'>Caption</label>
                <input name='meme-caption' type='text' value={caption} placeholder='Enter the meme caption' onChange={handleCaptionChange} required></input>
                <label htmlFor='meme-name'>Meme URL</label>
                <input name='meme-url' type='url' value={memeURL} placeholder='Enter the meme url' onChange={handleMemeURLChange} required></input>
                <input type='submit' value='Add' className='add-btn'></input>
            </form>
        </div>
    )
}

export default AddMemeForm;