import React, { useState, useEffect } from 'react';
import "../Styles/draw.css"

const App = () => {
  const [showDivs, setShowDivs] = useState(false);
  // const [divs, setDivs] = useState([]);

  // useEffect(() => {
  //   let divArr = [];
  //   for (let i = 0; i < 10; i++) {
  //     divArr.push( <div key={i} style={{textAlign: "center",color:"white",height:"60px",width:"100px",backgroundColor:"red",padding: "10px"}}>Draw {i + 1}</div>)
  //   }
  //   setDivs(divArr);
  // }, [showDivs])

  return (
    <div className="container-fluid mt-5 draw_main">
      {showDivs ? "" : <button className='btn btn-warning btn-lg text-white' style={{marginTop: "5%"}} onClick={() => setShowDivs(!showDivs)}>Run Draw</button>}
      
    <div className="list-group list-group-flush mx-auto  content" style={{width: "80vw"}}>
   
    <div  className='draw_main'>
      {showDivs && 
      <div className='draw_container'>
        <div className="draw_item">
          <h4>Draw 1</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 2</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 3</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 4</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 5</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 6</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 7</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 8</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 9</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 10</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 11</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 12</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>

        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>

        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
        <div className="draw_item">
          <h4>Draw 13</h4>
        </div>
     
      </div>
      
      
      }
    </div>
    </div>
  </div>
  );
};

export default App;
