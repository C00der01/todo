import React, { useState } from 'react'
import AddList from './AddList'
import List from './List'

export default function MainTodo() {
    const[todo,setTodo]=useState([])
    const [filter,setFilter]=useState('input');
    // const [sortData,setSortData]=useState([])
   
    console.log("todo",todo);
   
    
  
    
  
    
    function handleTodo(newTodo){
      // setTodo([...todo,newTodo])
      // console.log(newTodo);
      // setSortData([...todo])
      if(!newTodo) return;
      let todoItem={task:newTodo,id:todo.length+1,completed:false}
      setTodo([...todo,todoItem])
    }
    function handleDelete(id){
      setTodo(todo.filter((item)=>item.id!==id))
    }
    function handleCheckBox(id){
      setTodo(todo.map((item)=>item.id===id?{...item,completed:!item.completed}:item))
      // console.log(id);
      
    }
  return (
    <div className='w-full h-full sm:w-4/12 bg-gray-900 sm:h-[600px] flex flex-col px-10 py-10 rounded-lg shadow-lg relative'>
        <h1 className='text-4xl uppercase text-center font-bold text-white'>Todo Application</h1>
        <AddList handleTodo={handleTodo}/>
        <List todo={todo} handleDelete={handleDelete} handleCheckBox={handleCheckBox} filter={filter}/>

          <div className="text-white absolute bottom-25 sm:bottom-5">
    <select className="bg-black text-white p-2 rounded" value={filter} onChange={(e)=>setFilter(e.target.value)}>
        <option value="input">By Input</option>
        <option value="packed">By Packed</option>
        <option value="description">By Description</option>
    </select>
</div>

    </div>
  )
}
