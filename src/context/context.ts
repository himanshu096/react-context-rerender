import { createContext } from 'react';

export interface CountContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  counter2: number;
  increment2: () => void;
  decrement2: () => void;
}

export const CountContext = createContext({} as CountContextType);
