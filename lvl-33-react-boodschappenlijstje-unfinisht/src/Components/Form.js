import React from 'react'

function Form({groceryItems, setGroceryItems,inputText,setInputText}) {

    const inputTextHandelerAdd = (event) => {
        setInputText(event.target.value)
    }

    const submitTodoHandler = (event) =>{
        event.preventDefault()
        setGroceryItems([...groceryItems,
            {name: inputText, 
            id: Math.random() * 1000}])
        setInputText("")
    }

    return (
        <form>
            <input type="text"
                value={inputText}
                onChange={inputTextHandelerAdd}
            />
            <button onClick={submitTodoHandler} className="addToList" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    )
}

export default Form
