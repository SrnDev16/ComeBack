import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormTodo from "./components/TodoList/FormTodo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormTodo />} />
      </Routes>
    </>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
