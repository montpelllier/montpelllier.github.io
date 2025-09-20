# Getting Started with React Hooks

React Hooks allow you to use state and lifecycle features in functional components.

## useState

```javascript
const [count, setCount] = useState(0);
```

## useEffect

```javascript
useEffect(() => {
  document.title = `Clicked ${count} times`;
}, [count]);
```

