import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignInPage from './components/SignInPage'
import PolicyPage from './components/PolicyPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SignInPage} />
        <Route path='/policy' component={PolicyPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
