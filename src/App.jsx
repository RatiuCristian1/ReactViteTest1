import { useEffect, useState } from 'react'
import './index.css'
import NewTododsForm from './NewTodosForm'
import TodoList from './TodoList'

export default function App() {

  const [todos, setTodods] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue === null) return []

    return JSON.parse(localValue)

  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodods(currentTodos => {
          return [
          ...currentTodos, 
          { id: crypto.randomUUID(), title, completed: false },
          ]
        })
  }

  function toggleTodo(id, completed) {
    setTodods(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodods(id) {
    setTodods(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return ( 
    <div className='container'>
      <NewTododsForm onSubmit={addTodo} />
      <h1 className='header'>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodods={deleteTodods} />
    </div>
  )
}
