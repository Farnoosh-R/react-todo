import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/todo" element={
      <TodoProvider>
      <Todo />
      </TodoProvider>
      }></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
