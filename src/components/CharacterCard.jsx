import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { setFavorite } from '../slices/dataSlice'
import { MAX_FAVORITES } from '../utils/constans'
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
  favorite,
}) => {
  const nameLabel = `${!alive ? '+ ' : ''}${name}`
  const favorites = useSelector((state) => state.data.favorites)
  const dispatch = useDispatch()
  const alert = useAlert()

  const handleClickFavorite = () => {
    const currentExistInFavorites = favorites.find(
      (character) => character.name === name
    )
    if (favorites.length === MAX_FAVORITES && !currentExistInFavorites) {
      alert.error(
        'Ups, no puedes agregar mas favoritos. Elimina uno para liberar espacio.'
      )
    } else {
      dispatch(setFavorite({ name }))
    }
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
