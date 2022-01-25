
import React, { useEffect, useState } from 'react';

function Counter({functionText}) {
    const [counter, setCounter] = useState(0);
    // const [input, setInput] = useState( {name:"",age:"",email:""} );
    const [input, setInput] = useState({});
    console.log(input);
    // constructor (){
      // super(pros)
      // this.state={counter:0} == counter (hook)
    useEffect(() => {
       
    }, [counter]);
    
  return <div>
      {/* <h1> hello {input.name} {input.age} </h1> */}
      <button onClick={()=>counter && setCounter(counter-1)}  > - </button>
      <h1> {counter} </h1>
      <button onClick={()=>setCounter(counter+1)} > + </button>
      <div>
        <label> name:  </label>
        <input type="text" onChange={(e)=>setInput({...input,name:e.target.value})} />
        <label> age:  </label>
        <input type="number" onChange={(e)=>setInput({...input,age:e.target.value})}/>
        <label> email:  </label>
        <input type="email" onChange={(e)=>setInput({...input,email:e.target.value})}/>
        <button onClick={()=>functionText(input)} > submit </button>
      </div>
  </div>;
}

export default Counter;



