import React from "react";
import { useState } from "react";

const FormTodo = () => {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="bg-orange-600">
      <h1 className="text-indigo-500">hello</h1>
    </div>
  );
};

export default FormTodo;
