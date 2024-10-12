import { useState } from 'react';

const MyComponent = () => {
  // Set an initial class
  const [className, setClassName] = useState('initial-class');

  // Function to update the class
  const changeClassName = () => {
    setClassName('bg-red-500');
  };

  return (
    <div>
      {/* Applying dynamic class to this div */}
      <div id="myDiv" className={className}>
        Hello, this div has a dynamic class!
      </div>
      
      {/* Button to trigger class change */}
      <button onClick={changeClassName}>Change Class</button>
    </div>
  );
};

export default MyComponent;