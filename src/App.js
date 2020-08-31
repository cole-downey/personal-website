import React from 'react';
import './App.css';
import Header from './components/header';
import { StylesProvider } from '@material-ui/core/styles';

function App() {
  return (
    <StylesProvider injectFirst>
      <div className="App">
        <Header />
      </div>
    </StylesProvider>
  );
}

export default App;
