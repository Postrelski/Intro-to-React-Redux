import classes from "./Counter.module.css";
import { useSelector, connect, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const resetHandler = () => {
    dispatch({ type: "reset" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "reset" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <div>
        <button className={classes.zzz} onClick={incrementHandler}>
          Increment
        </button>
        <button className={classes.zzz} onClick={decrementHandler}>
          decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
