import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/dashboard/Sidebar';
import { Menu } from 'lucide-react';

type DashboardSection = 'dashboard' | 'users' | 'analytics' | 'payments' | 'notifications' | 'settings' | 'help';

interface DashboardLayoutProps {
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
}

export function DashboardLayout({ user, onLogout }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active section from current path
  const getActiveSection = (): DashboardSection => {
    const path = location.pathname;
    if (path.includes('/users')) return 'users';
    if (path.includes('/analytics')) return 'analytics';
    if (path.includes('/payments')) return 'payments';
    if (path.includes('/notifications')) return 'notifications';
    if (path.includes('/settings')) return 'settings';
    if (path.includes('/help')) return 'help';
    return 'dashboard';
  };

  const handleSectionChange = (section: DashboardSection) => {
    setIsSidebarOpen(false);
    if (section === 'dashboard') {
      navigate('/dashboard');
    } else {
      navigate(`/dashboard/${section}`);
    }
  };

  const getSectionTitle = () => {
    const section = getActiveSection();
    switch (section) {
      case 'dashboard':
        return 'Dashboard Overview';
      case 'users':
        return 'User Management';
      case 'analytics':
        return 'Analytics';
      case 'payments':
        return 'Payments';
      case 'notifications':
        return 'Notifications';
      case 'settings':
        return 'Settings';
      case 'help':
        return 'Help & Support';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        activeSection={getActiveSection()}
        onSectionChange={handleSectionChange}
        onLogout={onLogout}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <Menu className="w-6 h-6 text-slate-700" />
              </button>
              <h1 className="text-slate-900">{getSectionTitle()}</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right mr-3">
                <p className="text-slate-900 text-sm">{user.name}</p>
                <p className="text-slate-600 text-xs">{user.email}</p>
              </div>
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
