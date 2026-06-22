import { useState, type ChangeEvent } from "react"
import Button from "../../components/Button"

const TodoList = () => {
  const [todo, setTodo]:any[] = useState([])
  const [value, setValue] = useState('')

  const inputHandler = (e:ChangeEvent<HTMLInputElement>) =>{
    console.log(e.target)
    setValue(e.target.value)
  }
  const clickHandler = (e:any) =>{
    e.preventDefault()
    if (value.trim() !== "") {
      setTodo([...todo,{id:Math.random(),todoName:value}])
      setValue('');
    }else setValue('')
  }
  return (
<div className="flex flex-col gap-4 relative rounded overflow-auto bg-gray-900 p-4">
  
  <form className="sticky  top-0 w-full flex justify-center gap-2">
    <input 
      type="text" 
      value={value} 
      onChange={inputHandler} 
      className="bg-gray-800 text-[.9rem] text-white outline-none px-2 rounded-md" 
    />
    {/* Note: changed label to a string to match the "Add" button design */}
    <Button label={"Add ➕" as any} click={clickHandler} />
  </form>

  {/* The list now flows cleanly directly underneath the form */}
<ul className="text-white space-y-1 mt-2">
  {todo.length > 0 ? (
    todo.map((val:any) => (
      <li
        key={val.id}
        className="flex justify-between bg-gray-800/50 px-2 text-[.9rem] text-green-500 rounded-md"
      >
        <div>{val.todoName}</div>

        <button
          className="text-[.5rem]"
          onClick={() =>
            setTodo((prevTodo:any) =>
              prevTodo.filter((valto:any) => valto.id !== val.id)
            )
          }
        >
          ❌
        </button>
      </li>
    ))
  ) : (
    <p className="text-[.8rem]">No data found⚠️</p>
  )}
</ul>

</div>

  )
}

export default TodoList