import FavoriteIcon from "./FavoriteIcon"

const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <button
      type='submit'
      onClick={onClick}
      className={`favorite ${isFavorite ? 'favorite--true' : ''}`}
    >
      <FavoriteIcon />
    </button>
  )
}

export default FavoriteButton
