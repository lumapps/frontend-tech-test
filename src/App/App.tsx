/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import { ListCharacters } from '../pages/ListCharacters'
import { SearchProvider } from '../components/Search'

function App() {
  return (
    <SearchProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ListCharacters />
          </Route>
        </Switch>
      </Router>
    </SearchProvider>
  )
}

export default App
