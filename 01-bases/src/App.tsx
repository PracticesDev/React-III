import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";
import CounterHook from "./bases/CounterHook";


function App() {
  return (
    <>
      <h1>React Practice</h1>
      <hr/>
      <Counter initialValue = { 15 }/>
      <hr/>
      <CounterBy/>
      <hr/>
      <CounterEffect/>
      <hr/>
      <CounterHook/>

  

    </>
  );
}

export default App;
