import { useState } from "react";
import { list } from "./FormTodo";

interface renderProps {
  list: list;
}

const RenderList = ({ list }: renderProps) => {
  const [edit, setEdit] = useState<boolean>(false);

  let display;

  if (!edit) {
    display = <div className="">
        <div className="bg-white w-80">{list.title}</div>
    </div>;
  }

  return display;
};

export default RenderList;
