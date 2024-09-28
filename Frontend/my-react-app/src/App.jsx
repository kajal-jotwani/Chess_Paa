import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { ChessPage } from './components/ChessPage';
import Carousel from './components/Carousel';


const News = () => <div>News</div>;
const AboutUs = () => <div>About Us</div>;

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/get-started" element={<ChessPage />} />
      </Routes>
    </Router>
  <Carousel/>
</>
  );
};

export default App;

