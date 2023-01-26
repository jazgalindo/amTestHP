import { cleanup, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { render } from '../utils/test-utils'
import CharactersList from './CharactersList'

const charcaterList = [
  {
    name: 'Harry Potter',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
    dateOfBirth: '31-07-1980',
    yearOfBirth: 1980,
    ancestry: 'half-blood',
    eyeColour: 'green',
    hairColour: 'black',
    wand: {
      wood: 'holly',
      core: 'phoenix feather',
      length: 11,
    },
    patronus: 'stag',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Daniel Radcliffe',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/harry.jpg',
  },
  {
    name: 'Hermione Granger',
    species: 'human',
    gender: 'female',
    house: 'Gryffindor',
    dateOfBirth: '19-09-1979',
    yearOfBirth: 1979,
    ancestry: 'muggleborn',
    eyeColour: 'brown',
    hairColour: 'brown',
    wand: {
      wood: 'vine',
      core: 'dragon heartstring',
      length: '',
    },
    patronus: 'otter',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Emma Watson',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
  },
]
describe('CharactersList', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<CharactersList />)
  })

  it('should render dateOfBirth character', async () => {
    render(<CharactersList characters={charcaterList} />)
    const items = await screen.findAllByText('31-07-1980')
    expect(items).toHaveLength(1)
  })
})
