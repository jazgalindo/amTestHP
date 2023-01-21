import CharacterDetails from './CharacterDetails'
import CharacterInformation from './CharacterInformation'

const CharacterCard = ({
  name,
  alive,
  image,
  student,
  dateOfBirth,
  gender,
  eyeColour,
  hairColour,
}) => {
  return (
    <div className='card'>
      <figure className='card__photo card__photo--Gryffindor'>
        <img className='card__photo__image' src={image} alt='Icono favorito' />
      </figure>
      <div className='card__body'>
        <div className='show-only-desktop'>
          <CharacterDetails cla alive={alive} student={student} />
        </div>
        <p className='card__name'>{name}</p>
        <div className='show-only-mobile'>
          <CharacterDetails cla alive={alive} student={student} />
        </div>
        <div className='show-only-desktop'>
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
