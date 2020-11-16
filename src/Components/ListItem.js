import React  from 'react'

export default function ListItem(props){

        return (
        <li onClick={props.clickHandelerAdd} className="List-item" id={props.id}>{props.name} </li>
        )
}
