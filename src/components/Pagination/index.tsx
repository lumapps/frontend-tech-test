import React from 'react'
import { Button, Emphasis, FlexBox, Text } from '@lumx/react'
import { mdiChevronLeft, mdiChevronRight } from '@lumx/icons'

import { usePagination } from './PaginationContext'

interface Props {
  totalPages: number
}

export const Pagination = ({ totalPages }: Props) => {
  const { currentPage, setCurrentPage } = usePagination()

  const nextPage = () => setCurrentPage(currentPage + 1)
  const previousPage = () => setCurrentPage(currentPage - 1)

  const isPreviousDisabled = currentPage <= 1
  const isNextDisabled = currentPage >= totalPages

  return (
    <FlexBox hAlign="center" gap="medium">
      <Button
        leftIcon={mdiChevronLeft}
        onClick={previousPage}
        emphasis={Emphasis.low}
        isDisabled={isPreviousDisabled}
      >
        Previous
      </Button>
      <Text as="span">{`${currentPage} / ${totalPages}`}</Text>
      <Button
        rightIcon={mdiChevronRight}
        onClick={nextPage}
        emphasis={Emphasis.low}
        isDisabled={isNextDisabled}
      >
        Next
      </Button>
    </FlexBox>
  )
}
