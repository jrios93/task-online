import { useEffect, useState } from 'react'
import './App.css'

import { Tasks } from './components/Tasks'
import { useSEO } from './hooks/useSEO'
import { useTaskList } from './hooks/useTaskList'
import { FaRegCircleCheck } from 'react-icons/fa6'

const link = ''

const App = () => {
  const { taskList, handleAddItem, removeTask, checkboxChange } = useTaskList()
  const [hourNow, setHourNow] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHourNow(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  function hour() {
    const hour = hourNow.getHours()
    const minute = hourNow.getMinutes()
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const formattedHours = hour % 12 || 12

    return `${formattedHours}:${minute < 10 ? '0' : ''}${minute} ${ampm}`
  }

  const hourtimeReal = hour()

  useSEO({
    title: `[${taskList.length} Tareas pendientes]`,
    description: 'Añadir y eliminar elementos de una lista',
  })

  const handleSubmit = event => {
    event.preventDefault()

    const { elements } = event.currentTarget
    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return

    handleAddItem(input.value, link)
    input.value = ''
  }

  const handleDeleteTask = id => {
    removeTask(id)
  }

  const handleCheckboxChange = id => {
    checkboxChange(id)
  }

  const completedTasks = taskList.filter(item => item.done).length
  return (
    <div className=" h-auto w-screen p-16 bg-slate-950 text-slate-50 font-roboto">
      <div className="flex justify-between">
        <div className=" p-6 flex flex-col gap-20">
          <p className="text-3xl flex gap-2 items-center">
            <FaRegCircleCheck /> TodoApp
          </p>
          <p className="text-8xl font-orbitron">{hourtimeReal}</p>
        </div>
        <div className="p-6 flex flex-col gap-2 border-slate-500 border-2 rounded-lg h-full">
          <div className="flex justify-between mb-6 ">
            <p className="text-xl">Todo List</p>
            <p className="border rounded-lg px-2 ">{`${completedTasks}/${taskList.length}`}</p>
          </div>
          <p className="text-3xl mb-6">Hola Diego 👋</p>
          <ul className="flex flex-col gap-6 w-full mb-6">
            {taskList.map(item => {
              return (
                <Tasks
                  {...item}
                  key={item.id}
                  handleCheckboxChange={() => handleCheckboxChange(item.id)}
                  handleDeleteTask={() => handleDeleteTask(item.id)}
                />
              )
            })}
          </ul>
          <form className="form-input" onSubmit={handleSubmit}>
            <label style={{ width: '100%' }}>
              <input
                name="item"
                type="text"
                placeholder="¿Que hay que hacer?"
                className="w-full rounded-xl bg-transparent border-gray-500 border p-3 relative"
              />
              <button className=" absolute border rounded-xl p-2 -ml-20 mt-1 bg-gray-500">
                Agregar
              </button>
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
