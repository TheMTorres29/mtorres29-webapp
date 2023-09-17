import React from 'react';
import '../App.js';
import SmashVods from '../components/Smashvods/Smashvods.js';
import SmashStages from '../components/Smashstages/smashstages.js';
import SmashProfile from '../components/Smashprofile/Smashprofile.js';

function Smash() {
    return (
        <>
            <SmashStages />
            <SmashProfile />
            <SmashVods />
        </>
    )
}

export default Smash;