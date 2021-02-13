import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import AddMemeForm from './AddMemeForm'

const AddMemeButton = () => {
    
    const [addMemeToggle, setAddMemeToggle] = useState(false)

    const addMemeForm = (event) => {
        event.preventDefault()
        console.log('hello from console')
        setAddMemeToggle((addMemeToggle) ? false: true)
    }

    if (addMemeToggle) {
        return (
            <div>
            <Button variant='danger' onClick={addMemeForm}>Close Form</Button>
            <AddMemeForm />
            </div>
        )
    }

    else {
        return (
            <div>
            <Button variant='danger' onClick={addMemeForm}>Add Meme</Button>
            </div>
        )
    }
}

export default AddMemeButton;