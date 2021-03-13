import React from 'react';
import  Home  from './views/HomeMainContent/HomePage';
import  About  from './views/About/About';
//import  NavBar  from './components/Navbar/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Admin } from './views/AdminPage/Admin';
import Contact from './Contact';
//import { Footer } from './components/Footer';

export const Routes = () => {
  return (
    <>
     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/">
          <Redirect to="/" />
        </Route>
        <Route exact path="/About" component={About} />
        <Route exact path="/contact" component={Contact} />

        <Route exact path="/admin" component={Admin} />

      </Switch>
     
    </>
  );
};