const Avatar = ({ src }) => {
  return (
    <figure className='avatar'>
      <img className='avatar__image' src={src} />
    </figure>
  )
}

export default Avatar;