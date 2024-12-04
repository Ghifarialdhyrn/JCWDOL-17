"use client";

import { decrement, increment } from "@/redux/slices/counter.slice";
import { useAppSelector } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <center className="mt-4">
      <h1 className="font-bold text-xl mb-4">COUNTER WITH REDUX</h1>
      <div className="flex justify-center items-center gap-2">
        <button
          className="p-2 border rounded-sm"
          onClick={() => dispatch(decrement({ value: 1 }))}
        >
          decrement
        </button>
        <div>{counter.value}</div>
        <button
          className="p-2 border rounded-sm"
          onClick={() => dispatch(increment({ value: 1 }))}
        >
          increment
        </button>
      </div>
    </center>
  );
}
