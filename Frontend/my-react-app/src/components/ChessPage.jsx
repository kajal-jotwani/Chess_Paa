import React, { useState } from 'react';
import './chesspage.css';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { ColorRing } from 'react-loader-spinner';

export function ChessPage() {
  const [game, setGame] = useState(new Chess());
  const [turn, setTurn] = useState('human'); 

  function onDrop(from, to) {
    try {
      const gameCopy = new Chess(game.fen());
      const result = gameCopy.move({ from, to, promotion: 'q' });

      setGame(gameCopy);

      if (result) {
        setTurn('ai');

        new Promise(async () => {
          const move = await fetch(
            'https://chess-stockfish-yokuioanna-el.a.run.app/gen_move',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ fen: gameCopy.fen() }),
            }
          );

          const { fen } = await move.json(); // No TypeScript type assertion

          setTurn('human');
          setGame(new Chess(fen));
        });
      }

      return result ? true : false;
    } catch (error) {
      return false;
    }
  }

  return (
    <div>
      <div className="person">
        <span>AI</span>
        <div>
          <ColorRing
            visible={turn === 'ai'}
            height="30"
            width="30"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={[
              '#e15b64',
              '#f47e60',
              '#f8b26a',
              '#abbd81',
              '#849b87',
            ]}
          />
        </div>
      </div>
      {/* <div className="chessboard-wrapper">

        <Chessboard 
          // style={{
          //   "display":"flex",
          //   "align-items":"center",
          //   "justify-content":"center"
          // }}
          position={game.fen()}
          boardWidth={600}
          onPieceDrop={onDrop}
        />
      </div> */}

        <div className="content">
        { <img src="chesspaa.png" alt="Chess Image" className="chess-image" /> }
        <div className="chessboard-wrapper">
          <Chessboard 
            position={game.fen()}
            boardWidth={500}
            onPieceDrop={onDrop}
          />
        </div>
      </div>

      <div className="person">
        <span>
          YOU {turn === 'human' && <i>(your turn)</i>}
        </span>
      </div>
    </div>
  );
}
