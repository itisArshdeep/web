import React, { useState } from 'react';
import './Input.css'

const Input = () => {

  const [Task,SetTask]=useState('');
  const [Main,MainTask]=useState([]);

  const delet =(i)=> {
        let copy = [...Main];
        copy.splice(i,1);
        MainTask(copy)
      }
  const handler = (e)=>{
    e.preventDefault();
    SetTask('')
    MainTask([...Main,{Task}])
    console.log(Main)
    console.log(Task)
  }

  let render = <h2>nothing yet!</h2>
  if(Main.length>0){
    render = Main.map((e,i)=>{
      return <li key={i}><h2>{e.Task}</h2> <button id='remove' onClick={()=>{
        delet(i)
      }}>Delete</button></li>
    })
  }
  return (
    <>
    <form action="submit" onSubmit={handler}>
      <input  type="text" value={Task} placeholder='Enter Text here' onChange={(e)=>{
        SetTask(e.target.value);
      }} />
      <button id='btn' type='submit'>enter</button>
    </form>
    <hr />
    <ul>
      {render}
    </ul>
    </>
  )
}

export default Input