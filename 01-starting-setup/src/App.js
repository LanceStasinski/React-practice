import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Head First JavaScript Programming",
      amount: 35,
      date: new Date(2021, 7, 23),
    },
    { title: "White Board", amount: 100, date: new Date(2020, 6, 14) },
    { title: "Udacity FEND Course", amount: 350, date: new Date(2021, 3, 15) },
    { title: "Udemy React Course", amount: 135, date: new Date(2021, 7, 23) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
