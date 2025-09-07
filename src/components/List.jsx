

export default function List({todo,handleDelete,handleCheckBox,filter}) {
  // console.log(todo);
   let sortedData;
  //  const [sortedData,setSortData]=useState([])
  //  console.log("dfff",sortedData);
  //   useEffect(() => {
  //   setSortedData([...todo]); 
  // }, [todo]);
    if(filter==='input'){
      // console.log('in'); 
     sortedData=todo
    }
    else if(filter==='packed'){
      // console.log('packed');
      sortedData=todo.slice().sort((a,b)=>Number(a.completed)-Number(b .completed))
      
    }
    else if(filter==='description'){
      // console.log('des');
      sortedData=todo.slice().sort((a,b)=>a.task.localeCompare(b.task))
      
    }
  //  setSortedData([...todo])
  //  {id:1,task:'gggg',completed: false}
  return (
    <div className='flex flex-col gap-3 mt-5'>
        {sortedData?.map((items)=>
     
     <p className="flex justify-between items-center bg-gray-100 py-1 px-2 w-full rounded-lg" key={items.id}>
  <input
    type="checkbox"
    onChange={()=>handleCheckBox(items.id)}
    value={items.completed}
    className="mr-2 w-4 h-6 accent-blue-500 "
  />
  <span className={`text-xl flex-1 capitalize ${items.completed?'line-through':' '}`} >{items.task}</span>
  <button
    
    className="bg-red-500 py-1 px-3 rounded-full font-bold text-white"
    onClick={()=>handleDelete(items.id)}
  >
    X
  </button>
</p>

    )}
    </div>
  )
}
