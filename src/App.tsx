import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage';
import TeamPage from './pages/TeamPage';
import Footer from './components/Footer';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OverviewPage/>}/>
        {/* <Route path="/team" element={<TeamPage/>}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
