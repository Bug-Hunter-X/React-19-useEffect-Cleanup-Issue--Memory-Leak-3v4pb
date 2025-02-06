```javascript
// Buggy component
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect cleanup function
    return () => {
      console.log('Cleanup called');
      // Missing unmount logic for the setInterval here
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```