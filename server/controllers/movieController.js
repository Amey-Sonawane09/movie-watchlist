const Movie = require('../models/Movie');

exports.addToWatchlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const movieData = req.body;
    
    const watchlistId = await Movie.addToWatchlist(userId, movieData);
    res.status(201).json({ id: watchlistId });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getWatchlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const watchlist = await Movie.getWatchlist(userId);
    res.json(watchlist);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const userId = req.user.id;
    const { movieId, status } = req.body;
    
    await Movie.updateWatchlistStatus(userId, movieId, status);
    res.json({ message: 'Status updated successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.removeFromWatchlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const { movieId } = req.params;
    
    await Movie.removeFromWatchlist(userId, movieId);
    res.json({ message: 'Movie removed from watchlist' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};