import axios from 'axios'
import { ListCharactersResponse } from './types'

export interface QueryParamsListCharacters {
  offset?: number
  name?: string
}

export const ITEMS_PER_PAGE = 4

const instance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  timeout: 10000,
})

const baseQueryParams = {
  apikey: process.env.REACT_APP_MARVEL_API_KEY,
}

const listCharacters = (
  query?: QueryParamsListCharacters,
  signal?: AbortSignal
) =>
  instance.get<ListCharactersResponse>('characters', {
    params: {
      ...query,
      ...{ limit: ITEMS_PER_PAGE },
      ...baseQueryParams,
    },
    signal,
  })

export { instance as api, listCharacters }
