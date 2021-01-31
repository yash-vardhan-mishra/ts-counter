import CounterButton from "./CounterButton";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "../store/counter/CounterAction";
import { AppState } from "../store/rootStore";

const HomePage = () => {
  const { count } = useSelector((state: AppState) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontSize: "2rem" }}>
      <span>{count}</span>
      <CounterButton
        handleClick={() => dispatch(incrementCounter())}
        color="lightgreen"
      >
        Increment
      </CounterButton>
      <CounterButton
        handleClick={() => dispatch(decrementCounter())}
        color="orange"
      >
        Decrement
      </CounterButton>
    </div>
  );
};

export default HomePage;
