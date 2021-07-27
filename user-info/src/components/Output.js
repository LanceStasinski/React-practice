
import OutputItem from "./OutputItem";
//import styles from "./Output.module.css";

const Output = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <OutputItem key={user.id} name={user.userName} age={user.age} />
      ))}
    </ul>
  );
};

export default Output;
