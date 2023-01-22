import React from 'react'
import FavoriteButton from './FavoriteButton'

const CharacterDetails = ({ alive, hogwartsStudent,hogwartsStaff,handleClickFavorite,favorite }) => {
  return (
    <div className='character-details'>
      <section className='character-details__data'>
        <p>{alive ? 'VIVO ' : 'MUERTO '}</p>
        {hogwartsStudent || hogwartsStaff ? <p className='character-details__data--separator'> / </p> :''}
        <p>{hogwartsStudent ? 'ESTUDIANTE' : ''}</p>
        <p>{hogwartsStaff ? 'STAFF' : ''}</p>
      </section>
      <FavoriteButton isFavorite={favorite} onClick={handleClickFavorite}/>
    </div>
  )
}
export default CharacterDetails
