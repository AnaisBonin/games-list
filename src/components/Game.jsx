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
            <p className="game-card-rating">Rating: {rating}/5</p>
            <Link className="game-card-details" to={`/games/${id}`}><p>Details</p></Link>
        </div>
    )
}

export default Game
