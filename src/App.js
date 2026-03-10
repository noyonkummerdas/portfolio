import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Background from './components/Background.jsx';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
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
import DevSettings from './pages/DevSettings';
import DevTerminal from './pages/DevTerminal';
import DevSocial from './pages/DevSocial';
import PostProject from './pages/PostProject';
import ChatManagement from './pages/ChatManagement';
import Login from './pages/Login';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="min-h-screen font-poppins selection:bg-indigo-500/30 relative transition-colors duration-300">
      <Background />
      <ScrollToTop />
      {!isLoginPage && <Navigation />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
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
          <Route path="/admin/chats" element={<ChatManagement />} />
          <Route path="/dev-settings" element={<DevSettings />} />
          <Route path="/dev-terminal" element={<DevTerminal />} />
          <Route path="/dev-social" element={<DevSocial />} />
          <Route path="/post-project" element={<PostProject />} />
        </Routes>
      </main>

      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
