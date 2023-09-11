import './index.css';
import { useEffect, useState } from 'react';
import { NewForm } from './NewForm';
import { FullList } from './FullList';

export default function App() {
  // return [value, function to upd value]
  // const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localVal = localStorage.getItem("ITEMS");

    if (localVal == null) 
      return [];

    return JSON.parse(localVal);
  });

  // everytime todos change, call this function
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addNewItem(title: string) {
    setTodos((currentTodos): any => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }

  function toggleTodo(id: number, completed: boolean) {
    setTodos((currentTodos): any => {
      return currentTodos.map(todo => {
        if (todo.id === id)
          return { ...todo, completed }

        return todo;
      })
    })
  }

  function deleteTodo(id: number) {
    setTodos((currentTodos): any => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }

  return (
    <>
      <NewForm onSubmit={addNewItem} />
      <h1 className='header'>FULL LIST</h1>
      <FullList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

class Todo {
  id: number;
  completed: boolean;
  title: string;

  constructor(id: number, completed: boolean, title: string) {
    this.id = id;
    this.completed = completed;
    this.title = title;
  }
}