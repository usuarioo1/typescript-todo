import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

export interface Todo {
  text: string;
  complete: boolean;
}

const initialTodos: Todo[] = [
  {
    text: "aprender typescript",
    complete: false,
  },
  {
    text: "subir proyectos",
    complete: true,
  },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      text,
      complete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (selectedTodo: Todo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (selectedTodo: Todo) =>{
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo !== selectedTodo);
    });
  }

  return (
    <div className="container">
      <h1>To Do</h1>
      <AddTodo addTodo={addTodo} />
      <div>
        <Todos 
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo} />
      </div>
    </div>
  );
};

export default App;
