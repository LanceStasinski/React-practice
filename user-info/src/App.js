import React, { useState } from 'react';

import InputForm from './components/InputForm';
import Output from './components/Output';

import './App.css'

function App() {
  const [users, setUsers] =  useState([]);

  const addUser = (user) => {
    setUsers(prevUsers => {
      return [user, ...prevUsers]
    })
  }

  return (
    <div id='user'>
      <InputForm onAddUser={addUser}/>
      <Output users={users} />
    </div>
  );
}

export default App;
