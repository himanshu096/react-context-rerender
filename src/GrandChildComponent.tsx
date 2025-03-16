import { useContext } from 'react';
import { CountContext } from './context/context';
import { getRandomColor } from './utils';
import { useRef } from 'react';

const GrandChild = () => {
  const { count, increment } = useContext(CountContext);

  const colorRef = useRef(getRandomColor());
  colorRef.current = getRandomColor();

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
        <h2>Grandchild Component</h2>
        <small> Re-render count {renderCount.current}</small>
        <p style={{ color: 'red', backgroundColor: 'white' }}>
          Using the count state
        </p>
        <small>
          I should only re render if count changes or my parent re-render
        </small>
      </div>
      <div>
        <h3>Count is: {count}</h3>
        <button
          onClick={increment}
          className="bg-pink-600 p-2 rounded text-white"
        >
          Increase Count
        </button>
      </div>
    </div>
  );
};

export default GrandChild;
