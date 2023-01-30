import React from 'react';
import Button from 'react-bootstrap/Button';

const ButtonComponent = ({handleClick}) => {
  return (
    <Button variant="outline-secondary" onClick={handleClick}>Run Draw</Button>
  )
}
export default ButtonComponent;