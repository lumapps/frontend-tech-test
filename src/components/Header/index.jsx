import React from 'react'
import { FlexBox, Alignment } from '@lumx/react'
import Search from '../Search'

const Header = () => (
  <header className="lumx-spacing-padding-big header">
    <FlexBox vAlign={Alignment.right}>
      <Search />
    </FlexBox>
  </header>
)

export default Header
