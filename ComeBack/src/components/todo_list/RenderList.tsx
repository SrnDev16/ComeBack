interface RenderProps {
  title: string;
  id: string;
  setNewTodo: (value: string) => void;
  checkEdit: Boolean;
  setCheckEdit: (value: Boolean) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}
const RenderList = ({
  title,
  checkEdit,
  setCheckEdit,
  setNewTodo,
  onEdit,
  onDelete,
  id,
}: RenderProps) => {
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
      <button type="submit" onClick={() => onEdit(id)}>
        save
      </button>
    </div>
  ) : (
    <div className="">
      <div
        key={title}
        className="flex justify-between items-center w-[500px] border border-gray-300 mt-1.5 p-5 rounded-xl"
      >
        <p>{title}</p>
        <div className="">
          <button onClick={() => setCheckEdit(true)} className="border myBtn">
            Edit
          </button>
          <button onClick={() => onDelete(id)} className="border myBtn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenderList;
