import { useState, useEffect } from 'react'
import { QueryParamsListCharacters, listCharacters } from '../api'

export interface Character {
  image: string
  name: string
  description: string
  totalComics: number
  totalSeries: number
  totalStories: number
}

export const useListCharacters = ({
  offset,
  name,
}: QueryParamsListCharacters = {}) => {
  const [data, setData] = useState<Character[] | null>(null)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async (controller: AbortController) => {
      try {
        setLoading(true)
        const response = await listCharacters(
          {
            ...(offset ? { offset } : {}),
            ...(name ? { nameStartsWith: name } : {}),
          },
          controller.signal
        )

        const { total: totalResults, results } = response.data.data

        const formattedData = results.map((item) => ({
          image: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          name: item.name,
          description: item.description,
          totalComics: item.comics.available,
          totalSeries: item.series.available,
          totalStories: item.stories.available,
        }))

        setData(formattedData)
        setTotal(totalResults)
      } catch (err) {
        if (err.name === 'AbortError') {
          return
        }

        // TODO: display error notification
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    const controller = new AbortController()
    fetchData(controller)
    return () => controller.abort()
  }, [offset, name])

  return { data, loading, total }
}
