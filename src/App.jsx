import Hello from "./Hello";
import KgButton from "./KgButton";
import Random from "./Random";
import { useState } from "react";
import Input from "./assets/Input";

function App() {

  const [change ,setChange] = useState("new word Enter");

  const [counter , setCounter] = useState(10)

  const handleOnIncrease =() =>{
      setCounter(counter + 1)
  }

  const handleOnDacrease =() =>{
       setCounter(counter - 1)
  }

  const hadleOnChange= () =>{
    console.log(event.target.value)
    setChange(event.target.value)
}
  
  return (
    <>
      <h1>this is the counter Topic  {counter}</h1>
      <button onClick={handleOnIncrease}>clicked to increase</button>
      <br></br>
      <br></br>
      <button onClick={handleOnDacrease}>clicked to Decrease</button>

      <div>
        <h1>This is the best App</h1>

        <KgButton></KgButton>

        <Hello></Hello>

        <Random></Random>
        <Random></Random>
        <Random></Random>
        <Random></Random>
        <Random></Random>

       <Input hadleOnChange={hadleOnChange}></Input>
       <h3>{change}</h3>
      </div>
    </>
  );
}

export default App;
