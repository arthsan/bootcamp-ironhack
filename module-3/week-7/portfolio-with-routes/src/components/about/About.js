
import React from 'react';
import Experience from './../experiences/Experiences';
import Education from './../education/Education';

const about = () => {
  return (
    <div>
      <div style={{width: '40%', float:"left"}}>
        <Education/>
      </div>
      <div style={{width: '60%', float:"right"}}>
        <Experience />
      </div>
    </div>
  )
}

export default about;