```javascript
// Corrected component
function MyComponent() {
  const [count, setCount] = useState(0);
  let intervalId = null; // Declare intervalId outside useEffect

  useEffect(() => {
    intervalId = setInterval(() => {
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