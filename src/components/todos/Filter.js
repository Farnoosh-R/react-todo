import { useContext, useEffect, useState } from "react";
import TodoContext from "../../context/TodoContext";


const FilterTodos = () => {

    const { getFilterTodo } = useContext(TodoContext);
    const [loading, setLoading] = useState(false);

    const handleFilter = (e) => {
        setLoading(true);
        getFilterTodo(e);
        setLoading(false);
    }

  return (
    <div className="container">
      <div className="col-md-2">
        <div className="row">
          <select onChange={(e) => handleFilter(e.target.value)} className="form-select">
            <option value="200">all</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
          {loading && <div className="spinner-border"></div>}
        </div>
      </div>
    </div>
  );
};
export default FilterTodos;
