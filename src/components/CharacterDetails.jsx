import React from 'react'
import FavoriteIcon from './FavoriteIcon'

const CharacterDetails = ({ alive, student }) => {
  return (
    <div className='character-details'>
      <section className='character-details__data'>
        <p>{alive ? 'VIVO ' : 'MUERTO '}</p>
        <p className='character-details__data--separator'> / </p>
        <p>{student ? ' ESTUDIANTE' : ''}</p>
      </section>
      <button type='submit' className='character-details__fav'>
      <FavoriteIcon />
      </button>
    </div>
  )
}
export default CharacterDetails
