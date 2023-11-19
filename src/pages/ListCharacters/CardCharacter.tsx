import React from 'react'
import {
  GenericBlock,
  Text,
  Heading,
  InlineList,
  Thumbnail,
  Size,
  AspectRatio,
  ThumbnailVariant,
} from '@lumx/react'

import { Character } from '../../hooks/useListCharacters'

export const CardCharacter = ({
  image,
  name,
  description,
  totalComics,
  totalSeries,
  totalStories,
}: Character) => (
  <GenericBlock
    key={name}
    as="article"
    orientation="horizontal"
    className="lumx-spacing-margin-bottom-big lumx-spacing-padding-big"
    style={{
      width: 600,
      borderRadius: 10,
      boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    }}
  >
    <GenericBlock.Figure>
      <Thumbnail
        image={image}
        alt={`thumbnail-${name}`}
        size={Size.xl}
        imgProps={{ width: 128, height: 128 }}
        aspectRatio={AspectRatio.square}
        variant={ThumbnailVariant.rounded}
      />
    </GenericBlock.Figure>

    <GenericBlock.Content>
      <Heading as="h2" typography="subtitle2">
        {name}
      </Heading>
      <Text
        as="p"
        truncate={{ lines: 3 }}
        typography="body1"
        color="dark"
        colorVariant="L2"
      >
        {description}
      </Text>
      <InlineList
        typography="overline"
        color="dark"
        colorVariant="L2"
        className="lumx-spacing-margin-top-big"
      >
        <Text as="span"># Comics: {totalComics}</Text>
        <Text as="span"># Series: {totalSeries}</Text>
        <Text as="span"># Stories: {totalStories}</Text>
      </InlineList>
    </GenericBlock.Content>
  </GenericBlock>
)
