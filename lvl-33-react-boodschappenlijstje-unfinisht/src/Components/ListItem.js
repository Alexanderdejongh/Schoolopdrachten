import React  from 'react'

export default function ListItem(props){
        const createP = ()=>{
                if(props.count !== undefined){
                return (<p>Aantal: {props.count }</p>)
                }
        }

        return (
        <div className="item">
                <li 
                        onClick={props.clickHandelerAdd} 
                        className="List-item" 
                        id={props.id}>{props.name} 
                </li>
                {createP()}
                <i onClick={props.clickHandelerDeleteItem} className="fas fa-trash"></i>
                
        </div>
        )
}
