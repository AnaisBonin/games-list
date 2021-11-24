import React from 'react'
import "./Game.css"

const Game = ({name, image, rating}) => {

    console.log("image")
    console.log(image)

    return (
        <div className="game-card">
            <h2>{name}</h2>
            <img src={image} alt={`Image of ${name}`}/>
            <p>Rating: {rating}/5</p>
        </div>
    )
}

export default Game
