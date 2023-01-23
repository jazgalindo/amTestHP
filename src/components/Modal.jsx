import assets from '../assets/assets'

const Modal = ({ showModal, onClickClose, title, children }) => {
  return (
    <div className={`modal ${showModal ? 'modal--show' : ''}`}>
      <div className='modal__container'>
        <div className='modal__content'>
          <div className='modal__title'>
            <p>{title}</p>
            <button className='modal__close' onClick={onClickClose}>
              <img src={assets.icons.close} />
            </button>
          </div>
          <div className='modal__body'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
