import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

function FilterOptions({ setFilter }) {
  return (
    <ButtonGroup>
      <Button variant="secondary" onClick={() => setFilter('all')}>All</Button>
      <Button variant="success" onClick={() => setFilter('completed')}>Completed</Button>
      <Button variant="danger" onClick={() => setFilter('notCompleted')}>Not Completed</Button>
    </ButtonGroup>
  );
}

export default FilterOptions;
