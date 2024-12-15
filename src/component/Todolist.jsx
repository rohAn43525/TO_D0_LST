import React from "react"
import Todocard from "./Todocard"

function Todolist(props) {

    const {todos} = props

    

    
    return (
        <ul className="main">
            {todos.map((itme, indexss) => {
                return(
                    <Todocard key={indexss} {...props}
                    index = {indexss}>
                        <p>{itme}</p>
                        
                    </Todocard>

                )
            })}
        </ul>
    )
}    
export default Todolist