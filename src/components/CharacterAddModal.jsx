import { useEffect, useId } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postCharacter } from '../api/harryPotterApi'
import { setCharacter } from '../slices/dataSlice'
import Input from './Input'
import LabelForm from './LabelForm'
import Modal from './Modal'
import Radio from './Radio'

const CharacterAddModal = ({ showModal, closeModal }) => {
  const dispatch = useDispatch()
  const character = useSelector((state) => state.data.character)

  useEffect(() => {}, [])

  const handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    dispatch(setCharacter({ name, value }))
  }

  const onImageChange = (event) => {
    const objectFile = event.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      const documentContent = e.target.result
      dispatch(setCharacter({ name: 'image', value: documentContent }))
    }
    reader.readAsBinaryString(objectFile)
  }

  const handleClickSave = (event) => {
    event.stopPropagation()
    dispatch(postCharacter({ ...character, id: Math.random() }))
  }

  return (
    <>
      <Modal
        showModal={showModal}
        onClickClose={closeModal}
        title='Agregar un personaje'
      >
        <form onSubmit={handleClickSave}>
          <div className='row'>
            <Input
              label='Nombre:'
              name='name'
              onChange={handleInputChange}
              value={character.name}
            />
            <Input
              label='Cumpleaños:'
              type='date'
              name='dateOfBirth'
              onChange={handleInputChange}
              value={character.dateOfBirth}
            />
          </div>
          <div className='row'>
            <Input
              label='Color de ojos:'
              onChange={handleInputChange}
              value={character.eyeColour}
              name='eyeColour'
            />
            <Input
              label='Color de pelo:'
              onChange={handleInputChange}
              value={character.hairColour}
              name='hairColour'
            />
          </div>
          <div className='row'>
            <div className='col'>
              <LabelForm label='genero' />
              <div className='row'>
                <Radio
                  name='gender'
                  onChange={handleInputChange}
                  value='female'
                  label='Mujer'
                />
                <Radio
                  name='gender'
                  onChange={handleInputChange}
                  value='male'
                  label='Hombre'
                />
              </div>
            </div>
            <div className='col'>
              <LabelForm label='Posición' />
              <div className='row'>
                <Radio
                  name='position'
                  onChange={handleInputChange}
                  value='student'
                  label='Estudiante'
                />
                <Radio
                  name='position'
                  onChange={handleInputChange}
                  value='staff'
                  label='Staff'
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <LabelForm label='fotografía' />
              <input
                type='file'
                accept='image/*'
                onChange={onImageChange}
                name='image'
              ></input>
            </div>
          </div>
          <div className='row'>
            <button type='submit' className='button'>
              Guardar
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}
export default CharacterAddModal
