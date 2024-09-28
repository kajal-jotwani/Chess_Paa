import React, { useRef } from 'react';
import './Carousel.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  console.log("Carousel component is rendering");

  return (
    <div className="carousel-container">
      <h2 className="carousel-heading">Meet the Chess Team!</h2>
      <div className="carousel" ref={carouselRef}>
        <div className="carousel-item">
          <h3>King</h3>
          <img src="king.jpg" alt="King" />
          <p>The objective of the game, is to keep it safe and sound,
             For the King's protection, is the ultimate chess ground.
             So shield it with pawns, and pieces strong and true,
             For the King's survival, is the ultimate chess clue!</p>
        </div>
        <div className="carousel-item">
          <h3>Queen</h3>
          <img src="queen2.jpg" alt="Queen" />
          <p>The Queen, a majesty, of power and grace,
            A point value high, with a commanding pace.
            She moves in any direction, with a swift stride,
            Any distance, any square, she'll gladly reside.
</p>
        </div>
        <div className="carousel-item">
          <h3>Pawn</h3>
          <img src="pawn.jpg" alt="Pawn" />
          <p>
          The Pawn, a foot soldier, of courage bold and true,
          A point value one, with a humble spirit anew.
          It moves forward slowly, but captures with a flair,
          A little piece that can, with a big impact declare.
          </p>
        </div>
        <div className="carousel-item">
          <h3>Knight</h3>
          <img src="knight.jpg" alt="Knight" />
          <p>
          Then comes the tricky Knight, jumping with glee,
          On squares black and white, a unique spree.
          A minor piece, yet oh so grand,
          With 3 point value, in this chess land.
          </p>
        </div>
        <div className="carousel-item">
          <h3>Bishop</h3>
          <img src="bishop.jpg" alt="Bishop" />
          <p>The Bishop, a cleric, of faith and guidance true,
          A point value three, with a diagonal move anew.
          It glides across squares, with a gentle, easy pace,
          A supporter of the King, in a sacred chess space</p>
        </div>
        <div className="carousel-item">
          <h3>Rook</h3>
          <img src="rook.jpg" alt="Rook" />
          <p>
          The Rook, a castle guard, of strength and might,
          A point value five, with a watchful sight.
          It moves horizontally, or vertically too,
          A straight shooter, with a protective crew.
          </p>
        </div>
      </div>
      <div className="carousel-arrows">
        <button className="carousel-arrow left" onClick={scrollLeft}>
          <FiChevronLeft />
        </button>
        <button className="carousel-arrow right" onClick={scrollRight}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;



