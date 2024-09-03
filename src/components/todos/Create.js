import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

const CreateTodo = () => {

    const [title, setTitle] = useState('');
    const { addTodo } = useContext(TodoContext);
    const [loading, setLoading] = useState(false);
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (title){
            setLoading(true);
            addTodo(title);
            setLoading(false);
        }
        
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
        <div className="container">
        <h2>create todo:</h2>
        <div className="row">
        <div className="col-md-4">
        <input onChange={(e) => setTitle(e.target.value)} className="w-100" type="text" placeholder="todo title"/>
        <div className="text-danger">
        {title ? '' : "required"}
        </div>
        </div>
        <div className="col-md-4">
        <button type="submit" className="btn btn-dark">
        Create
        {loading && <div className="spinner-border"></div>}
        </button>
        </div>
        </div>
        </div>
        </form>
    )
}
export default CreateTodo;