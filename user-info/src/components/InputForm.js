import React, { useState } from "react";

import EmptyValues from "./modals/EmptyValues";

import styles from "./InputForm.module.css";

const InputForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [noInput, setNoInput] = useState(false);

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const onOkay = () => {
    setNoInput(false)
  }

  const alertEmpty = <EmptyValues onOkay={onOkay}/>

  const submitHandler = (event) => {
    event.preventDefault();
    const user = { userName: userName, age: age, id: Math.random().toString() };
    props.onAddUser(user);
    setUserName("");
    setAge("");
  };

  const action = () => {
    if (!noInput) {
      return submitHandler;
    }

    return alertEmpty;
  }

  return (
    <form className={styles["input-form"]} onSubmit={action}>
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
      <button className={styles.submit} type="submit">Add User</button>
    </form>
  );
};

export default InputForm;
