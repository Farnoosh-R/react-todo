import { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";

const TodoProvider = ({children}) => {

    const initiolState = {
        todos: []
    }

    const [state, dispatch] = useReducer(TodoReducer, initiolState);

return(
    <TodoContext.Provider value={{state, dispatch}}>
    {children}
    </TodoContext.Provider>
)

}
export default TodoProvider;