import React from 'react'
import ListItem from './ListItem'

function List(props) {

    const shopItems = props.item.ListItems;
    const addToList = props.item.clickHandelerAdd
    const makeMapOfCard = shopItems.map(item => {
        if( item !==[]){
            return  <ListItem
            clickHandelerAdd ={addToList} 
                key = {item.id} 
                name ={item.name} 
                id={item.id}
                clickHandelerDeleteItem ={props.item.clickHandelerDeleteItem} 
                item={item}
                count={item.count}
            />
        }
    })
    return (
        <div className="List-containter">
            <ul className="List-box">
            {makeMapOfCard}
            </ul>
        </div>
    )
}

export default List