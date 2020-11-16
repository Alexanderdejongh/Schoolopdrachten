import React from "react"
import List from './List'

export default function shoppingCart(props) {
    return (
        <div className="Winkelmand">
            <h2>Winkelmand</h2>
            <List item = {props}/>
            <button onClick={props.clickHandelerDeleteAll}>Empty Card</button>
        </div>
    )
}