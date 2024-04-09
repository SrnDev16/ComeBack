import React from "react";
import { useState } from "react";

// interface ListProps {
//     list:{
//         id:number;
//         title: string;
//     };
// };

const RenderList = ({ item, onDelete, Edit }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(item.title);
  const [checker, setChecker] = useState(item.check);

  const changeDisplay = () => setOnEdit(!onEdit);
  const handelCheck = () => {
    setChecker(!checker);
    console.log("ok");
    console.log(checker);
  };
  let display;

  if (!onEdit) {
    display = (
      <div className="flex justify-center mt-1">
      <div className="min-w-40">
          <p
            className={`bg-white text-center px-10 rounded h-full hover:cursor-pointer hover:bg-slate-300 ${
              checker ? "check" : ""
            }`}
            onClick={handelCheck}
          >
            {item.title}
          </p>
      </div>
        {/* <button type="button" onClick={() => handelCheck()}>
          checked
        </button> */}
        <button className="myButton" onClick={changeDisplay} type="button">
          Edit
        </button>
        <button
          className="myButton"
          onClick={() => onDelete(item.id)}
          type="button"
        >
          Delete
        </button>
      </div>
    );
  } else {
    display = (
      <div className="mt-1">
        <input
          type="text"
          name=""
          id=""
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button
          className="myButton"
          type="button"
          onClick={() => {
            Edit(item.id, newTitle);
            changeDisplay();
          }}
        >
          Save
        </button>
      </div>
    );
  }

  return display;
};

export default RenderList;
