import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a Todo List App' },
    { id: 3, text: 'Profit' }
  ]);

  const addTodo = text => {
    setTodos([...todos, { id: todos.length + 1, text }]);
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

