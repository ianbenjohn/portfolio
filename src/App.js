import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components/index';
import About from './components/About';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
    <CssBaseline />
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </>
  );
}

export default App;
