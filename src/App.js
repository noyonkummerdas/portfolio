import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Reviews from './pages/Reviews';
import HireMe from './pages/HireMe';
import AdminDashboard from './pages/AdminDashboard';
import InquiryDetails from './pages/InquiryDetails';

// Routes Configuration
function App() {
  return (
    <Router>
      <div className="min-h-screen text-white font-inter selection:bg-indigo-500/30 relative">
        <Background />
        <ScrollToTop />
        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/hire-me" element={<HireMe />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/inquiries/:id" element={<InquiryDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
