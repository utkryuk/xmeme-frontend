import React, {useState, useEffect} from 'react'
import memeService from '../services/memes'
import Memes from './Memes'

const Main = () => {

    const [memes, setMemes] = useState([])

    const memeHook = () => {
        memeService.getAll()
            .then(allMemes => {
                setMemes(allMemes)
            })
    }

    useEffect(memeHook, [])

    return (
        <section>
            <Memes memes = {memes} />
        </section>
    )
}

export default Main;