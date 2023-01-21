import React from 'react'
import FavoriteIcon from './FavoriteIcon'

const CharacterDetails = ({ alive, hogwartsStudent,hogwartsStaff }) => {
  return (
    <div className='character-details'>
      <section className='character-details__data'>
        <p>{alive ? 'VIVO ' : 'MUERTO '}</p>
        {hogwartsStudent || hogwartsStaff ? <p className='character-details__data--separator'> / </p> :''}
        <p>{hogwartsStudent ? 'ESTUDIANTE' : ''}</p>
        <p>{hogwartsStaff ? 'STAFF' : ''}</p>
      </section>
      <button type='submit' className='character-details__fav'>
      <FavoriteIcon />
      </button>
    </div>
  )
}
export default CharacterDetails
