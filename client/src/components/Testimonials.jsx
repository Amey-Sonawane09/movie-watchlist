import React from "react";
// import "../../src/App.css"; // Make sure this CSS file exists and has the animation styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container } from "react-bootstrap";

const testimonials = [
  { name: "Aditya Kansana", rating: 5, avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Kiran Waghmare", rating: 4, avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
  { name: "Shweta Bhere", rating: 5, avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
  { name: "Manoj More", rating: 3, avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
  { name: "Aastha Bisen", rating: 4, avatar: "https://randomuser.me/api/portraits/women/5.jpg" },
  { name: "Vipul Tembulwar", rating: 5, avatar: "https://randomuser.me/api/portraits/men/6.jpg" },
  { name: "Sejal Soni", rating: 4, avatar: "https://randomuser.me/api/portraits/women/7.jpg" },
];

const TestimonialMarquee = () => {
  return (
    <Container >
    <div className="testimonial-wrapper">
      <h1 className="text-center testimonial-title mb-4">What Our Users Say</h1>
      <div className="testimonial-track">
        {testimonials.concat(testimonials).map((item, index) => (
          <div className="card testimonial-card" key={index}>
            <div className="card-body text-center">
              <img
                src={item.avatar}
                alt={item.name}
                className="testimonial-avatar mb-3"
              />
              <h5 className="card-title">{item.name}</h5>
              <div>
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star ${
                      i < item.rating ? "text-warning" : "text-muted"
                    }`}
                  ></i>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Container>
  );
};

export default TestimonialMarquee;
