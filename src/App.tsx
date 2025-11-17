import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage';
import TeamPage from './pages/TeamPage';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OverviewPage/>}/>
        <Route path="/team" element={<TeamPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
