import { Fragment, useEffect } from 'react'
import { getCharacters } from './api/harryPotterApi'
import './App.scss'
import CharactersList from './components/CharactersList'
import {setCharacters, setLoading} from './actions'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const characters = useSelector(state => state.characters);
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCharacters = async () => {
      dispatch(setLoading(true))
      const charactersResponse = await getCharacters()
      dispatch(setCharacters(charactersResponse));
      dispatch(setLoading(false))
    }
    fetchCharacters()
  }, [])

  return (
    <Fragment>
      <header></header>
      <main>
        <section></section>
        <section>
          {loading ? <h1>Cargando</h1> : <CharactersList characters={characters} /> }
        </section>
      </main>
    </Fragment>
  )
}



export default App
