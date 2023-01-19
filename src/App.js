import "./App.css";
import { Header, Balance, IncomeExpenses, TransactionList, AddTransaction } from "./components/imports";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
      </div>
    </GlobalProvider>
    
  );
}

export default App;
