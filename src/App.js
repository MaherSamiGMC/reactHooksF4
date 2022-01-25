import React, { useState } from 'react';
import Counter from './component/Counter';

function App() {
  const [show, setShow] = useState(true);
  const [text, setText] = useState({name:"",age:"",email:""});
  const handleText=(x)=>{
    setText(x)
  }
  return <div>
    <h1> hello {text.name} {text.age} </h1>
{    show && <Counter functionText={handleText} />
}  
  <button onClick={()=>setShow(!show)} > Show | hide </button>

</div>;
}

export default App;
