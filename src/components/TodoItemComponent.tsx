import { useAppDispatch } from "../hooks/redux";
import { TodoState } from "../redux/slices/todos";
import { deleteTodo } from "../redux/slices/todos";
import Swal from 'sweetalert2'

interface Props {
  todo: TodoState
}

const TodoItemComponent = ({ todo }: Props) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        dispatch(deleteTodo(id))
      }
    })
  }

  return (
    <div
      className="flex justify-between items-center w-full p-2 border border-black flex-wrap"
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
