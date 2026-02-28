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
import HelloDeveloper from './pages/HelloDeveloper';
import CV from './pages/CV';
import AdminCVForm from './pages/AdminCVForm';
import AdminCVDetails from './pages/AdminCVDetails';
import CvFrom from './pages/cvFrom';
import ProfessionalCV from './pages/ProfessionalCV';

// Routes Configuration
function App() {
  return (
    <Router>
      <div className="min-h-screen font-poppins selection:bg-indigo-500/30 relative transition-colors duration-300">
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
            <Route path="/hello-developer" element={<HelloDeveloper />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/professional-cv" element={<ProfessionalCV />} />
            <Route path="/admin/cv" element={<AdminCVForm />} />
            <Route path="/cvFrom" element={<CvFrom />} />
            <Route path="/admin/cv/:id" element={<AdminCVDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
