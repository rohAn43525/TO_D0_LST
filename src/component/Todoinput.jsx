import { useState } from "react"
function Todoinput(props){

    const {handleAddTodo, todoValue, setTodoValue} = props


    

    

    
    
    

    return(<header>
        <input value={todoValue} type="text" placeholder="Enter your task " onChange={(e) => setTodoValue(e.target.value)} />
        <button onClick={() => {handleAddTodo(todoValue) ,setTodoValue("")}} >Add </button> <br />



        
            


        
    </header>)

}

export default Todoinput