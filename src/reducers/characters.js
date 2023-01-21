/* eslint-disable no-case-declarations */
import { fromJS } from 'immutable'
import {
  SET_CHARACTERS,
  SET_FILTERS,
  SET_FAVORITE,
} from '../actions/types'

const initialState = fromJS({
  characters: [],
  favorites: [],
  filters: [],
})

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_CHARACTERS:
    return state.setIn(['characters'], fromJS(action.payload))
  case SET_FILTERS:
    return state.setIn(['filters'], fromJS(action.payload))
  case SET_FAVORITE:
    const currentCharacterIndex = state
      .get('characters')
      .findIndex((character) => {
        return character.get('name') === action.payload.name
      })
    if (currentCharacterIndex < 0) {
      return state
    }

    const isFavorite = state.getIn(
      ['characters', currentCharacterIndex, 'favorite']
    )
    return state.setIn( ['characters', currentCharacterIndex, 'favorite'],!isFavorite);
  default:
    return state
  }
}
