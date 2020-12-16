import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Exterior from './Components/Exterior/Exterior';
import Home from './Components/Home/Home';
import Interior from './Components/Interior/Interior';
import Portfolio from './Components/Portfolio/Portfolio';
import Toolbar from './Components/Toolbar/Toolbar';
import Why from './Components/Why/Why';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Exterior">
            <Toolbar/>
            <Exterior/>
          </Route> 
          <Route path="/Interior">
            <Toolbar/>
            <Interior/>
          </Route> 
          <Route path="/">
            <Toolbar/>
            <Home/>
            <Why/>
            <Portfolio/> 
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
