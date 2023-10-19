import { useAppDispatch } from "../hooks/redux";
import { Todo } from "../redux/slices/todos";
import { deleteTodo } from "../redux/slices/todos";

interface Props {
  todo: Todo
}

const TodoItemComponent = ({ todo }: Props) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div
      className="flex justify-between items-center w-full p-2 border border-black"
      style={{backgroundColor: `${todo.color}`}}
    >
      <p>{todo.name}</p>
      <button 
        className="bg-white rounded-lg px-2 shadow hover:bg-slate-100"
        onClick={() => handleDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItemComponent;
