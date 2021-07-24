import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Head First JavaScript Programming",
      amount: 35,
      date: new Date(2021, 7, 23),
    },
    {
      id: "e2",
      title: "White Board",
      amount: 100,
      date: new Date(2020, 6, 14),
    },
    {
      id: "e3",
      title: "Udacity FEND Course",
      amount: 350,
      date: new Date(2021, 3, 15),
    },
    {
      id: "e4",
      title: "Udemy React Course",
      amount: 135,
      date: new Date(2021, 7, 23),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
