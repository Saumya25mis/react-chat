import React from 'react'
import 'react-bootstrap'

function Header(){
    return(
        <nav class="navbar navbar-dark" style={{height:5 + 'rem',backgroundColor:'black'}}>
            <div className="row col-12 d-flex justify-content-center text-white text-large">
            <span className="h1">Wizard Chat</span>
            </div>
        </nav>
    )
}

export default Header











