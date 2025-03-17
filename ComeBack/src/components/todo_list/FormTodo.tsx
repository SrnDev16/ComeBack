import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RenderList from "./RenderList";

export type Todo = {
  id: string;
  todo: string;
};

const FormTodo = () => {
  const [todo, setTodo] = useState<string>("");
  const [list, setList] = useState<Todo[]>([]);



  const submitTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      todo: todo,
    };
    setList([...list, newTodo]);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={submitTodo}>
        <label>Todo</label>
        <input
          className="border m-1 rounded"
          type="text"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">save</button>
      </form>
      <RenderList todo={list} />
    </div>
  );
};

export default FormTodo;
