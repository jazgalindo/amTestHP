import Avatar from './Avatar'

const MenuItemIconAction = ({ image, label, iconAction, onClickAction }) => {
  return (
    <li className='display'>
      <div className='menu__item'>
        <p className='menu__item__label'>
          <Avatar src={image} />
          {label}
        </p>
        <button className='icon-button' onClick={onClickAction}>
          <img src={iconAction} />
        </button>
      </div>
    </li>
  )
}

export default MenuItemIconAction
