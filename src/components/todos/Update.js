import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";


const UpdateTodo = ({todo}) => {

    const { updateTodo } = useContext(TodoContext);
    const [loading, setLoading] = useState(false);

const handleUpdate = () => {

    setLoading(true);
    updateTodo(todo);
    setLoading(false);
}

    return(
        <div className="d-inline-block">
        {todo.completed ? <i onClick={() => handleUpdate()} class="bi bi-check-all"></i> : <i onClick={() => handleUpdate()} className="bi bi-check"></i>}
        {loading && <div className="spinner-border"></div>}
        </div>
    )
}
export default UpdateTodo;