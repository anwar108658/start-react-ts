import Couter from "./Couter"
import TodoList from "./TodoList"

const State = () => {
  return (
    <div className='p-2 h-screen grid grid-cols-4 grid-rows-2 gap-2 bg-gray-800 text-white'>
      <Couter/>
      <TodoList/>
    </div>
  )
}

export default State