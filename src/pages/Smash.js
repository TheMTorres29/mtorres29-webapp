import React from 'react';
import '../App.js';
import SmashVods from '../components/Smashvods/Smashvods.js';
import SmashStages from '../components/Smashstages/smashstages.js';

function Smash() {
    return (
        <>
            <SmashStages />
            <SmashVods />
        </>
    )
}

export default Smash;