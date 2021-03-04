import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import Admin from "./components/Admin"

const App = () => {
  return (
    <>
          <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/admin' component={Admin} />
                <Route component={Error} />
            </Switch>
          </main>
    </>
  )
}

export default App