import React from 'react';
import '../App.js';
import Hero from '../components/Hero/Hero.js';
import Aboutme from '../components/Aboutme/Aboutme.js';
import Timeline from '../components/Timeline/Timeline.js';

function Home() {
    return (
        <>
            <Hero />
            <Aboutme />
            <Timeline />   
        </>
    )
}

export default Home;