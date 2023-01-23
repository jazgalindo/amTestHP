import { useDispatch, useSelector } from 'react-redux'
import assets from '../assets/assets'
import MenuItemIconAction from '../components/MenuItemIconAction'
import { setFavorite } from '../slices/dataSlice'

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
              iconAction={assets.icons.trash}
            />
          )
        })}
    </ul>
  )
}

export default MenuFavoriteList
