import React from "react";
import './App.css';
import Box from './features/box/box';
import Counter from './features/counter/counter'
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/counter" element={<Counter />} />
      <Route path="/box" element={<Box />} />
    </Routes>
    </div>
  );
}

export default App;
