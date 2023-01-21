import { SET_CHARACTERS, SET_FILTERS, SET_LOADING } from './types'

export const setCharacters = (payload) => ({
  type: SET_CHARACTERS,
  payload,
})

export const setFilters = (payload) => ({
  type: SET_FILTERS,
  payload,
})

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
})

