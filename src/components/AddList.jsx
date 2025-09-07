import React, { useState } from 'react'

export default function AddList({handleTodo}) {
    const [list,setList]=useState("")
    function handleList(){
    // setList(newList)
    handleTodo(list)
    setList("")
    }
  return (
    <div className='mt-5 flex gap-5 flex-col rellative'>
        <div className='flex gap-5' >
          <input type="text" className='border  bg-white text-black w-full py-2 px-2 text-lg font-semibold 
        rounded-lg' placeholder='add list' value={list} onChange={(e)=>setList(e.target.value)}/>
        <button className='bg-green-500 py-2 px-5 rounded-lg' onClick={handleList}>Add</button>
      
        </div>
      
    </div>
  )
}
