import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Game from './Game';
import "./GameList.css"

const GameList = () => {
    const [gameList, setGameList] = useState([]);
    const [showBestGames, setShowBestGames] = useState(false);

    useEffect(() =>{
        getAllGames();
    }, [])

    const getAllGames = () => {
        axios.get('https://apis.wilders.dev/wild-games/games')
        .then(response => response.data)
        .then(data => setGameList(data))
    }

    const filterGames = () => {if (showBestGames === false){
            setShowBestGames(true)
            setGameList(gameList.filter(game => game.rating >= 4.5))
        }else{
            setShowBestGames(false)
            getAllGames();
        }};
    


    return (
        <div className="game-list">
            <button type="button" className="button-filter-games" onClick={filterGames}> 
            {!showBestGames ? "Best Games ( > 4.5/5)" : "All Games"}
            </button>
            <div className="game-cards-container">
            {gameList.map(game => {
                console.log(game.background_image)
                return (
                    <Game key={game.id} name={game.name} image={game.background_image} rating={game.rating}/>
                )
            })}
            </div>

            
        </div>
    )
}

export default GameList
