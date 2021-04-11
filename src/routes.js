import React from 'react';
import  Home  from './views/HomeMainContent/HomePage';
import  About  from './views/About/About';
//import  NavBar  from './components/Navbar/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Admin } from './views/AdminPanel/Login';
import Contact from './Contact';
import { Dashboard } from './views/AdminPanel/Dashboard'
import {UserDashboard} from './views/UsersPanel/Dashboard'
import { GalleyImage } from './views/Gallery';
import { Event } from './views/Event';
import { Headmasters, Principal, Tc, Teacher, Vacancies } from './views/Teacher';
import Facility from './views/Facility/Facility';



//import { Footer } from './components/Footer';

export const Routes = () => {
  return (
    <>
     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/">
          <Redirect to="/" />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/gallery" component={GalleyImage} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/teacher" component={Teacher} />
        <Route exact path="/principal" component={Principal} />
        <Route exact path="/headmasters" component={Headmasters} />
        <Route exact path="/vacancies" component={Vacancies} />
        <Route exact path="/tc" component={Tc} />


        <Route exact path="/facility" component={Facility} />


        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admindashboard" component={Dashboard} />
        <Route exact path="/userdashboard" component={UserDashboard} />





      </Switch>
     
    </>
  );
};