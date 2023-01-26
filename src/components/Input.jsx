import LabelForm from './LabelForm'

const Input = ({ name, label, onChange, value, type }) => {
  return (
    <div className='input'>
      <LabelForm label={label} />
      <input
        className='input__box'
        type={type || 'text'}
        name={name}
        value={value}
        onChange={onChange}
        required
      ></input>
    </div>
  )
}

export default Input
