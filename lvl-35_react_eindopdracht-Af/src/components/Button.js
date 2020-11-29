import React from 'react'

function Button(props) {
    return (
    <button className="filterButton" onClick={props.handleFilterBtn}>{props.name}</button>
    )
}

export default Button
