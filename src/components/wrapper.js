import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Flashad from './flashad.js'
import Header_bg from './header_bg.js'
import Header_Main from './header_main.js'
import '../styles/wrapper.css';


const Wrapper = props => {
    return(
        <div className = "container-fluid body">
         <div>   
         
         <Header_bg>

            <div className = "row">
            <div className = "col-md-1"></div>
            <div className = "col-md-10">       <Flashad/> </div>
            <div className = "col-md-1"></div>
            </div>
            
        </Header_bg> 
            
        </div>

        <Header_Main/>

        </div>
    )
}

export default Wrapper