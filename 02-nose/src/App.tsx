import { Counter } from "./components/Counter";
import { Usuario } from './components/Usuario';
import { Efecto } from './components/Efecto';
import { ContadorReducer } from "./components/ContadorReducer";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <Counter/>
      <hr />
      <Usuario/>
      <hr />
      <Efecto/>
      <hr />
      <ContadorReducer/>
    </>
  );
}

export default App;
