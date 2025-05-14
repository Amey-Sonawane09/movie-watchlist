const pool = require('../config/db');

class Movie {
  static async addToWatchlist(userId, movieData) {
    const { title, year, imdb_id, poster_url } = movieData;
    
    const [movieResult] = await pool.execute(
      'INSERT INTO movies (title, year, imdb_id, poster_url, user_id) VALUES (?, ?, ?, ?, ?)',
      [title, year, imdb_id || null, poster_url, userId]
    );
    
    const [watchlistResult] = await pool.execute(
      'INSERT INTO watchlist (user_id, movie_id, status) VALUES (?, ?, ?)',
      [userId, movieResult.insertId, 'plan_to_watch']
    );
    
    return watchlistResult.insertId;
  }

  static async getWatchlist(userId) {
    const [rows] = await pool.execute(
      `SELECT m.id, m.title, m.year, m.imdb_id, m.poster_url, w.status, w.rating, w.notes 
       FROM movies m 
       JOIN watchlist w ON m.id = w.movie_id 
       WHERE w.user_id = ?`,
      [userId]
    );
    return rows;
  }

  static async updateWatchlistStatus(userId, movieId, status) {
    await pool.execute(
      'UPDATE watchlist SET status = ? WHERE user_id = ? AND movie_id = ?',
      [status, userId, movieId]
    );
  }

  static async removeFromWatchlist(userId, movieId) {
    await pool.execute('DELETE FROM movies WHERE id = ? AND user_id = ?', [movieId, userId]);
  }
}

module.exports = Movie;