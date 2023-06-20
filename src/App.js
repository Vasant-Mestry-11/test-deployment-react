import "./App.css";

function App() {
  const env = process.env.NODE_ENV;
  return <div className="App">{env}</div>;
}

export default App;
