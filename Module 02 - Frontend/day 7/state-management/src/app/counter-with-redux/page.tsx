<<<<<<< HEAD
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
=======
/** @format */
"use client";
import { decrement, increment } from "@/redux/slices/counter.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";

export default function Page() {
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <center className="mt-4">
      <h1 className="font-bold text-xl mb-4">COUNTER WITH REDUCER</h1>
      <div className="flex justify-center items-center gap-2">
        <button
          className="p-2 border rounded-sm"
          onClick={() =>
            dispatch(
              decrement({
                value: 1,
              })
            )
          }
>>>>>>> 79f708c950eb1bb5ae327d64377807df43d70eb2
        >
          decrement
        </button>
        <div>{counter.value}</div>
        <button
          className="p-2 border rounded-sm"
<<<<<<< HEAD
          onClick={() => dispatch(increment({ value: 1 }))}
=======
          onClick={() =>
            dispatch(
              increment({
                value: 1,
              })
            )
          }
>>>>>>> 79f708c950eb1bb5ae327d64377807df43d70eb2
        >
          increment
        </button>
      </div>
    </center>
  );
}
