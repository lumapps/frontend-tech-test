import React from 'react'
import { TextField, Theme } from '@lumx/react'
import { mdiMagnify } from '@lumx/icons'
import debounce from 'lodash/debounce'

import { useSearch } from './context'

export { SearchProvider } from './context'

const Search = () => {
  const { setSearch } = useSearch()

  const debouncedSearch = React.useRef(
    debounce((criteria) => {
      setSearch(criteria)
    }, 300)
  ).current

  return (
    <TextField
      theme={Theme.dark}
      placeholder="Search ..."
      clearButtonProps={{ label: 'Clear' }}
      icon={mdiMagnify}
      onChange={debouncedSearch}
    />
  )
}

export default Search
