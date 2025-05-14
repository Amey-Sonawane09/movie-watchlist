import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Watchlist from './pages/Watchlist';
import About from './pages/About';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Footer from './pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProtectedRoute from './ProtectedRoute';
import BackgroundWrapper from './components/BackgroundImg';
// import TestimonialMarquee from './components/Testimonials';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
function App() {
  return (
    <Router>
      <BackgroundWrapper>
        <div className="App d-flex flex-column min-vh-100">
          <Navbar />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/watchlist" element={<Watchlist />} />
              </Route>

              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/feedback" element={<Feedback />} />
            </Routes>
          </div>
        </div>
        
        <Footer />
      </BackgroundWrapper>
    </Router>

  );
}

export default App;