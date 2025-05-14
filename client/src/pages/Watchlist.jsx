import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import { useNavigate } from 'react-router-dom';

const Watchlist = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newMovie, setNewMovie] = useState({ title: '', year: '', imdb_id: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWatchlist = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/movies/watchlist', {
          headers: {
            'x-auth-token': token,
          },
        });
        
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch watchlist');
        }
        
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchWatchlist();
  }, [navigate]);

  const handleAddMovie = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!newMovie.title) {
      setError('Movie title is required');
      return;
    }
    if(!newMovie.year) {
      setError('Enter the year field');
      return;
    }
    const movieToAdd = {
        title: newMovie.title,
        year: newMovie.year,  // Convert empty string to null
        imdb_id: newMovie.imdb_id || null,  // Convert empty string to null
        poster_url: null  // Add this if you have a poster_url field
      };
    
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/movies/watchlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
        body: JSON.stringify(movieToAdd),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to add movie');
      }
      
      setMovies([...movies, { ...newMovie, id: data.id, status: 'plan_to_watch' }]);
      setNewMovie({ title: '', year: '', imdb_id: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (movieId, newStatus) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    
    try {
      const response = await fetch('http://localhost:5000/api/movies/watchlist/status', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
        body: JSON.stringify({ movieId, status: newStatus }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update status');
      }
      
      setMovies(movies.map(movie => 
        movie.id === movieId ? { ...movie, status: newStatus } : movie
      ));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRemoveMovie = async (movieId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    
    try {
      const response = await fetch(`http://localhost:5000/api/movies/watchlist/${movieId}`, {
        method: 'DELETE',
        headers: {
          'x-auth-token': token,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to remove movie');
      }
      
      setMovies(movies.filter(movie => movie.id !== movieId));
    } catch (err) {
      setError(err.message);
    }
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <h1 className="my-4">My Watchlist</h1>
      
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form onSubmit={handleAddMovie} className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Group controlId="formMovieTitle">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter movie title"
                value={newMovie.title}
                onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="formMovieYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="Year"
                value={newMovie.year}
                onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="formImdbId">
              <Form.Label>IMDB ID (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="IMDB ID"
                value={newMovie.imdb_id}
                onChange={(e) => setNewMovie({ ...newMovie, imdb_id: e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col md={2} className="d-flex align-items-end">
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add Movie'}
            </Button>
          </Col>
        </Row>
      </Form>
      
      <Form.Group controlId="formSearch" className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search your watchlist..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>
      
      {loading && !movies.length ? (
        <p>Loading your watchlist...</p>
      ) : (
        <Row>
          {filteredMovies.length > 0 ? (
            filteredMovies.map(movie => (
              <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <MovieCard
                  movie={movie}
                  onRemove={handleRemoveMovie}
                  onStatusChange={handleStatusChange}
                />
              </Col>
            ))
          ) : (
            <Col>
              <p>Your watchlist is empty. Add some movies to get started!</p>
            </Col>
          )}
        </Row>
      )}
    </Container>
  );
};

export default Watchlist;