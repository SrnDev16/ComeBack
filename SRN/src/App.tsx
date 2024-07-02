import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormTodo from "./components/TodoList/FormTodo";
import Store from "./components/fetch/Store";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormTodo />} />
      <Route path="/store" element={<Store/>}/>
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
