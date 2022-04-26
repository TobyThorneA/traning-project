import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';

function App() {
  const {count} = useAppSelector(state => state.userReducer)
  const {increment} = userSlice.actions
  return (
    <div className="App">
    </div>
  );
}

export default App;
