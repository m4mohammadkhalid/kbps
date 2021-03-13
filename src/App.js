import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import Login from './Login';

const App = () => {
  return (
    <>
          <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/fuck' component={Login} />
            </Switch>
          </main>
    </>
  )
}

export default App