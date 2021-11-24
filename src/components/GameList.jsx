import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Game from './Game';

const GameList = () => {
    const [gameList, setGameList] = useState([]);

    useEffect(() =>{
        axios.get('https://apis.wilders.dev/wild-games/games')
        .then(response => response.data)
        .then(data => setGameList(data))
    }, [])

    console.log(gameList);

    return (
        <div>
            {gameList.map(game => {
                console.log(game.background_image)
                return (
                    <Game key={game.id} name={game.name} image={game.background_image} rating={game.rating}/>
                )
            })}

            
        </div>
    )
}

export default GameList
