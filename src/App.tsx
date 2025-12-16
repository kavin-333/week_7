import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { DashboardLayout } from './layouts/DashboardLayout';
import { DashboardOverview } from './pages/dashboard/DashboardOverview';
import { UsersPage } from './pages/dashboard/UsersPage';
import { AnalyticsPage } from './pages/dashboard/AnalyticsPage';
import { PaymentsPage } from './pages/dashboard/PaymentsPage';
import { NotificationsPage } from './pages/dashboard/NotificationsPage';
import { SettingsPage } from './pages/dashboard/SettingsPage';
import { HelpSupportPage } from './pages/dashboard/HelpSupportPage';

type AuthUser = {
  name: string;
  email: string;
} | null;

function AppRoutes() {
  const [user, setUser] = useState<AuthUser>(null);
  const navigate = useNavigate();

  const handleLogin = (name: string, email: string, _password: string) => {
    // Simple mock authentication
    setUser({ name, email });
    navigate('/dashboard');
  };

  const handleSignup = (name: string, email: string, _password: string) => {
    // Simple mock registration
    setUser({ name, email });
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          user ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <LandingPage onLogin={handleLogin} onSignup={handleSignup} />
          )
        } 
      />
      
      <Route
        path="/dashboard"
        element={
          user ? (
            <DashboardLayout user={user} onLogout={handleLogout} />
          ) : (
            <Navigate to="/" replace />
          )
        }
      >
        <Route index element={<DashboardOverview />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="payments" element={<PaymentsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="help" element={<HelpSupportPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}