import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    feedback: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange =  (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    if (!formData.name || !formData.rating || !formData.feedback) {
      setError('All fields are required');
      return;
    }
    
    try {
      const response = await fetch('http://localhost:8000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit feedback');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', rating: '', feedback: '' });
      
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(err.message);
    }

    
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Feedback</h1>
      
      {submitted && (
        <Alert variant="success" className="mb-4">
          Thank you for your feedback! We appreciate your input.
        </Alert>
      )}
      
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form onSubmit={handleSubmit} className="feedback-form">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formRating">
          <Form.Label>Rating</Form.Label>
          <Form.Select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option id="default-option" value="">Select a rating</option>
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Very Good</option>
            <option value="3">3 - Good</option>
            <option value="2">2 - Fair</option>
            <option value="1">1 - Poor</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formFeedback">
          <Form.Label>Your Feedback</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Tell us what you think about Cinemastash"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit Feedback
        </Button>
      </Form>
    </Container>
  );
};

export default Feedback;