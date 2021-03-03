import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import Admin from "./components/Admin"

function App() {
  return (
    <>
      
            <Switch>
                <Route path='/' component={Home} />
                <Route path='/admin' component={Admin} />
            </Switch>
    </>
  );
}

export default App;
