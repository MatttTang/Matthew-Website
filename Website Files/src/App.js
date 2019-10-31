import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//Components
import Header from './Header.js';
import "./Assets/Style/StyleMain.css";
import Navigator from './Navigator.js';
import About from "./Pages/About.js";
import Work from "./Pages/Work.js";
import Portfolio from "./Pages/Portfolio.js";
import CV from "./Pages/CV.js";

function App() {
  return (
    <Router>
    <div className="App">

      <Header/>
      <Navigator/>

      <Route exact path='/' component={About} />
      <Route exact path='/Work' component={Work} />
      <Route exact path='/Portfolio' component={Portfolio} />
      <Route exact path='/CV' component={CV} />

    </div>
    </Router>
  );
}

export default App;
