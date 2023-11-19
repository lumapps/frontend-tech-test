import { FlexBox, ProgressCircular, Text } from '@lumx/react'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  isLoading: boolean
  isNoContent: boolean
}

export const LoaderLayout = ({ children, isLoading, isNoContent }: Props) => {
  if (isLoading) {
    return (
      <FlexBox fillSpace hAlign="center">
        <ProgressCircular />
      </FlexBox>
    )
  }

  if (isNoContent) {
    return (
      <FlexBox fillSpace hAlign="center">
        <Text as="p">No superhero found</Text>
      </FlexBox>
    )
  }

  return children
}
