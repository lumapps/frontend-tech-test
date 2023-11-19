import React, { useEffect } from 'react'
import { FlexBox } from '@lumx/react'

import { useListCharacters } from '../../hooks/useListCharacters'
import { CardCharacter } from './CardCharacter'
import {
  PaginationProvider,
  usePagination,
} from '../../components/Pagination/PaginationContext'
import { Pagination } from '../../components/Pagination'
import { useSearch } from '../../components/Search/context'
import { ITEMS_PER_PAGE } from '../../api'
import { LoaderLayout } from '../../components/LoaderLayout'

const Content = () => {
  const { currentPage, resetPagination } = usePagination()
  const { search } = useSearch()
  const { data, loading, total } = useListCharacters({
    offset: (currentPage - 1) * ITEMS_PER_PAGE,
    name: search,
  })

  useEffect(() => {
    resetPagination()
  }, [resetPagination, search])

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE)

  return (
    <FlexBox orientation="vertical" vAlign="center">
      <FlexBox
        orientation="vertical"
        vAlign="center"
        className="lumx-spacing-margin-vertical-big"
        style={{ minHeight: 720 }}
      >
        <LoaderLayout isLoading={loading} isNoContent={!data?.length}>
          {data?.map((character) => (
            <CardCharacter
              key={character.name}
              image={character.image}
              name={character.name}
              description={character.description}
              totalComics={character.totalComics}
              totalSeries={character.totalSeries}
              totalStories={character.totalStories}
            />
          ))}
        </LoaderLayout>
      </FlexBox>

      {totalPages > 0 && <Pagination totalPages={totalPages} />}
    </FlexBox>
  )
}

export const ListCharacters = () => (
  <PaginationProvider>
    <Content />
  </PaginationProvider>
)
