const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// To handle JSON requests
app.use(express.json());

// API to make moves using Stockfish API
app.post('/api/make-move', async (req, res) => {
  const { fen } = req.body; // FEN is the chess board representation

  try {
    // Send a request to the Stockfish API
    const response = await axios.post('https://stockfish.online/api/move', {
      fen: fen,
    });

    // Send the move back to the frontend
    res.json(response.data);
  } catch (error) {
    console.error('Error making move:', error);
    res.status(500).json({ message: 'Error while communicating with Stockfish API' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
