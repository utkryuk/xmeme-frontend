import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Meme = ({meme}) => {
    return (
        <div className='meme-item'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={meme.url} />
            <Card.Body>
                <Card.Title>By {meme.name}</Card.Title>
                <Card.Text>{meme.caption}</Card.Text>
                <Button variant="primary">Get This meme</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Meme;