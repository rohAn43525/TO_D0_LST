import Todoinput from "./component/Todoinput"
import Todolist from "./component/Todolist"
import {useState, useEffect} from "react"

function App() {

  

  const [todos, settodos] = useState([])
  const[todoValue, setTodoValue] = useState("")

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

    function handleAddTodo(newTodo){
      const newTodolist = [...todos, newTodo]
      persistData(newTodolist)
      settodos(newTodolist)
    }

    function handleDeleteTodo(index){
      const newTodolist = todos.filter((itme, indexss) =>{return  indexss !== index})
      persistData(newTodolist)

      settodos(newTodolist)
    }

    function handleEditTodo(index){

      const valueEdited = todos[index]
      setTodoValue(valueEdited)
      handleDeleteTodo(index)
    }
    
    useEffect(() => {
      if(!localStorage){
        return
      }
      let localtodos = localStorage.getItem("todos")
      if(!localtodos){
        return
      }
      localtodos = JSON.parse(localtodos).todos
      settodos(localtodos)
    }, [])

  return (
    <>
      <Todoinput handleAddTodo = {handleAddTodo} todoValue = {todoValue} setTodoValue = {setTodoValue} />
      <Todolist todos = {todos} handleDeleteTodo = {handleDeleteTodo} handleEditTodo = {handleEditTodo} />

    </>
  )
}

export default App
