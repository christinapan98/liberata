import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage';
import TeamPage from './pages/TeamPage';
import Footer from './components/Footer';
import PlatformsPage from './pages/PlatformsPage';
import BetaSignupPage from './pages/BetaSignupPage';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return(
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<OverviewPage/>}/>
        <Route path="/platforms" element={<PlatformsPage />} />
        <Route path="/beta-signup" element={<BetaSignupPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;