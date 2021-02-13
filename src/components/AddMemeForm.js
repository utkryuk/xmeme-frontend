import React from 'react'
import {Button} from 'react-bootstrap'

const AddMemeForm = () => {

    return (
        <div className = 'form-container'>
            <h3>Add your meme</h3>
            <form>
                <label htmlFor='meme-name'>Name</label>
                <input name='meme-name' type='text' placeholder='Enter your full name' autoFocus required></input>
                <label htmlFor='meme-caption'>Caption</label>
                <input name='meme-caption' type='text' placeholder='Enter the meme caption' required></input>
                <label htmlFor='meme-name'>Meme URL</label>
                <input name='meme-url' type='url' placeholder='Enter the meme url' required></input>
                <Button variant='success' active='false' className='add-btn' block>Add</Button>
                {/* <input type='submit' value='Add'></input> */}
            </form>
        </div>
    )
}

export default AddMemeForm;