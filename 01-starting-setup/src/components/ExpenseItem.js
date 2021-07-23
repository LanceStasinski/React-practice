import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>July 23, 2021</div>
      <div className="expense-item__description">
        <h2>Head First JavaScript Programming</h2>
        <div className="expense-item__price">$35</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
