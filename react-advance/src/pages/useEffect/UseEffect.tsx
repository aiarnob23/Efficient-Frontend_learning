import  { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This useEffect will run only once when the component mounts
  useEffect(() => {
    console.log('Component Mounted: This will run only once when the component is rendered for the first time.');
    
    // Simulate fetching data from an API on component mount
    setTimeout(() => {
      setData('Data fetched from an API!');
    }, 2000);

    // Cleanup function to run when the component is unmounted
    return () => {
      console.log('Cleanup: This will run when the component is unmounted or re-rendered');
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render.

  // This useEffect runs whenever the 'count' value changes
  useEffect(() => {
    if (count === 5) {
      console.log('Count is 5: This effect runs every time the count is updated.');
    }
  }, [count]); // Dependency array with 'count' means this effect will run whenever 'count' changes.

  // This useEffect runs when the 'isLoggedIn' state changes
  useEffect(() => {
    console.log(`User is ${isLoggedIn ? 'Logged In' : 'Logged Out'}: This effect runs when isLoggedIn state changes.`);
  }, [isLoggedIn]); // Dependency array with 'isLoggedIn' means this effect runs when the login status changes.

  return (
    <div>
      <h1>useEffect Example</h1>
      <p>Data: {data || 'Loading...'}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
};

export default UseEffectExample;
