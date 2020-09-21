import React from 'react'

const SearchBox = ({searchChange}) =>{

    return (
        <div>
            <input type="text" className="form-control bg-light" placeholder="Search contacts" style={{position:" relative",}}   onChange={searchChange}></input>
        </div>
    )
}

export default SearchBox