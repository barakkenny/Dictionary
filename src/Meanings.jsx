import React from 'react';
import './App.css'

const Meanings = ({call}) => {
    
  return (
    <div className='meanings'>
        {call.meanings.map((meaning)=> (
            meaning.definitions.map((def)=> (
               <div className='definition'>
                <p>Meaning: {def.definition}</p>
                
               </div>
            ))
        ))}
    </div>
  )
}

export default Meanings
