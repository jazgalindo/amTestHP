import { SET_CHARACTERS, SET_LOADING, SET_FILTERS } from '../actions/types'

const initialState = {
  characters: [],
  filters: [],
  loading: false,
}

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, characters: action.payload }
    case SET_FILTERS:
      return { ...state, filters: action.payload }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}
