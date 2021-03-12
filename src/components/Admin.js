import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from '../Login';

const Admin = () => {
    return (
        <>
            <BrowserRouter>
          
                        <Switch>
                            <Route exact path='/admin' component={Login} />
                        </Switch>
    
           </BrowserRouter>  
        </>
    )
}

export default Admin
