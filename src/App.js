import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div>
    <Provider store={store}>
        <ThemeToggle />
    </Provider>
    </div>
  );
}

export default App;
