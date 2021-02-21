import {useState, useEffect} from 'react';
import { getTodos } from "./Domains/Todos/TodoServices";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(response => setTodos(response.data));
  }, [setTodos])

  return (
    <div className="App">
      <h1>Todos</h1>
      <ul>
        { todos.map(todo => <li>{todo.title}</li>) }
      </ul>
    </div>
  );
}

export default App;
