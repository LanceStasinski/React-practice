import React, { useState } from 'react'

import styles from './InputForm.module.css'

const InputForm = () => {

  return (
    <form>
      <label>Username</label>
      <input type='text' />
      <label>Age (years)</label>
      <input type='number' min='1' step='1' />
      <button type='submit'>Add User</button>
    </form>
  )
}

export default InputForm;