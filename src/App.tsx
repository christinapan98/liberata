import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage';
import TeamPage from './pages/TeamPage';
import Footer from './components/Footer';
import BetaSignupPage from './pages/BetaSignupPage';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return(
    <BrowserRouter>
      <ScrollToTop/> {/* This component ensures that when we navigate to a new page, the window scrolls to the top instead of staying at the same scroll position */}
      <Routes>
        <Route path="/" element={<OverviewPage/>}/>
        <Route path="/beta-signup" element={<BetaSignupPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;