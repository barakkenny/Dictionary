import React, { useEffect, useState } from 'react';
import './App.css';
import Meanings from './Meanings';

const App = () => {
  const [text, setText] = useState("");
  const [callData, setCallData] = useState([]);
  
 
  

  const handleClick = (e) => {
    e.preventDefault();    
    setText(text);
      
  }

  const dictionaryData = async () => {
    try{
     await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
    .then(res => res.json())
    .then(data => {
      setCallData(data)
      console.log(data)
      
    })
  } catch (error) { 
    console.log(error)
  }
  } 
 
  useEffect(()=> {
    dictionaryData();
  },[text])

 
  
  return (
    <div className='app'>
    
      <h1>{text? text : "Word Dictionary"}</h1>
        
      <div className="search">
        <input 
        value={text} 
        onChange={e => setText(e.target.value) } 
        type="text" 
        placeholder='Search a Word'
        />
        <button onClick={handleClick}>Search</button>
      </div>

      <div className="content">
        {callData.map(call => 
        <div  >
          {call.phonetics.map(phone => (
            <div className='audio'>
             
             <audio controls src={phone.audio}></audio>
             </div>
          ))}
        <Meanings call={call}/>

        </div>
        )}
      </div>
      </div>
  )
}

export default App
