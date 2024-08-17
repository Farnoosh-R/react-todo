import { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";

const TodoProvider = ({children}) => {

    const initiolState = {
        todos: [],
        error: null
    }

    const [state, dispatch] = useReducer(TodoReducer, initiolState);


    const getTodo = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'SET_TODOS', payload: data})
            dispatch({type: 'SET_ERROR', payload: null})
        }).catch(err => {
            dispatch({type: 'SET_ERROR', payload: err.message})
            dispatch({type: 'SET_TODOS', payload: []})
        })
    }

    const getFilterTodo = (count) => {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`)
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'SET_FILTERTODOS', payload: data})
            dispatch({type: 'SET_ERROR', payload: null})
        }).catch(err => {
            dispatch({type: 'SET_ERROR', payload: err.message})
            dispatch({type: 'SET_FILTERTODOS', payload: []})
        })
    }

return(
    <TodoContext.Provider value={{...state, getTodo, getFilterTodo}}>
    {children}
    </TodoContext.Provider>
)

}
export default TodoProvider;