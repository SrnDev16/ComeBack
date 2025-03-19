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
  const [checkEdit, setCheckEdit] = useState<Boolean>(false);
  const [newTodo, setNewTodo] = useState<string>("");

  const submitTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo === "") return;
    const newTodo = {
      id: uuidv4(),
      todo: todo,
    };
    setList([...list, newTodo]);
    setTodo("");
  };

  const onEdit = (id: string) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, todo: newTodo } : item
      )
    );
    console.log(newTodo);

    setCheckEdit(false);
    console.log("edit");
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
      <div className="">
        {list.map((item) => (
          <RenderList
            key={item.id}
            title={item.todo}
            checkEdit={checkEdit}
            setCheckEdit={setCheckEdit}
            setNewTodo={setNewTodo}
            onEdit={onEdit}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FormTodo;
