import { useState } from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { ProjectSections } from '../components/ProjectSections';
import { FAQ } from '../components/FAQ';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LoginModal } from '../components/auth/LoginModal';
import { SignupModal } from '../components/auth/SignupModal';

interface LandingPageProps {
  onLogin: (name: string, email: string, password: string) => void;
  onSignup: (name: string, email: string, password: string) => void;
}

export function LandingPage({ onLogin, onSignup }: LandingPageProps) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (name: string, email: string, password: string) => {
    onLogin(name, email, password);
    setShowLogin(false);
  };

  const handleSignup = (name: string, email: string, password: string) => {
    onSignup(name, email, password);
    setShowSignup(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header 
        onNavigate={() => setShowLogin(true)}
        onLoginClick={() => setShowLogin(true)}
        onSignupClick={() => setShowSignup(true)}
      />
      <Hero onNavigate={() => setShowLogin(true)} />
      <Features />
      <ProjectSections />
      <FAQ />
      <Footer />

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onLogin={handleLogin}
        onSwitchToSignup={() => {
          setShowLogin(false);
          setShowSignup(true);
        }}
      />

      <SignupModal
        isOpen={showSignup}
        onClose={() => setShowSignup(false)}
        onSignup={handleSignup}
        onSwitchToLogin={() => {
          setShowSignup(false);
          setShowLogin(true);
        }}
      />
    </div>
  );
}