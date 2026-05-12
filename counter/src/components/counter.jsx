import {useSelector, useDispatch} from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "../redux/counterSlice";
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementValue, setIncrementValue] = useState(0);

    const addValue = Number(incrementValue) || 0;

    const resetAll = () => {
        setIncrementValue(0);
        dispatch(reset());
    }

  return (
    <div>
        <h1>Count = {count}</h1>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>

        <input 
        type="text"
        value={incrementValue}
        onChange={(e) => setIncrementValue(e.target.value)} />

        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button onClick={resetAll}>Reset</button>
    </div>
  )
}

export default Counter