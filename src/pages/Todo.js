import { useContext, useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";
import FilterTodos from "../components/todos/Filter";

const Todo = () => {
  const { todos, getTodo, error } = useContext(TodoContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      getTodo();
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <div className="spinner-border"></div>}
      {error && <div className="text-danger">{error}</div>}
      <FilterTodos />
      {todos &&
        todos.map((todo) => {
          return (
            <div className="container">
            
              <div className={"col-md-4 mb-3 card" + (todo.completed ? "col-md-4 mb-3 card bg-light" : "")}>
                <div key={todo.id} className="card-body d-flex justify-content-between">
                  {todo.completed ? <del>{todo.title}</del> : <span>{todo.title}</span> }
                  <div className="mr-auto">
                  {todo.completed ? <i class="bi bi-check-all"></i> : <i className="bi bi-check"></i>}
                    <i class="bi bi-trash"></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Todo;
