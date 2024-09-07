import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

const DeleteTodo = ({todoId}) => {

    const { removeTodo } = useContext(TodoContext);
    const [loading, setLoading] = useState(false);

    const handleDeleteTodo = () => {
        setLoading(true)
        removeTodo(todoId);
        setLoading(false)
    }

    return(
        <div>
        <i onClick={() => {handleDeleteTodo()}} class="bi bi-trash"></i>
        {loading && <div className="spinner-border"></div>}
        </div>
    )
}
export default DeleteTodo;