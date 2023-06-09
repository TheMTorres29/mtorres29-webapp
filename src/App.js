import { React, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Smash from './pages/Smash';
import Projects from './pages/Projects';
import Footer from './components/Footer/Footer';
import Topbutton from './components/Topbutton/Topbutton';
import ContactModal from './components/ContactModal/ContactModal';

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
          <Route path='/projects' exact Component={Projects} />
        </Routes>
      </Router>
      <Topbutton />
      <Footer setIsModalOpen={setIsModalOpen} />
    </>
  );
}

export default App;
