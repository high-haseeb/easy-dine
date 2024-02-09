"use Clint"
import React, { useState } from 'react';


function ToggleSwitch({ width, height }) {

    const[bgCol,setbgCol]=useState('#2a2f56');
    const[position,setposition]=useState('justify-start')
    const toggel=()=>{
    return(
        bgCol==='#2a2f56'?setbgCol('#0075FF'):setbgCol('#2a2f56'),
        position==='justify-start'?setposition('justify-end'):setposition('justify-start')
    )
}


  return (
    <div className={`flex w-[${width}px] h-[${height}px] rounded-[12px] border-[1px] bg-[${bgCol}] p-1 ${position}`} onClick={toggel}>
      <div className="cursor-pointer bg-white w-[13.5px] h-[13.5px] rounded-[10px]"></div>
    </div>
  );
}

export default ToggleSwitch;

