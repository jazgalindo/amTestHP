import { Fragment, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import CharactersList from '../components/CharactersList'
import logo from '../assets/icons/logo.svg'
import Loader from '../components/Loader'
import { fetchCharacters, fetchCharacterTypes } from '../slices/dataSlice'
import Menu from '../components/Menu'

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
      <Menu />
      <main>
        <img className='logo' src={logo} alt='Harry potter logo' />
        <p className='filters__title'>Selecciona tu filtro</p>
        <div className='filters'>
          {filters &&
            filters.map((filter) => (
              <div className='filters__filter' key={filter.key}>
                <button
                  className={`button ${
                    currentFilter === filter.key ? 'button--active' : ''
                  }`}
                  onClick={() => handleClickButtonFilter(filter.key)}
                >
                  {filter.label}
                </button>
              </div>
            ))}
        </div>
        <div>
          <Loader show={loading} />
          <CharactersList characters={characters} />
        </div>
      </main>
    </Fragment>
  )
}

export default HomePage
