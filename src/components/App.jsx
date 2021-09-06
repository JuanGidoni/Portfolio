import './App.css';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Molecules/Header';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './Organisms/Footer';
import Default from './Templates/Default';
import NavBar from './Organisms/NavBar';
import { MenuProvider, LoadingProvider, useLoadingContext } from './Contexts/';

const App = () => {
  return (
    <LoadingProvider>
      <Router>
        <Default id="top">
          <MenuProvider>
            <NavBar />
          </MenuProvider>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/:id" component={Header} />
            <Route path="/" component={Header} />
          </Switch>
          <Footer />
        </Default>
      </Router>
    </LoadingProvider >
  );
}

export default App;
