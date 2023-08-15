import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import 'bulma/css/bulma.css';
import Button from './components/Button';
import Input from './components/Input';
import './App.css';

function App() {

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log('click');
  }
  return (
    <div className="App">
      <Input placeholder='Nombre' handleChange={ handleChange } />
      <Button handleCLick={ handleClick }>Probando componente</Button>
    </div>
  );
}

export default App;
