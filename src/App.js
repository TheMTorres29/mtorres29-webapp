import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Smash from './pages/Smash';
import Projects from './pages/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/smash-bros' exact Component={Smash} />
          <Route path='/projects' exact Component={Projects} />
        </Routes>
      </Router>
      <Footer />

      {/* Test Page Stuff

          <div className='banjoBox'>
            <div className='statBox'>
              <a className='statLink' href='https://smashdata.gg/smash/5/player/MTorres29?id=1103167'>Player Records</a>
            </div>
          </div>
      */}

    </>
  );
}

export default App;
