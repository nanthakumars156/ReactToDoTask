import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function AddTodoForm({ addTodo }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) return;
    addTodo({
      name: taskName,
      description: taskDescription
    });
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Enter task description"
        />
      </Form.Group>
      <Button variant="primary" type="submit">Add Todo</Button>
      
    </Form>
  );
}

export default AddTodoForm;
