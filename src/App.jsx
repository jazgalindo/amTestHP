import { Fragment } from 'react'
import './App.scss'
import CharacterCard from './components/CharacterCard'

function App() {
  return (
    <Fragment>
      <header></header>
      <main>
        <section></section>
        <section>
          <CharacterCard
            name='Jazmin Galindo'
            alive={true}
            image='http://hp-api.herokuapp.com/images/harry.jpg'
            student={true}
            dateOfBirth={"31-07-1980"}
            gender={"male"}
            eyeColour={"green"}
            hairColour={"black"}
          />
        </section>
      </main>
    </Fragment>
  )
}

export default App
