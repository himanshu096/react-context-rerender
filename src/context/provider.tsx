import { CountContext } from "./context";
import useCountContext from "./useContext";

export default function CountProvider({ children }: { children: React.ReactNode }) {
  return (
    <CountContext.Provider value={ useCountContext() }>
      {children}
    </CountContext.Provider>
  );
}