"use client";
import React, { useEffect } from "react";

const ClientMode = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  // console.log("data from client mode", data);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => increment()}
        className=" border rounded bg-rose-500"
      >
        Increment
      </button>
      <button
        onClick={() => decrement()}
        className=" border rounded bg-rose-500"
      >
        Decrement
      </button>
      <div>{children}</div>
    </div>
  );
};

export default ClientMode;
