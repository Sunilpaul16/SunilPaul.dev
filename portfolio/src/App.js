import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Landing from './Components/LandingPage/Landing';
import Projects from './Components/Projects/Projects';
import Header from './Components/NavBar/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
            <Header/>
            <Landing />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
