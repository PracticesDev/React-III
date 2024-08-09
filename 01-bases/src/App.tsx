import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";
import CounterHook from "./bases/CounterHook";
import CounterReducerCalculator from "./counter-reducer/CounterReducerCalculator";
import CounterReducerComponent from "./counter-reducer/CounterReducerComponent";
//import CounterReducerComponent from "./bases/CounterReducerComponent";


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
      <hr/>
      <CounterReducerComponent/>
      <hr/>
      <CounterReducerCalculator/>
  

    </>
  );
}

export default App;
