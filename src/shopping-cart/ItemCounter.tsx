import { useState } from "react";
import "./index.css";

type ItemCounterProps = {
  name: string;
  count?: number;
};

export const ItemCounter = ({ name, count = 1 }: ItemCounterProps) => {
  const [itemCount, setItemCount] = useState(count);
  const IncreaseCount = () => setItemCount(itemCount + 1);
  const DecreaseCount = () => setItemCount(itemCount - 1);
  return (
    <>
      <section className="flex items-center gap-2.5 mt-5">
        <span className="w-[150px]">{name}</span>
        <button onClick={IncreaseCount}>+1</button>
        <span>{itemCount}</span>
        <button onClick={DecreaseCount}>-1</button>
      </section>
    </>
  );
};
