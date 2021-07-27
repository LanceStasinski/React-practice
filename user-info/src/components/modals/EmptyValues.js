import styles from './EmptyValues.module.css'

const EmptyValues = (props) => {
  return (
    <div className={styles['empty-values']}>
      <div className={styles.alert}>
        <h2>Invalid Input</h2>
        <p>Please enter a valid name and age (non-empty values)</p>
        <button>Okay</button>
      </div>
    </div>
  )
}

export default EmptyValues;