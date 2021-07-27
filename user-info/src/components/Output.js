import OutputItem from "./OutputItem";
import styles from "./Output.module.css";

const Output = (props) => {
  if (props.users.length === 0) return null;

  return (
    <ul className={styles.output}>
      {props.users.map((user) => (
        <OutputItem key={user.id} name={user.userName} age={user.age} />
      ))}
    </ul>
  );
};

export default Output;
