import { FormEvent, useState } from "react";
import Swal from "sweetalert2";
import RenderList from "./RenderList";

export type list = {
  id: number;
  title: string;
  check: boolean;
};

const FormTodo = () => {
  const [title, setTitle] = useState<string>("");
  const [list, setList] = useState<list[]>([]);

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
        timer: 1500,
      });
        const data = {
            id: Date.now(),
            title: title,
            check: false,
        }
        setList([...list, data]);
        setTitle("");
    }
    console.log(list)
  };

  return (
    <div className="container mx-auto bg-indigo-700 h-screen text-center pt-8">
      <div className="flex flex-col justify-center border-2 border-black">
        <h1 className="text-white text-4xl font-SeymourOne">FormTodo</h1>
        <form onSubmit={onSubmit} className="pt-10">
          <input
          className="py-1 rounded"
            type="text"
            name=""
            id=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="btn-primary">Submit</button>
        </form>
        <div className="flex flex-col-reverse text-center border-1 border-red-900">
            {list?.map((item:list) => (<RenderList key={item.id} list={item}/>))}
        </div>
      </div>
    </div>
  );
};

export default FormTodo;
