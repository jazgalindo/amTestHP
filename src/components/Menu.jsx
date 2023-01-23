import { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import MenuFavoriteList from '../containers/MenuFavoriteList'
import { clearCharacter } from '../slices/dataSlice'
import CharacterAddModal from './CharacterAddModal'
import iconAddCharacter from '../assets/icons/peopleAdd.svg'
import iconFavorite from '../assets/icons/favorite.svg'


const Menu = () => {
  const [showCharacterAddModal, setShowCharacterAddModal] = useState(false)
  const dispatch = useDispatch()

  const openCharacterAddModal = () => {
    dispatch(clearCharacter())
    setShowCharacterAddModal(true)
  }

  return (
    <Fragment>
      <CharacterAddModal
        showModal={showCharacterAddModal}
        closeModal={() => setShowCharacterAddModal(false)}
      />

      <nav className='menu'>
        <ul>
          <li className='menu__option'>
            Favoritos
            <img
              className='icon'
              src={iconFavorite}
              alt='Favorite icon'
            />
            <MenuFavoriteList />
          </li>

          <li
            className='menu__button'
            onClick={openCharacterAddModal}
          >
            Agregar{' '}
            <img
              className='icon'
              src={iconAddCharacter}
              alt='People add icon'
            />
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default Menu
