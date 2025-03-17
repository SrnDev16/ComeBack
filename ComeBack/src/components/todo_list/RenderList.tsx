import { Todo } from "./FormTodo";

interface RenderProps {
  todo: Todo[];
}
const RenderList = ({ todo }: RenderProps) => {
  return (
    <div>
      {todo.map((item: Todo) => {
        return (
          <div key={item.id}>
            <h1>{item.todo}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default RenderList;
