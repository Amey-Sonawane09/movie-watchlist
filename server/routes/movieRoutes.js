const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const movieController = require('../controllers/movieController');

router.post('/watchlist', auth.authenticate, movieController.addToWatchlist);
router.get('/watchlist', auth.authenticate, movieController.getWatchlist);
router.put('/watchlist/status', auth.authenticate, movieController.updateStatus);
router.delete('/watchlist/:movieId', auth.authenticate, movieController.removeFromWatchlist);

module.exports = router;