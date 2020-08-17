import React, { useRef } from "react";
import "./NewTodo.css";

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const fnTodoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      alert("Please enter a valid entry!");
      return;
    }
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={fnTodoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">ToDo Entry</label>
        <input id="todo-text" type="text" ref={textInputRef}></input>
      </div>
      <button id="button-add" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
