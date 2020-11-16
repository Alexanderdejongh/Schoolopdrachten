import React, { Component } from "react"
import ShoppingCart from "./ShoppingCart"
import GroceryList from "./GroceryList"



class Container extends Component{
    constructor(){
        super()
        this.state = { 
            groceryItems :[
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
            ],
            shoppingListItems:[]            
        }
    }
    render()
    {
    const clickHandelerAdd = (button) => {
        const getTitle = button.target.innerHTML
        const getId = button.target.attributes[1].nodeValue
        this.setState( (prefstate, props) =>{
        if(this.state.shoppingListItems === []){
            return {  shoppingListItems: [
                {
                    key:getId,
                    id: getId,
                    name:getTitle,
                    count: 1
                }]
            }
        }
        const GetAddetProductId = this.state.shoppingListItems.map(item => item.id)  
        console.log(GetAddetProductId)
        if (prefstate.shoppingListItems.id === GetAddetProductId){
            const addCount = this.shoppingListItems.prefstate.count + 1
            return prefstate.shoppingListItems  + {
                    key:getId,
                    id: getId,
                    name:getTitle,
                    count: addCount
                }
        } else if (prefstate.shoppingListItems.id !== getId){
            return prefstate.shoppingListItems + {
                    key:getId,
                    id: getId,
                    name:getTitle,
                    count: 1
                }
        }
        console.log(prefstate)
        })
    }

    const clickHandelerDeleteAll = () => {
        console.log("click *test*")
        this.setState({shoppingListItems:[]}) 
    }

    return (
    <>
    <h1>Boodschappenlijstje</h1>
    <div className="Shop">
        <GroceryList
            ListItems={this.state.groceryItems}
            clickHandelerAdd ={clickHandelerAdd}  
        />
        <ShoppingCart 
            ListItems={this.state.shoppingListItems}
            clickHandelerDeleteAll ={clickHandelerDeleteAll}  
        />
    </div>
    </>
    );}
}

export default Container