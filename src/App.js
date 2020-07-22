import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      
    <div className="App">
            <Route exact path="/" component={LandingPage} />
            {console.log(process.env.PUBLIC_URL)}
            <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />
            <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={ContactMe} />
            <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio} />
    </div>
    </Router>
  );
}

export default App;
;