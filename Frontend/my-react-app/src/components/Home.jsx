// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// import Navbar from './navbar';

// const Home = () => {
//   const navigate = useNavigate(); 

//   const handleButtonClick = () => {
//     navigate('/get-started'); 
//   };

//   return (
//     <div className="home">
//       <Navbar />
//       <div className="image">
//         <img src="background.jpeg" className="img-home" alt="chesspaa" />
//         <button className="center-button" onClick={handleButtonClick}>Let's Play!</button>
//       </div>
    
//     </div>
//   );
// };

// export default Home;
// 

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Navbar from './navbar';
import Carousel from './Carousel';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/get-started'); // Navigate to /get-started
  };

  return (
    <div className="home">
      <Navbar />
      <div className="image">
        <img src="background.jpeg" className="img-home" alt="chesspaa" />
        <button className="center-button" onClick={handleButtonClick}>
          Let's Play!
        </button>
      </div>
      <Carousel /> {/* Make sure this path is correct */}
    </div>
  );
};

export default Home;
