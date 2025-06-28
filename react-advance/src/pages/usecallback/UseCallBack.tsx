import { useCallback, useState } from "react";
import Header from "./header";

const UsecallBackDemo = () => {
  const [count, setCount] = useState(0);

//----------freeze----------
//   const getarg = useCallback(()=>{
//     return "Another fine day" + count;
//   },[])

  //--------dynamic----------
  const getarg = useCallback(()=>{
    return "Another fine day" + count;
  },[count])

  return (
    <div>
      <Header arg={"fine"} getarg={getarg}/>
      <h1>useCallback</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default UsecallBackDemo;
