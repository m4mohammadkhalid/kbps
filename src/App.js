import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './Contact';
import Home from './Home';
function App() {
  return (
      <>
      <Router>
        <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/contact" component={Contact} exact />
                
            </Switch>
            <Footer />
      </Router>
       
        
       
      </>
  );
}

export default App;