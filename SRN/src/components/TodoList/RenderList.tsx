import { useState } from "react";
import { myList } from "./FormTodo";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";


interface renderProps {
  list: myList;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, title: string) => void;
}

const RenderList = ({ list, deleteTodo, editTodo }: renderProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(list.title);

  const changDisplayed = () => {
    console.log("change display");

    setEdit(!edit);
  };

  let display;

  if (!edit) {
    display = (
      <div className="flex justify-center">
        <div className="flex flex-row item-center mt-3">
          <div className="h-full bg-white w-80 rounded">{list.title}</div>
          <button className="btn-primary" onClick={changDisplayed}>
          <FaEdit />
          </button>
          <button className="btn-primary" onClick={() => deleteTodo(list.id)}>
          <FaRegTrashAlt />
          </button>
        </div>
      </div>
    );
  } else {
    display = (
      <div className="flex justify-center">
        <div className="flex flex-row item-center mt-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-full bg-gray-200 w-80 rounded border border-green-400"
          />
          <div
            className="btn-primary"
            onClick={() => {
              editTodo(list.id, title);
              changDisplayed();
            }}
          >
            Save
          </div>
        </div>
      </div>
    );
  }

  return display;
};

export default RenderList;
