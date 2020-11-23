import React from 'react'
import List from './List'

export default function GroceryList(props) {
    return (
        <div className="Producten">
            <h2>Producten</h2>
            <List item = {props}/>
        </div>
    )
}
