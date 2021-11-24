import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import './GameDetails.css';

const GameDetails = (props) => {
    const [selectedGame, setSelectedGame] = useState({});
    let params = useParams();
    const gameId = params.id;

    useEffect(() =>{
        axios.get(`https://apis.wilders.dev/wild-games/games/${gameId}`)
        .then(response => setSelectedGame(response.data))
    }, [])

    const {name, released, background_image, short_screenshots, rating} = selectedGame;

    console.log(selectedGame);
    console.log(short_screenshots);

    return (
        <>
            <Header name={name}/>
            <main className="game-details">
                <h2>{name}</h2>
                <p>{name} was released in {released}.</p>
                <p>It was rated {rating}/5 by the public.</p>

                {rating > 4.5 ? 
                (<p>Is is one of our best games!</p>) : 
                (<p>While good, it isn't one of our best game</p>)
                }

                <h3>Screenshots:</h3>

                { short_screenshots.map(shot => {
                    return (
                        <img src={shot.image} alt={`image of game numer ${shot.id}`} className="game-screenshot" />
                    )
                })}
            </main>

        </>
    )
}

export default GameDetails
