```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: No infinite loop. The dependency array is empty so it only runs once.
    console.log("Component mounted");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
    </div>
  );
}
```