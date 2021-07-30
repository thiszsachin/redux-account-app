import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "./store/actionCentral";

export default function App() {
  const account = useSelector((state) => state.account);

  const dispatch = useDispatch();

  const { deposit, withdraw } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1>{account}</h1>
      <button onClick={() => deposit(1000)}>Deposit</button>
      <button onClick={() => withdraw(500)}>Withdraw</button>
    </div>
  );
}
