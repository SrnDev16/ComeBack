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
      edit: false,
    };
    setList([...list, newTodo]);
    setTodo("");
  };

  const onEdit = (id: string) => {
    if (!newTodo) {
      return alert("Please inset todo.");
    }
    setList(
      list.map((item) => (item.id === id ? { ...item, todo: newTodo } : item))
    );
    console.log(newTodo);

    setCheckEdit(false);
    console.log("edit");
  };

  const deleteTodo = (id: string) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="container bg-gray-100 mx-auto h-dvh flex flex-col items-center drop-shadow-lg">
      <form className="mt-7" onSubmit={submitTodo}>
        <label className="myFont">Todo</label>
        <input
          className="border m-1 rounded bg-white"
          type="text"
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>save</button>
      </form>
      <div className="mt-2 bg-white p-5  rounded-2xl">
        {list.map((item) => (
          <RenderList
            key={item.id}
            title={item.todo}
            checkEdit={checkEdit}
            setCheckEdit={setCheckEdit}
            setNewTodo={setNewTodo}
            onEdit={onEdit}
            id={item.id}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default FormTodo;
