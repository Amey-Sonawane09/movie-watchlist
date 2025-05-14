import React from 'react';
import { Container, Button, Card, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TestimonialMarquee from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-white py-5"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh", // Adjust as needed
          display: "flex",
          alignItems: "center"
        }}
      >
        <Container className="py-5 text-center">
          <h1 className="display-4 fw-bold mb-2">Welcome to CinemaStash</h1>
          <p className="lead mb-4">A Cinematic Journey, One Stash at a Time.</p>
          <Button as={Link} to="/signup" variant="success" size="lg" className="px-4">
            Get Started
          </Button>
        </Container>
      </div>
      {/* {/* <div>
        <div className="position-relative" style={{ height: '500px' }}>
          <video
            autoPlay
            muted
            loop
            className="w-100 h-100 object-fit-cover"
          >
            <source src="src/VID-20220519-WA0010.mp4" type="video/mp4" />
          </video>
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: 'rgba(0,0,0,0.6)' }}>
            <Container>
              <h2 className="text-white display-4 mb-4">Big Screen Experience</h2>
              <p className="text-white lead mb-4">Track theatrical releases and plan your cinema visits</p>
              <Button variant="danger" size="lg">Find Theaters</Button>
            </Container>
          </div>
        </div> */}


      {/* </div> */}
      <Container className="py-5">
        <h2 id="features" className="text-center mb-5">Our Features</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3" style={{color: "red"}}>
                  <i className="bi bi-film fs-1"></i>
                </div>
                <Card.Title>Track Movies</Card.Title>
                <Card.Text>
                  Keep track of all the movies you want to watch, are watching, or have completed.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3" style={{color: "red"}}>
                  <i className="bi bi-collection fs-1"></i>
                </div>
                <Card.Title>Organize</Card.Title>
                <Card.Text>
                  Categorize your movies by status and easily find what you're looking for.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3" style={{color: "red"}}>
                  <i className="bi bi-globe fs-1"></i>
                </div>
                <Card.Title>Anywhere Access</Card.Title>
                <Card.Text>
                  Access your watchlist from any device, anytime.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <h2 id="features" className="text-center mb-5">Watch What Feels Like You</h2>
        <Container className="my-4">
          <Carousel className="carousel-compact">
            <Carousel.Item>
              <div className="ratio ratio-16x9">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
                  alt="First slide"
                />
                <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
                  <h1 className="fs-10">Trending This Week</h1>
                  <p className="fs-10">Discover the most popular movies right now</p>
                  <Button variant="danger" size="sm" disabled>View All</Button>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="ratio ratio-16x9">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
                  <h1 className="fs-10">Trending This Week</h1>
                  <p className="fs-10">Discover the most popular movies right now</p>
                  <Button variant="danger" size="sm" disabled>View All</Button>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="ratio ratio-16x9">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="https://image.tmdb.org/t/p/original/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
                  <h1 className="fs-10">Trending This Week</h1>
                  <p className="fs-10">Discover the most popular movies right now</p>
                  <Button variant="danger" size="sm" disabled>View All</Button>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="ratio ratio-16x9">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
                  <h1 className="fs-10">New Releases</h1>
                  <p className="fs-10">Check out the latest movies in theaters</p>
                  <Button variant="danger" size="sm" disabled>Explore</Button>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="ratio ratio-16x9">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
                  <h1 className="fs-10">New Releases</h1>
                  <p className="fs-10">Check out the latest movies in theaters</p>
                  <Button variant="danger" size="sm" disabled>Explore</Button>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="ratio ratio-16x9">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
                  <h1 className="fs-10">New Releases</h1>
                  <p className="fs-10">Check out the latest movies in theaters</p>
                  <Button variant="danger" size="sm" disabled>Explore</Button>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="ratio ratio-16x9">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
                  <h1 className="fs-10">Coming Soon</h1>
                  <p className="fs-10">See what's premiering next month</p>
                  <Button variant="danger" size="sm" disabled>Get Notified</Button>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="ratio ratio-16x9">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
                  <h1 className="fs-10">Coming Soon</h1>
                  <p className="fs-10">See what's premiering next month</p>
                  <Button variant="danger" size="sm" disabled>Get Notified</Button>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="ratio ratio-16x9">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
                  <h1 className="fs-10">Coming Soon</h1>
                  <p className="fs-10">See what's premiering next month</p>
                  <Button variant="danger" size="sm" disabled>Get Notified</Button>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="ratio ratio-16x9">
                <img
                  className="d-block w-100 object-fit-cover"
                  src="https://image.tmdb.org/t/p/original/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
                  <h1 className="fs-10">Coming Soon</h1>
                  <p className="fs-10">See what's premiering next month</p>
                  <Button variant="danger" size="sm" disabled> Get Notified</Button>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
      <TestimonialMarquee/>
    </div>


  );
};

export default Home;