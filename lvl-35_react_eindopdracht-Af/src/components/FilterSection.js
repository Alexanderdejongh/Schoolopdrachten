import React from 'react'
import Button from "./Button"

function FilterSection(props) {
    const filterStyle = ["Rock", "Trance", "Dubstep", "Dance","Harder Styles", "Chill Out", "All" ]

    const handleFilterBtn = event =>{
        props.resetSongsToFilter()
        const getValue = event.target.innerHTML
        props.setStatus(getValue)
    }

    return (
        <div className="buttonsBox">
            {filterStyle.map((item, index) => <Button name={item}
            handleFilterBtn={handleFilterBtn}
            key={index}/>) }
        </div>
    )
}

export default FilterSection
