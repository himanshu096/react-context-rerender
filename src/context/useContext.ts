import { useState } from 'react';
import type { CountContextType } from './context';

export default function useCountContext(): CountContextType {
  const [count, setCount] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const increment2 = () => {
    setCounter2((prev) => prev + 1);
  };

  const decrement2 = () => {
    setCounter2((prev) => prev - 1);
  };

  return { count, counter2, increment, decrement, increment2, decrement2 };
}
