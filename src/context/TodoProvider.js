import { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import Swal from "sweetalert2";

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


    const addTodo = (title) => {
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              completed: false,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch({type: 'ADD_TODO', payload: data})
            dispatch({type: 'SET_ERROR', payload: null})
            Swal.fire({
                title: "task added",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top',
              });
        }).catch(err => {
            dispatch({type: 'SET_ERROR', payload: err.message})
            dispatch({type: 'ADD_TODO', payload: []})
        })
    }

    const updateTodo = (todo) => {

        fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
            method: 'PUT',
            body: JSON.stringify({
              id: 1,
              title: todo.title,
              completed: !todo.completed,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                dispatch({type: 'UPDATE_TODO', payload: data})
                dispatch({type: 'SET_ERROR', payload: null})
                Swal.fire({
                    title: "task added",
                    icon: "success",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top',
                  });
            }).catch(err => {
                dispatch({type: 'SET_ERROR', payload: err.message})
                dispatch({type: 'ADD_TODO', payload: []})
            })

    } 
    const removeTodo = (todoId) => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${todoId}`, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                dispatch({type: 'REMOVE_TODO', payload: todoId})
                dispatch({type: 'SET_ERROR', payload: null})
                Swal.fire({
                    title: "deleted",
                    icon: "warning",
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top',
                  });
            }).catch(err => {
                dispatch({type: 'SET_ERROR', payload: err.message})
                dispatch({type: 'REMOVE_TODO', payload: []})
            })

    } 

return(
    <TodoContext.Provider value={{...state, getTodo, getFilterTodo, addTodo, updateTodo, removeTodo}}>
    {children}
    </TodoContext.Provider>
)

}
export default TodoProvider;