import CharacterCard from './CharacterCard'

const CharactersList = ({ characters }) => {
  return (
    <div className='characters-list'>
      {characters &&
        characters.map((character) => {
          return (
            <CharacterCard
              key={character.name}
              name={character.name}
              house={character.house}
              alive={character.alive}
              image={character.image}
              hogwartsStudent={character.hogwartsStudent}
              hogwartsStaff={character.hogwartsStaff}
              dateOfBirth={character.dateOfBirth}
              gender={character.gender}
              eyeColour={character.eyeColour}
              hairColour={character.hairColour}
            />
          )
        })}
    </div>
  )
}

export default CharactersList
