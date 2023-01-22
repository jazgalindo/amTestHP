import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCharacters, getCharacterTypes } from '../api/harryPotterApi'
import { setLoading } from './uiSlice'

const initialState = {
  characters: [],
  favorites: [],
  characterTypes: [],
}

export const fetchCharacters = createAsyncThunk(
  'data/fetchCharacters',
  async (filter, { dispatch }) => {
    dispatch(setLoading(true))
    const charactersResponse = await getCharacters(filter)
    dispatch(setCharacters(charactersResponse))
    dispatch(setLoading(false))
  }
)

export const fetchCharacterTypes = createAsyncThunk(
  'data/fetchCharacterTypes',
  async (_, { dispatch }) => {
    const characterTypesResponse = await getCharacterTypes()
    dispatch(setCharacterTypes(characterTypesResponse))
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload
      state.favorites = []
    },
    setCharacterTypes: (state, action) => {
      state.characterTypes = action.payload
    },
    setFavorite: (state, action) => {
      const currentCharacterIndex = state.characters.findIndex((character) => {
        return character.name === action.payload.name
      })
      if (currentCharacterIndex >= 0) {
        const isFavorite = state.characters[currentCharacterIndex].favorite
        state.characters[currentCharacterIndex].favorite = !isFavorite
        if (isFavorite) {
          state.favorites = state.favorites.filter(
            (favorite) => favorite.name !== action.payload.name
          )
        } else {
          state.favorites.push(state.characters[currentCharacterIndex])
        }
      }
    },
  },
})

export const { setCharacters, setCharacterTypes, setFavorite } =
  dataSlice.actions
export const dataReducer = dataSlice.reducer
