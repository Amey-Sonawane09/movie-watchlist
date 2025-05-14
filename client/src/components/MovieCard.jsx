import React from 'react';
import { Card, Button, Container, Row } from 'react-bootstrap';

const MovieCard = ({ movie, onRemove, onStatusChange }) => {
  return (
    <Container fluid="lg" >
      <Row>
        <Card style={{ margin: '10px' }}>
          <Card.Img
            variant="top"
            src={'https://i.etsystatic.com/12729518/r/il/cc1d75/1992451812/il_1588xN.1992451812_fu7n.jpg'}
            alt={`${movie.title} poster`}
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Card.Body>
            <Card.Title>{movie.title} ({movie.year})</Card.Title>
            <div className="mb-3">
              <select
                className="form-select"
                value={movie.status}
                onChange={(e) => onStatusChange(movie.id, e.target.value)}
              >
                <option value="plan_to_watch">Plan to Watch</option>
                <option value="watching">Watching</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <Button onClick={() => onRemove(movie.id)}>
              Remove
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default MovieCard;