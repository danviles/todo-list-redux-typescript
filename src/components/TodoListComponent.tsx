
import { useAppSelector } from '../hooks/redux';
import TodoItemComponent from './TodoItemComponent'

const TodoListComponent = () => {
  const { todos } = useAppSelector((state) => state);

  return (
    <div className='flex flex-col justify-center items-center bg-white w-full border border-black'>
      <p className='w-full border border-black text-center'>List</p>
      {todos.map((todo) => (
        <TodoItemComponent key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoListComponent