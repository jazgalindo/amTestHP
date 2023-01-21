import { Fragment, useEffect, useState } from 'react'
import { getCharacters, getFilters } from '../api/harryPotterApi'
import CharactersList from '../components/CharactersList'
import { setCharacters, setFilters, setLoading } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import assets from '../assets/assets'
import Loader from '../components/Loader'

function HomePage() {
  const characters = useSelector((state) => state.characters)
  const loading = useSelector((state) => state.loading)
  const filters = useSelector((state) => state.filters)
  const [currentFilter, setCurrentFilter] = useState('')
  const dispatch = useDispatch()

  const fetchCharacters = async (filter) => {
    dispatch(setLoading(true))
    const charactersResponse = await getCharacters(filter)
    dispatch(setCharacters(charactersResponse))
    dispatch(setLoading(false))
  }

  const fetchFilters = async () => {
    dispatch(setLoading(true))
    const filtersResponse = await getFilters()
    dispatch(setFilters(filtersResponse))
    dispatch(setLoading(false))
  }

  useEffect(() => {
    fetchCharacters()
    fetchFilters()
  }, [])

  const handleClickButtonFilter = (filter) => {
    setCurrentFilter((currentFilter) => {
      if (currentFilter === filter) {
        fetchCharacters()
      } else {
        fetchCharacters(filter)
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
           <Loader show={true}/>
          ) : (
            <CharactersList characters={characters} />
          )}
        </div>
      </main>
    </Fragment>
  )
}

export default HomePage
