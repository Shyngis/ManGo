import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Увеличить значение"
          onClick={() => dispatch(increment())}
        >
          Увеличить
        </button>
        <span>{count}</span>
        <button
          aria-label="Уменьшить значение"
          onClick={() => dispatch(decrement())}
        >
          Уменьшить
        </button>
      </div>
    </div>
  );
}
