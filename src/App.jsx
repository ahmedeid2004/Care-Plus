import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import HospitalsPage from './pages/HospitalsPage';
import JobsPage from './pages/JobsPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  const [currentRole, setCurrentRole] = useState('patient');

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar currentRole={currentRole} setCurrentRole={setCurrentRole} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/hospitals" element={<HospitalsPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route
              path="/dashboard"
              element={<DashboardPage currentRole={currentRole} setCurrentRole={setCurrentRole} />}
            />
            <Route path="/login" element={<LoginPage setCurrentRole={setCurrentRole} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
