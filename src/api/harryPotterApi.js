import axios from 'axios'

export const harryPotterApi = axios.create({
  baseURL: import.meta.env.VITE_HARRY_POTTER_API,
})

export const getCharacters = (filter = 'characters') => {
  return harryPotterApi
    .get(`/${filter}`)
    .then((res) => res.data)
    .catch((err) => console.error('error', err))
}

export const getFilters = () => {
  return harryPotterApi
    .get('/filters')
    .then((res) => res.data)
    .catch((err) => console.error('error', err))
}

