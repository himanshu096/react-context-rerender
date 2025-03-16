import { getRandomColor } from './utils';
import { useRef } from 'react';
import { useContext } from 'react';
import { CountContext } from './context/context';

const AnotherGrandChild = () => {
  const { counter2, increment2 } = useContext(CountContext);
  const colorRef = useRef(getRandomColor());
  colorRef.current = getRandomColor();

  console.log('renders Parent with count2: ', counter2);

  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div
      style={{
        backgroundColor: colorRef.current,
        padding: '20px',
        borderRadius: '10px',
        transition: 'background-color 0.3s ease',
      }}
    >
      <div>
        <h2>Another Grandchild Component</h2>
        <small> Re-render count {renderCount.current}</small>
        <p style={{ color: 'red', backgroundColor: 'white' }}>
          Only using counter2 state
        </p>
        <small>
          I should only re render if counter2 changes or my parent re-renders
        </small>
      </div>
      <h3>Counter2 is: {counter2}</h3>
      <button
          onClick={increment2}
          className="bg-pink-600 p-2 rounded text-white"
        >
          Increase Counter2
        </button>
    </div>
  );
};

export default AnotherGrandChild;
