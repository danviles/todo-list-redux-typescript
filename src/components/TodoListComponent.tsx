
import { useAppSelector } from '../hooks/redux';
import TodoItemComponent from './TodoItemComponent'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const TodoListComponent = () => {
  const { todos } = useAppSelector((state) => state);
  const [parent] = useAutoAnimate()

  return (
    <div className='flex flex-col justify-center items-center bg-white w-full border border-black'>
      <p className='w-full border border-black text-center'>List</p>
      <div ref={parent} className='w-full'> 
      {todos.map((todo) => (
        <TodoItemComponent key={todo.id} todo={todo} />
      ))}
      </div>
    </div>
  )
}

export default TodoListComponent