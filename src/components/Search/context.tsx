import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

interface SearchContextProps {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined)

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState('')

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}
