const TodoReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOS":
      console.log(action);
      return {
        ...state,
        todos: action.payload
      };
      case "SET_FILTERTODOS":
        console.log(action);
        return {
          ...state,
          todos: action.payload
        };
        case "ADD_TODO":
          console.log(action);
          return {
            ...state,
            todos: [action.payload, ...state.todos]
          };
          case "UPDATE_TODO":
            console.log(action);
            return {
              ...state,
              todos: state.todos.map(todo => todo.id === action.payload.id ? {...todo, completed : action.payload.completed} : todo)
            };
      case "SET_ERROR":
        return {
          ...state,
          error: action.payload
        };
    default:
      return state;
  }
};
export default TodoReducer;
