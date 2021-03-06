import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import './GameDetails.css';

const GameDetails = (props) => {
    const [selectedGame, setSelectedGame] = useState({});
    let params = useParams();
    const gameId = params.id;

    //Using .env to call API so if we change the API URL we only have to change it in the .env file

    console.log(process.env.REACT_APP_API_URL);

    useEffect(() =>{
        axios.get(`${process.env.REACT_APP_API_URL}${gameId}`)
        .then(response => setSelectedGame(response.data))
    }, [gameId])

    const {name, released, background_image, short_screenshots, rating} = selectedGame;


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
                <div className="screenshots-countainer">
                    {console.log(short_screenshots)}
                {short_screenshots && short_screenshots.map((shot, index) => <img src={shot.image} className="game-screenshot" key={index}/>)
                }
                </div>
            </main>

        </>
    )
}

export default GameDetails
