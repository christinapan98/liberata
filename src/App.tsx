import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage';
import TeamPage from './pages/TeamPage';
import Footer from './components/Footer';
import BetaSignupPage from './pages/BetaSignupPage';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OverviewPage/>}/>
        <Route path="/beta-signup" element={<BetaSignupPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;