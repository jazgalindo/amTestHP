import { useId } from "react"

const Radio = ({ name, label, onChange, value }) => {
  const id = useId()
  return (
    <div className='radio'>
      <input type='radio' id={id} name={name} value={value} onChange={onChange} required/> 
      <label htmlFor={id} className='radio__label'>
        {label}
      </label>
    </div>
  )
}

export default Radio
