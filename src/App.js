import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './homepage';
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
        </Routes>
      </main>
    
    </div>
    </BrowserRouter>
  );
}


export default App;
