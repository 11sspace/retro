import React from "react";

import {GAME_STATE_PLAYING} from "../constants.js"
const Footer=({onNewGameClick,onSuggestClick,gameState})=>{
    const renderButtons=()=>{
        if (gameState===GAME_STATE_PLAYING){
            return <button onClick={onSuggestClick}>Suggestions</button>
        }
        return<button onClick={onNewGameClick}>New Game</button>
    }
   
    return(
        
    <div className="panel footer"> 
    {renderButtons()}
    {/* {gameState===GAME_STATE_PLAYING&&
 
    <button onClick={onSuggestClick}>Suggestions</button>
    } */}
    {/* {gameState!==GAME_STATE_PLAYING&&
   <button onClick={onNewGameClick}>New Game</button>
    
    } */}
    
    </div>)
}
export default Footer