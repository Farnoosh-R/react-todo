import { useContext, useEffect } from "react";
import TodoContext from "../context/TodoContext";



const Todo = () => {

    const myTodocontext = useContext(TodoContext);

useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
        myTodocontext.dispatch({type: 'SET_TODOS', payload: data})
    })
}, [])

    return(
        <h3>Todo is:</h3>
    )
}
export default Todo;