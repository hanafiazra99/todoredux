import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import { addTodo, delTodo } from "../store/action/todoAction";

const Home = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addNewTodo = () => {
    const data = {
      title: todo,
      complete: false,
    };
    dispatch(addTodo(data));
  };

  return (
    <div>
      <Header></Header>
      <h1>todo app</h1>
      <input
        onChange={(e) => setTodo(e.target.value)}
        className="border-gray-500 px-2 py-3 border-2  focus:border-red-600 hover:border-red-500"
      />
      <button onClick={addNewTodo} className="bg-red-500 px-2 py-3 text-white">
        add
      </button>
      {todos.map((todo,index) => (
        <div key={index}>
          <p>{todo.title}</p>
          <button onClick={() => dispatch(delTodo(todo.title))}>delete</button>
        </div>
      ))}
    </div>
  );
};
export default Home;
