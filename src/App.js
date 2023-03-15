import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { date: new Date(2020, 8, 12), title: 'Toilet Paper', amount: '94.12' },
    { date: new Date(2021, 2, 10), title: 'New TV', amount: '799.49' },
    { date: new Date(2021, 4, 22), title: 'Car Insurance', amount: '294.67' },
    { date: new Date(2021, 6, 2), title: 'New Desk', amount: '450' },
    { date: new Date(2022, 8, 20), title: 'Bike Insurance', amount: '124.12' }
  ]
  return (
    <div>
      <h1>
        Let's get started!!
      </h1>
      <Expenses expense={expenses} />
    </div>
  );
}

export default App;
