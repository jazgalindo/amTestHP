import { describe, test, expect } from 'vitest'
import { getCharacters } from './harryPotterApi'

describe('HarryPotterApi', () => {
  test('makes a GET request to fetch characters list and returns the result', async () => {
    const characterList = await getCharacters()
    expect(characterList.length).contain([])
  })
})
