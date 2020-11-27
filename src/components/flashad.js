import React from 'react';
import Flashad from "../assets/flashad.gif";
import "../styles/flashad.css";

const FirstAd = props => {
    return(
        <div> 
        <img className = "flashad" src = {Flashad}/>
        </div>
    )
}

export default FirstAd
