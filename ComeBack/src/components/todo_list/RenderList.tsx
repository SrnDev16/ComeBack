import { useState } from "react";
import { Todo } from "./FormTodo";

interface RenderProps {
  title: string;
  id: string;
  setNewTodo: (value: string) => void;
  checkEdit: Boolean;
  setCheckEdit: (value: Boolean) => void;
  onEdit: (id: string) => void;
}
const RenderList = ({ title, checkEdit, setCheckEdit , setNewTodo,onEdit,id}: RenderProps) => {
 
  return checkEdit ? (
    <div className="">
      <input
        className="border"
        type="text"
        name=""
        id=""
        defaultValue={title}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit" onClick={()=>(onEdit(id))}>save</button>
    </div>
  ) : (
    <div className="">
      <div key={title} className="flex">
        <p>{title}</p>
        <button onClick={() => setCheckEdit(true)} className="border">
          Edit
        </button>
        <button className="border">Delete</button>
      </div>
    </div>
  );
};

export default RenderList;
