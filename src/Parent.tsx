import { useContext } from 'react';
import Child from './ChildComponent.tsx';
import { CountContext } from './context/context';

import { getRandomColor } from './utils';
import { useRef } from 'react';

const Parent = () => {
  //Todo If you don't use context here, it won't re-render child componenet. try commenting line 10 and 11.
  const { counter2 } = useContext(CountContext);
  console.log('renders Parent with count2: ', counter2);

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
      <h4 className="text-center mt-3 text-5xl color-red">
        React Context API Re-Render Demo 🚀 (Observe color changes)
      </h4>
      <div className="text-center mt-3">
        <h2 className="text-3xl">Parent Component</h2>
        <small> Re-render count {renderCount.current}</small>
        <p style={{ color: 'red', backgroundColor: 'white' }}>
          Only using counter2 (value: {counter2}) state
        </p>
        <small>I (Parent) should only re render if counter2 changes</small>
        <p>Changing color indicates componenet is re-rendering</p>
      </div>
      <Child />
    </div>
  );
};

export default Parent;
