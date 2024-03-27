import { React, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import Smash from './pages/Smash';
import Projects from './pages/Projects';
import Footer from './components/Footer/Footer';
import Topbutton from './components/Topbutton/Topbutton';
import ContactModal from './components/ContactModal/ContactModal';
import FightstickInfo from './components/FightStickInfo/FightstickInfo.js';
import SmashVods from './components/Smashvods/Smashvods.js';
import SmashStages from './components/Smashstages/smashstages.js';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Router>
        {/* <ContactModal setIsModalOpen={setIsModalOpen} /> */}
        {isModalOpen ? <ContactModal setIsModalOpen={setIsModalOpen} /> : null}
        <Navbar setIsModalOpen={setIsModalOpen} />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/smash-bros' exact Component={Smash} />
          <Route path='/smash-bros/smash-mods' exact Component={''} />
          <Route path='/smash-bros/smash-stages' exact Component={SmashStages} />
          <Route path='/smash-bros/smash-vods' exact Component={SmashVods} />
          <Route path='/projects' exact Component={Projects} />
          <Route path='/projects/fightstick' exact Component={FightstickInfo} />
        </Routes>
      </Router>
      <Topbutton />
      <Footer setIsModalOpen={setIsModalOpen} />
    </>
  );
}

export default App;
