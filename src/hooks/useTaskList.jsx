import { useState } from 'react'
import { listWork } from '../Tasks/listTask'

const listWorked = listWork

export const useTaskList = () => {
  const [taskList, setTaskList] = useState([...listWorked])
  const handleAddItem = (text, link) => {
    const addItem = {
      id: crypto.randomUUID(),
      text,
      done: false,
      link,
    }

    setTaskList(prevItems => {
      return [...prevItems, addItem]
    })
  }

  const removeTask = id => {
    setTaskList(prevItems => prevItems.filter(item => item.id !== id))
  }

  const checkboxChange = id => {
    setTaskList(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    )
  }

  return { taskList, handleAddItem, removeTask, checkboxChange }
}
