import { FormEvent, useState } from "react";
import Swal from "sweetalert2";
import RenderList from "./RenderList";

export type myList = {
  id: number;
  title: string;
  check: boolean;
};

const FormTodo = () => {
  const [title, setTitle] = useState<string>("");
  const [list, setList] = useState<myList[]>([]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) {
      Swal.fire({
        title: "ยังไม่ได้กรอกข้อมูล",
        text: "กรุณากรอกข้่อมูลให้ครบถ้วน",
        icon: "warning",
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "บันทึกข้อมูลเรียบร้อย",
        showConfirmButton: false,
        timer: 1000,
      });
      const data = {
        id: Date.now(),
        title: title,
        check: false,
      };
      setList([...list, data]);
      setTitle("");
    }
    console.log(list);
  };

  const deleteFunction = (id: number) => {
    setList(list.filter((list: myList) => list.id !== id));
  };

  const onEditFunction = (id: number, title: string) => {
    setList(
      list.map((list: myList) => {
        if (list.id === id) {
          return { ...list, title: title };
        } else {
          return list;
        }
      })
    );
  };

  return (
    <div className="container-xl mx-auto bg-slate-800 h-screen text-center pt-8">
      <div className="flex flex-col justify-center">
        <h1 className="text-white text-4xl font-SeymourOne">FormTodo</h1>
        <form onSubmit={onSubmit} className="pt-10 mb-4">
          <input
            className="py-1 rounded"
            type="text"
            name=""
            id=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>
        <div>
          {list?.map((item) => (
            <RenderList key={item.id} list={item} deleteTodo={deleteFunction} editTodo={onEditFunction}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormTodo;
