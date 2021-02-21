import {useState, useEffect} from 'react';
import { getTodos } from "./Data/Todos/TodoServices";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos(response => setTodos(response))
  }, [setTodos]);

  return (
    <div className="App">
      <h1>Todos</h1>
      <ul>
        { todos.map(todo => <li key={todo.id}>{todo.title}</li>) }
      </ul>
    </div>
  );
}

export default App;
