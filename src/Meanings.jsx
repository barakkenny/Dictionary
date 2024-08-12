import React from 'react';
import './App.css'

const Meanings = ({call}) => {
  let i = 0;
  const add =()=> {
    i++
  }
  return (
    <div className='meanings'>
        {call.meanings.map((meaning)=> (
            meaning.definitions.map((def,i)=> (
               <div className='definition' key={i}>
                <p>Meaning: {def.definition}</p>
               </div>
            ))
        ))}
    </div>
  )
}

export default Meanings
