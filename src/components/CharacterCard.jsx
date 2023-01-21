import CharacterDetails from './CharacterDetails'
import CharacterInformation from './CharacterInformation'

const CharacterCard = ({
  name,
  house,
  alive,
  image,
  hogwartsStudent,
  hogwartsStaff,
  dateOfBirth,
  gender,
  eyeColour,
  hairColour,
}) => {

  const characterDetails = (
    <CharacterDetails
      alive={alive}
      hogwartsStudent={hogwartsStudent}
      hogwartsStaff={hogwartsStaff}
    />
  )
  const nameLabel = <p className='card__name'>{`${!alive ? '+ ' : ''}${name}`}</p>
  

  return (
    <div className={`card  card--${alive ? 'alive' : 'dead'}`}>
      <figure className={`card__photo card__photo--${house}`}>
        <img className='card__photo__image' src={image} alt='Icono favorito' />
      </figure>
      <div className='show-only-mobile'>{nameLabel}</div>
      <div className='card__body'>
        <div className='show-only-mobile'>{characterDetails}</div>
        <div className='show-only-desktop'>
          {characterDetails}
          {nameLabel}
          <CharacterInformation
            dateOfBirth={dateOfBirth}
            gender={gender}
            eyeColour={eyeColour}
            hairColour={hairColour}
          />
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
