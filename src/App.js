import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop.jsx';
import NavMenu from './Components/NavMenu.jsx';
import Home from './Components/Pages/Home.jsx';
import About from './Components/Pages/About.jsx';
import MyWorks from './Components/Pages/MyWorks.jsx';
import Contact from './Components/Pages/Contact.jsx';
import Footer from './Components/Footer';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/myworks" element={<MyWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
