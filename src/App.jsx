import { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from "uuid";


function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState({ name: "" })
  const [error, setError] = useState("")
  const [editId, setEditId] = useState(null)


  const addTodo = () => {

    if (todo.name.trim() === "") return

    if (editId) {

      const updatedTodos = todos.map((item) =>

        item.id === editId
          ? { ...item, name: todo.name }
          : item
      )

      setTodos(updatedTodos)

      setEditId(null)

    } else {

      setTodos([
        ...todos,
        {
          id: uuidv4(),
          name: todo.name,
          isCompleted: false
        }
      ])
    }

    setTodo({ name: "" })
  }

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value })
  }

  const handleCheckbox = (index) => {

    const newTodos = [...todos]

    newTodos[index].isCompleted =
      !newTodos[index].isCompleted

    setTodos(newTodos)
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter((item) =>
      item.id !== id
    )
    setTodos(newTodos)
  }

  const handleUpdate = (item) => {

    setTodo({
      name: item.name
    })

    setEditId(item.id)
  }
  return (
    <>
      <Navbar />
      <div className='bg-slate-200 p-4 h-screen'>
        <h2 className='font-bold text-blue-800 mb-2.5'>Add a Todo</h2>
        <div className='mb-4.5'>
          <input name='name' value={todo.name} type="text" className='p-2 bg-white w-[53%] h-8' onChange={handleChange} />
          <button
            className='bg-blue-800 text-white font-semibold px-4 py-1 rounded hover:bg-blue-950'
            onClick={addTodo}
          >
            {editId ? "Update" : "Add"}
          </button>
          {error && (
            <p className='text-red-500 font-semibold mt-2'>
              {error}
            </p>
          )}
        </div>
        <div className='flex flex-col'>
          {todos.map((item, index) => (
            <div key={item.id} className='mb-3 flex justify-between max-w-3xl'>
              <h4
                className={`font-semibold text-blue-800 ${item.isCompleted ? "line-through text-gray-500" : "text-blue-800"
                  }`}
              >
                {item.name}
              </h4>
              <div className='flex gap-4'>
                <input type="checkbox" checked={item.isCompleted} id="" onChange={() => handleCheckbox(index)} className='w-5' />
                <button className='bg-green-500 px-4 py-1 rounded-2xl font-semibold text-white' onClick={() => handleUpdate(item)}>Edit</button>
                <button className='bg-red-500 px-4 py-1 rounded-2xl font-semibold text-white' onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
