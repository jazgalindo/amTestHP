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
  const details = (
    <CharacterDetails
      alive={alive}
      hogwartsStudent={hogwartsStudent}
      hogwartsStaff={hogwartsStaff}
    />
  )

  return (
    <div className='card'>
      <figure className={`card__photo card__photo--${house}`}>
        <img className='card__photo__image' src={image} alt='Icono favorito' />
      </figure>
      <div className='show-only-mobile'>
        <p className='card__name'>{name}</p>
      </div>
      <div className='card__body'>
        <div className='show-only-mobile'>{details}</div>
        <div className='show-only-desktop'>
          {details}
          <p className='card__name'>{name}</p>
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
