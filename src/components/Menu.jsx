import assets from '../assets/assets'
import MenuFavoriteList from '../containers/MenuFavoriteList'

const Menu = () => {
  return (
    <nav className='menu'>
      <ul>
        <li className='menu__option'>
          Favoritos
          <img
            className='icon'
            src={assets.icons.favorite}
            alt='Favorite icon'
          />
          <MenuFavoriteList />
        </li>

        <li className='menu__button'>
          Agregar{' '}
          <img
            className='icon'
            src={assets.icons.peopleAdd}
            alt='People add icon'
          />
        </li>
      </ul>
    </nav>
  )
}

export default Menu
