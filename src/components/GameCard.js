import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGame } from '../redux/gameslice'


function GameCard({game}) {
  console.log(game)
  const dispatch=useDispatch()
  return (
    <div className='carteJeux'>
        <img src={game.coverUrl} style={{minWidth:"250px", maxWidth:"250px", minHeight:"250px", maxHeight:"250px"}}/>
        <h5>{game.name}</h5>
        <p>{game.description}</p>
        <button onClick={()=>dispatch(deleteGame({name:game.name}))}>X</button>
    </div>
  )
}

export default GameCard