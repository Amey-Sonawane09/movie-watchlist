import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FooterBg from '../components/FooterBg';

const Footer = () => {
  return (
    <FooterBg>
    <footer className="footer py-3 mt-auto">
      <Container className="mt-4">
        <Row>
          <Col md={4} className="text-center text-md-start">
            <h5>CinemaStash</h5>
            <p className='mb-0'>Love letters to cinema? Address them here.</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/watchlist" className="text-white">Watchlist</Link></li>
              <li><Link to="/about" className="text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-white">Contact Us</Link></li>
              <li><Link to="/feedback" className="text-white">Feedback</Link></li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5>Connect With Us</h5>
            <div>
              <Link to="https://Facebook.com" className="text-white me-2"><i className="bi bi-facebook"></i></Link>
              <Link to="https://Twitter.com" className="text-white me-2"><i className="bi bi-twitter"></i></Link>
              <Link to="https://www.instagram.com/" className="text-white"><i className="bi bi-instagram"></i></Link>           
              <p>
                <strong>Email:</strong> support@cinemastash.com<br />
                <strong>Phone:</strong> +91 07450 05301<br/> 
                <strong>Address:</strong> CinemaStash Inc., Mumbai.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <small>&copy; {new Date().getFullYear()} <span style={{color: '#ff0000'}}>CinemaStash</span>  All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
    </FooterBg>
  );
};

export default Footer;