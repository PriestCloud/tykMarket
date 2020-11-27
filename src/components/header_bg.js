import React from 'react';
import "../styles/header_bg.css";
import Sellonjumia from "../assets/jumialogo.PNG";
import HeaderIcons from "../assets/headerIcons.PNG";


const Header_bg = props => {
    return(
        <div className = "header_bg">{props.children}
            <div className = "row"> 
                <div className = "col-md-4">    
                <img className = "sellonjumia" src= {Sellonjumia} width = {30} height = {18}/>
                <p className = "sellonjumia2"> Sell on Jumia </p>
                </div>

                <div className = "col-md-6">                         
                <img className = "" src = {HeaderIcons}/>
                </div>              
                
            </div>

        </div>

    )
}
 

export default Header_bg
