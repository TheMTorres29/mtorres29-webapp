import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from'./pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
        </Routes>
      </Router>
      

      {/* Test Page Stuff
      <h1 className='title'>MTorres29 Player Site</h1>
      <div className='container'>
        <div className='tempBox'>

          <div className='banjoBox'>
            <div className='statBox'>
              <a className='statLink' href='https://smashdata.gg/smash/5/player/MTorres29?id=1103167'>Player Records</a>
            </div>
          </div>

          <div className='vidBox'>
            <div className='smash-info-container'>
              <div className='smash-records'>
                <h1 className='smash-match-title'>Smash Records / Matches</h1>

                <div className="smash-video-container">
                  <h3>GameLab-Smash Jabroni Jamboree: Piston (Roy) Vs MTorres (Banjo)</h3>
                  <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xVsCC1g1jQA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>

                <div className="smash-video-container">
                  <h3>It's Time to Duel #18 Yan (Jigglypuff) vs MTorres29 (Banjo)</h3>
                  <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8fVxU3cHGdw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>

                <div className="smash-video-container">
                  <h3>JV3 2022 Crew Battle Los Lecheros vs SuperJellyNovaGang</h3>
                  <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dIGwlR1oERA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>

                <h3 className="smash-coming-soon">more coming soon</h3>
              </div>
            </div>
          </div>

          <div className='infoBox'>
            <h2 className='title'>Banjo Info</h2>
            <p className='title'>test test test WW is broken</p>
          </div>

        </div>
      </div> */}

    </>
  );
}

export default App;
