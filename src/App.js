import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Exterior from './Components/Exterior/Exterior';
import Gallery from './Components/Gallery/Gallery';
import Home from './Components/Home/Home';
import Interior from './Components/Interior/Interior';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Toolbar from './Components/Toolbar/Toolbar';
import Why from './Components/Why/Why';

function App() {

  let trailerPics = [
    "https://i.ibb.co/DtgCccp/IMG953483.jpg",
    "https://i.ibb.co/hDZPdjg/IMG953485.jpg",
    "https://i.ibb.co/FwBTpc0/IMG953484.jpg",
    "https://i.ibb.co/Kr4M1gW/IMG953486.jpg",
  ]

  let blueHouse = [

  ]

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/About">
            <Toolbar/>
            <About/>
          </Route> 
          <Route path="/Portfolio">
            <Toolbar/>
            <Portfolio/>
          </Route> 
          <Route path="/Services">
            <Toolbar/>
            <Services/>
          </Route> 
          <Route path="/Exterior">
            <Toolbar/>
            <Exterior/>
          </Route> 
          <Route path="/Trailer">
            <Toolbar/>
            <Gallery
            imgs={trailerPics}
            />
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
