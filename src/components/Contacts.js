import React from 'react'

const Contacts= (props)=>{

    return(
        <div>
            <div className="card" style={{padding:0.3 +'rem',left:0}}><h4> {props.name}</h4></div>
            
        </div>
    )
}

export default Contacts