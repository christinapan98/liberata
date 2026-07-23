import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage';
import TeamPage from './pages/TeamPage';
import Footer from './components/Footer';
import PlatformsPage from './pages/PlatformsPage';
import ProductsPage from './pages/ProductsPage';
import ScripturaPage from './pages/ScripturaPage';
import MensuraPage from './pages/MensuraPage';
import BetaSignupPage from './pages/BetaSignupPage';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return(
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<OverviewPage/>}/>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/scriptura" element={<ScripturaPage />} />
        <Route path="/products/mensura" element={<MensuraPage />} />
        <Route path="/platforms" element={<PlatformsPage />} />
        <Route path="/beta-signup" element={<BetaSignupPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;