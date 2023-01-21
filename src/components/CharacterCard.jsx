import { useDispatch } from 'react-redux'
import { setFavorite } from '../actions'
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
  favorite
}) => {
  const nameLabel = `${!alive ? '+ ' : ''}${name}`
  const dispatch = useDispatch();

  const handleClickFavorite = ()=>{
    dispatch(setFavorite({name}))
  }

  return (
    <div className={`card  card--${alive ? 'alive' : 'dead'}`}>
      <figure className={`card__photo card__photo--${house}`}>
        <img className='card__photo__image' src={image} alt='Icono favorito' />
      </figure>
      <div className='show-only-mobile'>
        <p className='card__name'>{nameLabel}</p>
      </div>
      <div className='card__body'>
        <div className='show-only-mobile'>
          <CharacterDetails
            alive={alive}
            hogwartsStudent={hogwartsStudent}
            hogwartsStaff={hogwartsStaff}
            handleClickFavorite={handleClickFavorite}
            favorite={favorite}
          />
        </div>
        <div className='show-only-desktop'>
          <CharacterDetails
            alive={alive}
            hogwartsStudent={hogwartsStudent}
            hogwartsStaff={hogwartsStaff}
            handleClickFavorite={handleClickFavorite}
            favorite={favorite}
          />
          <p className='card__name'>{nameLabel}</p>{' '}
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
