import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPizzas from './components/AllPizzas';
import NewPizza from './components/NewPizza';
import SinglePizza from './components/SinglePizza';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AllPizzas />} />
          <Route path="/new-pizza" element={<NewPizza />} />
          <Route path="/pizza/:id" element={<SinglePizza />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
