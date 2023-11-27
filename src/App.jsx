import './App.css'

import { Tasks } from './components/Tasks'
import { useTaskList } from './hooks/useTaskList'

const link = ''

const App = () => {
  const {taskList, handleAddItem, removeTask, checkboxChange} = useTaskList()
  

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
  return (
    <>
      <h1>Todo List</h1>
      <form className="form-input" onSubmit={handleSubmit}>
        <label style={{ width: '100%' }}>
          <input
            name="item"
            type="text"
            style={{
              padding: '1.5em 2em',
              width: '100%',
              position: 'relative',
            }}
          />
        </label>
        <button style={{ position: 'absolute', marginLeft: '40%' }}>
          Agregar
        </button>
      </form>
      <ul>
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
    </>
  )
}

export default App
