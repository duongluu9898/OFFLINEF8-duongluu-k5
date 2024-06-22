import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { useReducer } from "react";
import { reducer, initialState } from "../../utils/reducer";

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const { todoList } = state;
  const handleAddTodo = (todoName) => {
    //quy ước mỗi todo là 1 object
    /*
    {
    name: "tên todo",
    completed: false
    }

    */
    const todo = {
      name: todoName,
      completed: false,
    };
    dispatch({
      type: "todo/add",
      payload: todo,
    });
  };

  console.log(todoList);
  return (
    <div>
      <TodoList todoList={todoList} />
      <TodoAdd onSubmit={handleAddTodo} />
    </div>
  );
}
