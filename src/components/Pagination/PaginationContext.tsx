import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

interface PaginationContextProps {
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  resetPagination: () => void
}

const PaginationContext = createContext<PaginationContextProps | undefined>(
  undefined
)

const INITIAL_PAGE = 1

export const PaginationProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE)

  const resetPagination = useCallback(() => setCurrentPage(INITIAL_PAGE), [])

  return (
    <PaginationContext.Provider
      value={{ currentPage, setCurrentPage, resetPagination }}
    >
      {children}
    </PaginationContext.Provider>
  )
}

export const usePagination = (): PaginationContextProps => {
  const context = useContext(PaginationContext)
  if (!context) {
    throw new Error('usePagination must be used within a PaginationProvider')
  }
  return context
}
