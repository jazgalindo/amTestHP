import { SET_CHARACTERS, SET_LOADING } from '../actions/types'

const initialState = {
  characters: [],
  loading: false,
}

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, characters: action.payload }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}
