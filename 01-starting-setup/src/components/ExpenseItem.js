import './ExpenseItem.css'

function ExpenseItem(props) {
  const expenseDate = new Date(2021, 7, 23);
  const expenseTitle = 'Head First JavaScript Programming';
  const expenseAmount = 35;

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
