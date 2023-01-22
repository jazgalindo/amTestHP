import { Fragment, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import CharactersList from '../components/CharactersList'
import assets from '../assets/assets'
import Loader from '../components/Loader'
import { fetchCharacters, fetchCharacterTypes } from '../slices/dataSlice'

function HomePage() {
  const dispatch = useDispatch()
  const characters = useSelector((state) => state.data.characters, shallowEqual)
  const loading = useSelector((state) => state.ui.loading)
  const filters = useSelector(
    (state) => state.data.characterTypes,
    shallowEqual
  )
  const [currentFilter, setCurrentFilter] = useState('')

  useEffect(() => {
    dispatch(fetchCharacters())
    dispatch(fetchCharacterTypes())
  }, [])

  const handleClickButtonFilter = (filter) => {
    setCurrentFilter((currentFilter) => {
      if (currentFilter === filter) {
        dispatch(fetchCharacters())
        setCurrentFilter('')
      } else {
        dispatch(fetchCharacters(filter))
        setCurrentFilter(filter)
      }
    })
  }

  return (
    <Fragment>
      <header></header>
      <main>
        <img className='logo' src={assets.icons.logo} alt='Harry potter logo' />
        <div className='filters'>
          <p className='filters__title'>Selecciona tu filtro</p>
          <div className='filters__actions'>
            {filters &&
              filters.map((filter) => (
                <button
                  key={filter.key}
                  className={`button ${
                    currentFilter === filter.key ? 'button--active' : ''
                  }`}
                  onClick={() => handleClickButtonFilter(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
          </div>
        </div>
        <div>
          {loading ? (
            <Loader show={true} />
          ) : (
            <CharactersList characters={characters} />
          )}
        </div>
      </main>
    </Fragment>
  )
}

export default HomePage
