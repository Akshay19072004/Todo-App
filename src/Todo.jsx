import React, {useState , useRef , useEffect } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {

const [todoList,setTodoList]=useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);

const inputRef= useRef();
useEffect(()=>{localStorage.setItem("todos", JSON.stringify(todoList));
},[todoList]);



//Add Task
const addTask = () => {

 const inputText = inputRef.current.value.trim();
    
    if(inputText === ""){
        return null;
    }

    const newTodo = {
     id:Date.now(),
     text:inputText,
     isComplete:false,

    };

 
    setTodoList((prev)=>[...prev,newTodo]);
    inputRef.current.value="";

};

//Update Task

const toggleTask =(id) =>{
   
    setTodoList((prev)=>{
       return prev.map((todo)=>{
            if(id===todo.id){
               return {...todo, isComplete:!todo.isComplete}; 
            }
        return todo;
        });
    });
   
};

//Delete Task
const deleteTodo =(id) => {
    setTodoList((prev)=>{
        return prev.filter((todo) => todo.id !==id);
    });
};

 return(
<>
    <div className=" w-[30-rem]">
        <h1 className="text-lg my-2 font-medium text-amber-500 py-4">Todo-List</h1>
       <div>
         <div className="flex gap-2">
            <div className="flex-1">  
              <input ref={inputRef}
              className="w-[30-rem] px-4 py-3 border focus:outline-none focus:border-amber-500 "
              type="text"
              placeholder="Enter the Task"
               />
            </div>
           <button className="text-white bg-blue-700  rounded-sm p-2 text-sm " onClick={addTask}>Add Task</button>
         </div>
         <p className="text-zinc-500 my-3 px-1 ">Fill the List</p>
       </div>
      <div className=" w-[30-rem] bg-white px-6 py-4 shadow " >
        <fieldset>
            <legend className="text-red-600 font-medium " >Title</legend>
               {/*START*/}

            {todoList.length === 0?(
                <p className="text-zinc-500 my-3 px-1 ">No Task</p>
            ):(
                todoList.map((todo,index)=>{
                    return < TodoItem text={todo.text} key={index} isComplete={todo.isComplete} id={todo.id} toggleTask={toggleTask} deleteTodo={deleteTodo}/>;
                })
            )}

               {/*END*/}
        </fieldset>
      </div>
    </div>
   
  
</>
);

};

export default Todo;


