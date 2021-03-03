import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'

import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from '../About';
import Contact from '../Contact';

const Home = () => {
    return (
        <>
        <BrowserRouter>
            <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            <Footer />
        </BrowserRouter>
    </>
    )
}

export default Home
