import React from 'react'
import {Link} from 'react-router-dom'
import "./Game.css"

const Game = ({id, name, image, rating}) => {

    console.log("image")
    console.log(image)

    return (
        <div className="game-card">
            <h2>{name}</h2>
            <img src={image} alt={`${name}, ${id}`}/>
            <p>Rating: {rating}/5</p>
            <Link to={`/games/${id}`}>Details</Link>
        </div>
    )
}

export default Game
