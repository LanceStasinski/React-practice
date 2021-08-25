import React, { useRef } from "react";

const NewTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null); // null is the inital value
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value; //! indicates we know what value it will be, ? indicates it could be null or a set value

    if (enteredText.trim().length === 0) {
      //throw error
      return;
    }


  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
