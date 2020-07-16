import { uniqueId } from "lodash";

const todos = (
  state = [
    { id: uniqueId(), text: "Comida", completed: false },
    { id: uniqueId(), text: "Cerveza", completed: false }
  ],
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

export default todos;
