import React, { useState } from 'react';
import { Card, Button, Dropdown } from 'react-bootstrap';

function TodoCard({ todo, deleteTodo, editTodo, changeStatus }) {
  const [showEdit, setShowEdit] = useState(false);
  const [newName, setNewName] = useState(todo.name);
  const [newDescription, setNewDescription] = useState(todo.description);

  // Handle Edit functionality
  const handleEdit = () => {
    editTodo(todo.id, { name: newName, description: newDescription });
    setShowEdit(false);
  };

  return (
    <Card className='Cardcontainer'>
      <Card.Body>
        <Card.Title>
          {showEdit ? (
            <input 
              type="text" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)} 
            />
          ) : (
            todo.name
          )}
        </Card.Title>
        <Card.Text>
          {showEdit ? (
            <textarea 
              value={newDescription} 
              onChange={(e) => setNewDescription(e.target.value)} 
            />
          ) : (
            todo.description
          )}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Dropdown>
            <Dropdown.Toggle variant="secondary">
              {todo.status === 'completed' ? 'Completed' : 'Not Completed'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeStatus(todo.id, 'completed')}>Completed</Dropdown.Item>
              <Dropdown.Item onClick={() => changeStatus(todo.id, 'notCompleted')}>Not Completed</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div>
            <Button variant="warning" onClick={() => setShowEdit(!showEdit)}>
              {showEdit ? 'Save' : 'Edit'}
            </Button>
            <Button variant="danger" onClick={() => deleteTodo(todo.id)}>
              Delete
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TodoCard;
