import React from "react";
import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Topbar from "./components/topbar/Topbar";
import Home from './pages/home/Home';
import Banner from "./components/banner/Banner";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Banner />
      <div className="app">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
