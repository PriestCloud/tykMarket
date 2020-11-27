import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/header_bg.css";
import Sellonjumia from "../assets/jumialogo.PNG";



const Header_bg = props => {
    return(
        <div className = "header_bg">{props.children}
        <div className = "row"> 
            <img className = "sellonjumia" src= {Sellonjumia} width = {30} height = {18}/>
            <p className = "sellonjumia2"> Sell on Jumia </p>  
        </div>
        </div>
    )
}
 

export default Header_bg
