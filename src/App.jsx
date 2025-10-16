import React from 'react';
import './App.css';
import Hero from './components/Hero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Success from './components/Success';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Hero />} />
      <Route path='/success' element={<Success />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;

