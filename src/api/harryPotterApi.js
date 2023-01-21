import axios from 'axios'

export const harryPotterApi = axios.create({
  baseURL: import.meta.env.VITE_HARRY_POTTER_API,
})

export const getCharacters = () => {
  return harryPotterApi
    .get('/characters')
    .then((res) => res.data)
    .catch((err) => console.error('error', err))
}
