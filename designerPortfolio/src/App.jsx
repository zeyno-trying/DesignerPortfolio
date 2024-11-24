import Header from "./header"
import Home from "./home";
import Work from "./work";
import Contact from "./contact";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from "./about"
function App() {
  return(
    <>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header/>
          <Home/>
          <Work/>
          <Contact/>
        </Route>
        <Route path="/about">
        <Header/>
          <About />
          <Contact/>
        </Route>
        
        <Route path="/work">
        <Header/>
          <Work />
        </Route>
        
        <Route path="/contact">
        <Header/>
          <Contact />
        </Route>
      </Switch>
   
    </Router>
  
    </>

  );
}

export default App
