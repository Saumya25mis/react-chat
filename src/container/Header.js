import React from 'react'
import 'react-bootstrap'
import {Link} from "react-router-dom";

function Header(){
    return(
        <nav className="navbar navbar-dark" style={{height:5 + 'rem',backgroundColor:'black',fontFamily:'sa',fontWeight:'bold',fontSize:45 + 'px',display:"ruby-base" }}>
          <Link to="/"><button className="btn" style={{backgroundColor:'#ffc048',cursor:'pointer',fontSize:16 + 'px',borderRadius:18+'px'}}><i className="fa fa-home">  Home</i></button></Link>
            <div className="row col-12 d-flex justify-content-center text-white text-large">
            <span>Wizard Chat</span>
            </div>
        </nav>
    )
}

export default Header











