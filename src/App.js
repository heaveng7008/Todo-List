import logo from './logo.svg';
import './App.css';
import Header from "./My Components/Header";
import { Footer } from "./My Components/Footer";

import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { About } from './My Components/about'
import { Todo } from './My Components/Todo'

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const onadd = (title, desc) => {
    let sno = (todos.length === 0) ? 0 : (todos[todos.length - 1].sno + 1);
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, mytodo]);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route exact path="/" element={<Todo todos={todos} onDelete={onDelete} onadd={onadd}/>}>
          </Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;