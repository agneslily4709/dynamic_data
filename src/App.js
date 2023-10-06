import React, { useState } from "react";

export default function App() {

  const [value, setValue] = useState(0)
const handleCount = () => {
        setValue((prev)=>prev+1)
}
  return (
    <div>
      <h4>{`Counter Value: ${value}`}</h4>
      <Counter handleCount={handleCount}/>
    </div>
  );
}


const Counter = ({handleCount}) => {

  return (
    <button onClick={handleCount}>Counter</button>
  )

}
