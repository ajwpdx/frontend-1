import React from 'react'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom'
import SignUp from './components/SignUp'

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
