import './App.css';
import CountProvider from './context/provider.tsx';
import Parent from './Parent'

function App() {
  return (
    <CountProvider>
      <Parent />
    </CountProvider>
  );
}

export default App;
