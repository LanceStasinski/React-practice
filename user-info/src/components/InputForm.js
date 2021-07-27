import React, { useState } from "react";

import styles from "./InputForm.module.css";

const InputForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState(""); //may need to change to number

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const user = { userName: userName, age: age, id: Math.random().toString() };
    props.onAddUser(user);
    setUserName("");
    setAge("");
  };

  return (
    <form className={styles["input-form"]} onSubmit={submitHandler}>
      <label>Username</label>
      <input type="text" onChange={nameChangeHandler} value={userName} />
      <label>Age (years)</label>
      <input
        type="number"
        min="1"
        step="1"
        onChange={ageChangeHandler}
        value={age}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default InputForm;
