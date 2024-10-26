import { useState } from "react";

function App() {
 let [counter,setCounter]=useState(15);
  const addValue = () => {
    counter =counter+1;
    if (counter<=20)
  {  setCounter(counter);}
    console.log("clicked");
    
  };
  const subValue=()=>{
    counter =counter-1;
    if (counter>=0)
    {
      setCounter(counter)
    }
    
    console.log("clicked");
  }
  return (
    <>
      <h1>React </h1>
      <h2>Counter value: {counter}</h2>
      <br />
      <button onClick={addValue}>Add value</button>
      <button onClick={subValue}>remove value</button>
    </>
  );
}

export default App;
