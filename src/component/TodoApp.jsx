import React, { useState } from 'react';
import { Button, Card, Dropdown, Form, ButtonGroup } from 'react-bootstrap';
import TodoCard from './TodoCard';
import AddTodoForm from './AddTodoForm';
import FilterOptions from './FilterOptions';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // 'completed', 'notCompleted', 'all'

  // Add Todo function
  const addTodo = (task) => {
    setTodos([
      ...todos,
      { id: Date.now(), name: task.name, description: task.description, status: 'notCompleted' }
    ]);
  };

  // Delete Todo function
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Edit Todo function
  const editTodo = (id, updatedTask) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, ...updatedTask } : todo
    ));
  };

  // Change Todo status
  const changeStatus = (id, status) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, status } : todo
    ));
  };

  // Filter Todos
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.status === 'completed';
    if (filter === 'notCompleted') return todo.status === 'notCompleted';
    return true; // for 'all'
  });

  return (
    <div className="container mt-5">
      {/* Header Section */}
      <h1 className="text-center mb-4" style={{color: "green"}}>My Todo</h1>
      
      {/* Filter Section */}
      <div className="mb-4 text-center">
        <FilterOptions setFilter={setFilter} />
      </div>

      {/* Add Todo Form */}
      <div className="mb-4">
        <AddTodoForm addTodo={addTodo} />
      </div>

      {/* Todo Cards List */}
      <div className="row">
        {filteredTodos.map(todo => (
          <div className="col-md-4 mb-4" key={todo.id}>
            <TodoCard 
              todo={todo} 
              deleteTodo={deleteTodo} 
              editTodo={editTodo} 
              changeStatus={changeStatus} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
