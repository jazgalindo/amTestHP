import { useDispatch, useSelector } from 'react-redux'
import MenuItemIconAction from './MenuItemIconAction'
import { setFavorite } from '../slices/dataSlice'
import iconTrash from '../assets/icons/trash.svg'

const MenuFavoriteList = () => {
  const favorites = useSelector((state) => state.data.favorites)
  const dispatch = useDispatch()

  const onClickDeleteFavorite = (name) => {
    dispatch(setFavorite({ name }))
  }

  return (
    <ul className='menu__option_list'>
      {favorites &&
        favorites.map((character) => {
          return (
            <MenuItemIconAction
              key={`MenuItemIconAction-${character.name}`}
              label={character.name}
              image={character.image}
              onClickAction={() => onClickDeleteFavorite(character.name)}
              iconAction={iconTrash}
            />
          )
        })}
    </ul>
  )
}

export default MenuFavoriteList
