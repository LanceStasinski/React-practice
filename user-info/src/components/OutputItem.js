import styles from './OutputItem.module.css'

const OutputItem = (props) => {
  return <li className={styles['output-item']}>{`${props.name} (${props.age} years old)`}</li>
}

export default OutputItem