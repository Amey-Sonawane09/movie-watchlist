import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../src/App.css';
import amey from '../assets/amey.jpeg';
import ankita from '../assets/WhatsApp Image 2025-05-11 at 5.39.37 PM.jpeg'
import aditi from '../assets/WhatsApp Image 2025-05-11 at 1.21.09 AM.jpeg'


const teamMembers = [
  {
    name: "Aditi Pateria",
    role: "Co-founder",
    description: "Tech Enthusiast, a web developer who loves building clean, user-focused web applications. Always curious, always coding.",
    img: aditi,
    socials: [
      { platform: "google", url: `mailto:"aditipateria44@gmail.com"` },
      { platform: "linkedin", url: "https://www.linkedin.com/in/aditi-pateria-650a8127b" },
      { platform: "github", url: "https://github.com/AditiPateria" }]
  },
  {
    name: "Ankita Durgude",
    role: "Co-founder",
    description: "An IT Engineering graduate with strong technical and analytical skills, seeking to actively contribute to the growth of CinemaStash",
    img: ankita,
    socials: [
      { platform: "google", url: `mailto:"ankitadurgude12@gmail.com"` },
      { platform: "linkedin", url: "https://www.linkedin.com/in/ankita-durgude-352826225" },
      { platform: "github", url: "https://github.com/ankita9172" }
    ]
  },
  {
    name: "Amey Sonawane",
    role: "Co-founder",
    description: "Focused and hardworking novice full-stack developer witha passion for learning new technologies",
    img: amey,
    socials: [
      { platform: "google", url: `mailto:"sonawaneamey09@gmail.com"` },
      { platform: "linkedin", url: "https://linkedin.com/in/amey-sona-wane" },
      { platform: "github", url: "https://github.com/Amey-Sonawane09" }
    ]
  }
];

const About = () => {
  return (
    <div className="about-section">
      <Container className="py-5 text-white text-center">
        <h1 className="mb-4">About CinemaStash</h1>
      </Container>

      <Container className="mb-5">
        <Row className="mb-4">
          <Col>
            <Card className="info-card text-white text-center">
              <Card.Body>
                <Card.Title className="fs-3">🎯 Our Mission</Card.Title>
                <Card.Text>
                  Cinemastash was created to help movie lovers track what they want to watch, are currently watching, or have finished. Our goal is a simple, intuitive experience for managing your watchlist.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <Card className="info-card text-white text-center">
              <Card.Body>
                <Card.Title className="fs-3">🌟 Features</Card.Title>
                <Card.Text as="div">
                  <ul className="list-unstyled">
                    <li>🎬 Add movies to your personal watchlist</li>
                    <li>📊 Track progress (Plan to Watch, Watching, Completed)</li>
                    <li>🔍 Search & filter your watchlist</li>
                    <li>🌐 Access your list from any device</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 className="text-center text-white mb-4">👥 Meet the Team</h2>
        <Row>
          {teamMembers.map((member, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="team-card h-100 text-center">
                <Card.Body>
                  <img src={member.img} alt={member.name} className="rounded-circle mb-3" width="250" />
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-white">{member.role}</Card.Subtitle>
                  <Card.Text>{member.description}</Card.Text>
                  <div>
                    {member.socials.map((social, i) => (
                      <a key={i} href={social.url} className="me-2 text-white">
                        <i className={`fab fa-${social.platform} fa-lg`}></i>
                      </a>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default About;