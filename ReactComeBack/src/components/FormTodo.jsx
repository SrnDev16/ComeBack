import React from "react";
import { useState } from "react";
import RenderList from "./RenderList";

const FormTodo = () => {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);


  const onSubmit = (e) => {
    e.preventDefault()
    if(!title){
      console.log("error");
      return;
    }else{
      const newTodo ={
        id: Date.now(),
        title: title,
        check: false
      }
      setList([...list, newTodo]);
      setTitle("")
      console.log(list);
    }
  }

  const onDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  }

  const onEdit = (id,title) => {
    setList((list.map((item) => {
      if(item.id === id) {
        return {...item, title: title}
      }else{
        return item;
      }
    })))
  }

  return (
    <div className="bg-indigo-600 h-screen">
      <div className="text-center pt-10 flex flex-col justify-center">
        <h1 className="text-white">Todo List</h1>
        <form onSubmit={onSubmit}>
          <input
            className="rounded"
            type="text"
            name=""
            id=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <button className="bg-red-400 px-4 py-1 mt-4 rounded" type="submit">Add</button>
        </form>
        <br />
         <div className="flex flex-col-reverse">
            {
              list?.map((item) => (
                <RenderList key={item.id} item={item} onDelete={onDelete} Edit={onEdit}/>
              ))
            }
          
         </div>
      </div>
    </div>
  );
};

export default FormTodo;
