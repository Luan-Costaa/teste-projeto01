import React, {useState} from 'react';
import './App.css';

function App() {
const[titulo,setTitulo] = useState("Parça");
  return (
    <div className='container'>
      <div>
        <h1>{titulo}</h1>
        <button onClick={function(){setTitulo("O bagui ta on kkk")}}>Alterar</button>
      </div>
    </div>
  );
}

export default App;
