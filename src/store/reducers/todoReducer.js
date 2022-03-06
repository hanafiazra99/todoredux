const initialState = {
  todos: [
    
  ],
};
const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case "DEL":
      console.log(payload)
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.title !== payload),
      };
    default:
      return {
        ...state,
      };
  }
};
export default todoReducer;
