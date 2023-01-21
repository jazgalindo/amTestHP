import React from 'react'
import DataLabel from './DataLabel'

const CharacterInformation = ({
  dateOfBirth,
  gender,
  eyeColour,
  hairColour,
}) => {
  
  
   

  return (
    <div>
      <DataLabel data='Cumpleaños' content={dateOfBirth} />
      <DataLabel data='Género' content={gender} />
      <DataLabel data='Color de ojos' content={eyeColour} />
      <DataLabel data='Color de cabello' content={hairColour} />
    </div>
  )
}
export default CharacterInformation
