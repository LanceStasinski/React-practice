import { useState } from "react";

import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <Output>It's good to see you.</Output>}
      {changeText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
