import AnotherGrandChild from './AnotherGrandChildComponent.tsx';
import GrandChildComponent from './GrandChildComponent.tsx';
import { getRandomColor } from './utils';
import { useRef } from 'react';

const ChildComponent = () => {
  const colorRef = useRef(getRandomColor());

  colorRef.current = getRandomColor();

  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <>
      <div
        style={{
          backgroundColor: colorRef.current,
          padding: '20px',
          borderRadius: '10px',
          transition: 'background-color 0.3s ease',
        }}
      >
        <h2>Child Component</h2>
        <small> Re-render count {renderCount.current}</small>
        <p style={{color:'red', backgroundColor:'white'}}>Not using any state</p>
        <small>I should only re render if my parent re render</small>
      </div>
      <div style={{ margin: '20px' }}>
        <GrandChildComponent />
        <AnotherGrandChild />
      </div>
    </>
  );
};

export default ChildComponent;
