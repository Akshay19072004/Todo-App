import React from "react";

const TodoList = ({text , isComplete , id , toggleTask , deleteTodo }) =>{
 
    return(
  
    <>
      
      <div className="flex justify-between gap-2 items-center " >
            <label className={`py-3 select-none hover:bg-slate-200 flex-1 rounded-sm ${isComplete?"line-through text-slate-500 ":"" }`} onClick={ () => toggleTask(id) } >{text}</label>
                 <div onClick={()=> deleteTodo(id)}>
                    <svg className=" px-1 cursor-pointer rounded-md hover:bg-slate-200 hover:fill-red-700" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                 </div>
      </div>
      
    </>

    );

};

export default TodoList;