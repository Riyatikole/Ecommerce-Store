import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loader() {
  return (
    <div>
        <div>
      <Spinner
    animation ='border'
    role='status'
    stype={{
        height:'100px',
        width:'100px',
        margin:'auto',
        dispaly:'block'
    }}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
    </div>
      
    </div>
  )
}

export default Loader
