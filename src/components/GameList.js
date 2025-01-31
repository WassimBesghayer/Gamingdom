import React, { useState } from 'react'
import GameCard from './GameCard'
import AddGame from './AddGame'
import { useSelector } from 'react-redux'

function GameList() {
  const games=useSelector((state)=>state.game.GameList)

  return (
  <div>
    <div><AddGame/></div>
    <div className='parent'>
       {games.map((el)=><GameCard game={el}/>)}
    </div>
  </div>
  )
}

export default GameList