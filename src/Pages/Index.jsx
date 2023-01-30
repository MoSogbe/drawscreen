import React from 'react';
import '../Styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Index = () => {
  // const handleClick = (event) => {
  //   console.log(event.target.innerText + " clicked");
  // }

  return (
    
      <div className="container-fluid mt-5">
       
        <ul className="list-group list-group-flush mx-auto  content" style={{maxWidth: "900px"}}>
        <h1 className="text-center text-white">Nestle Nokofio App</h1>
        <p className="text-center text-white">Here is a list of draws today:</p>
        <ListGroup as="ol" numbered >
      <ListGroup.Item
        as="li"
        className="d-flex  justify-content-between align-items-start mb-1 "
      >
        <div className="ms-2 me-auto me-5">
          <div className="fw-bold me-5" style={{width:'500px'}}>Subheading </div>
        hhh
        </div>
        <Badge bg="outline-secondary" pill>
         <Link to='/draw_screen'>
        <button className="btn btn-outline-primary">Run Draw
        </button>
         
         </Link>
          
        {/* <ButtonComponent buttonNumber={1} handleClick={handleClick}/> */}
        </Badge>
      </ListGroup.Item>
     
    </ListGroup>
        </ul>
      </div>
    
  );
};

export default Index;
