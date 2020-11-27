import React from 'react';
import Jumia_Logo from "../assets/jumialogo.PNG";
import '../styles/header_main.css';
// import { FontAwesomeIcon } from '..../fontawesome';

const Header_Main = props => {
    return(
        <div className = "header_bg">{props.children}
            <div className = "row"> 

            <div className = "col-md-2"> 
                <img className = "headerLogo" src = {Jumia_Logo} />
            </div>
 
            <div className = "col-md-5">
                <input className = "textbox_Des" type = "text" size = {75} placeholder = "Search products, brands and categories"/>
            </div>

            <div className = "col-md-2">
                <button className = "btn btn-warning text-white button"> SEARCH </button>
            </div>
                

            <div className = "col-md-1 log_help_cart"> 
                <div> <img className = "" src = {Jumia_Logo} width = {20} height = {15} /> <b> Login </b></div>
            </div>

            <div className = "col-md-1 log_help_cart"> 
                <div> <img className = "" src = {Jumia_Logo} width = {20} height = {15} /> <b> Help </b> </div>               
            </div>
        
            <div className = "col-md-1 log_help_cart"> 
                <div> <img className = "" src = {Jumia_Logo} width = {20} height = {15} /> <b> Cart </b> </div>
            </div>
            



            </div>

        </div>

    )
}

export default Header_Main