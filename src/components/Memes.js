import React from 'react'
import Meme from './Meme'

const Memes = ({memes}) => {

    const printMemes = memes.reverse()

    return (
        <div className='memes-container'>
            {printMemes.map((meme) => {
                return <Meme key={meme.id} meme = {meme} />
            })}
        </div>
    )
} 

export default Memes;