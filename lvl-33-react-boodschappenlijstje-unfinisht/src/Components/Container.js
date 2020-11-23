import React, { useState } from "react"
import ShoppingCart from "./ShoppingCart"
import GroceryList from "./GroceryList"
import Form from "./Form"


const Container = () =>{

    const [groceryItems, setGroceryItems] = useState(
        [
            {id: 1, name:"Bonen"},
            {id: 2, name:"Witte Kool"},
            {id: 3, name:"Kip"},
            {id: 4, name:"Gehakt"},
            {id: 5, name:"Kaas"},
            {id: 6, name:"Leverworst"},
            {id: 7, name:"Kastanjes"},
            {id: 8, name:"Gember"},
            {id: 9, name:"Pijnboompitten"},
            {id: 10, name:"Chia zaat"},
        ]
    )
    const [shoppingListItems, setShoppingListItems] = useState([])
    const [inputText, setInputText] = useState('')

    const clickHandelerAdd = (button) => {
        const getTitle = button.target.innerHTML
        const getId = button.target.attributes[1].nodeValue
        const listOfItems = [...shoppingListItems]
        if(String(shoppingListItems.map(item=>item.name)) === getTitle){
            console.log(listOfItems)
            listOfItems.fiter(item =>
                item.id === getId ? {...item, count: + 1 }:item
            )
            console.log('check')
            setShoppingListItems(listOfItems)
        } else{
            setShoppingListItems(
            [...shoppingListItems, {
                id: getId,
                name: getTitle,
                count: 1}
            ]
        )
        }
    }

    const clickHandelerDeleteAll = () => {

        setShoppingListItems([]) 
    }

    const clickHandelerDeleteItemGrocery = (item) => {
        const elementId = item.target.parentNode.children[0].attributes[1].nodeValue
        setGroceryItems(groceryItems.filter(el => el.id !==Number(elementId)))

    }
    const clickHandelerDeleteList = item => {
        const elementId = item.target.parentNode.children[0].attributes[1].nodeValue
        setShoppingListItems(shoppingListItems.filter(el => el.id !==elementId))
    }
    

    return (
    <>
        <h1>Boodschappenlijstje</h1>
        <Form 
        groceryItems={groceryItems}
        setGroceryItems={setGroceryItems}
        inputText={inputText}
        setInputText={setInputText}
        />
        <div className="Shop">
            <GroceryList
                ListItems={groceryItems}
                clickHandelerAdd ={clickHandelerAdd}  
                clickHandelerDeleteItem ={clickHandelerDeleteItemGrocery}
            />
            <ShoppingCart 
                ListItems={shoppingListItems}
                clickHandelerDeleteAll ={clickHandelerDeleteAll}  
                clickHandelerDeleteItem ={clickHandelerDeleteList}  
            />
        </div>
    </>
    )
}



export default Container