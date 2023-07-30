import React, {useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Test } from './features/test/Test';

function App() {

  const [state, setState] = useState({startValue: 0, maxValue: 100, currentValue: 0})

  const setValue = () => {
    setState({...state,currentValue: state.currentValue } )
  }

  const addBlock = () => {
    let block = 100
  }

  return (
    <div className="App">
    <Test/>
    </div>
  );
}

export default App;
