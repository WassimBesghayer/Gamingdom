import React from 'react'





function GameCard({game}) {
  console.log(game)
  return (
    <div className='carteJeux'>
        <img src={game.coverUrl} style={{minWidth:"250px", maxWidth:"250px", minHeight:"250px", maxHeight:"250px"}}/>
        <h5>{game.name}</h5>
        <p>{game.description}</p>
    </div>
  )
}

export default GameCard