import { useState, useEffect } from 'react';
import { Sidebar } from './dashboard/Sidebar';
import { StatsCards } from './dashboard/StatsCards';
import { UsersTable } from './dashboard/UsersTable';
import { SearchBar } from './dashboard/SearchBar';
import { CreateUserModal } from './dashboard/CreateUserModal';
import { CreatePaymentModal } from './dashboard/CreatePaymentModal';
import type { Payment } from './dashboard/CreatePaymentModal';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { PaymentsPage } from './pages/PaymentsPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { SettingsPage } from './pages/SettingsPage';
import { HelpSupportPage } from './pages/HelpSupportPage';
import { Menu } from 'lucide-react';

type DashboardSection = 'dashboard' | 'users' | 'analytics' | 'payments' | 'notifications' | 'settings' | 'help';

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  avatar: string;
};

interface DashboardProps {
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
}

export function Dashboard({ user, onLogout }: DashboardProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState<DashboardSection>('dashboard');
  const [users, setUsers] = useState<User[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);

  // Load users from localStorage on mount
  useEffect(() => {
    const storedUsers = localStorage.getItem('adminpro_users');
    if (storedUsers) {
      try {
        setUsers(JSON.parse(storedUsers));
      } catch (error) {
        console.error('Error loading users:', error);
      }
    }
  }, []);

  // Save users to localStorage whenever they change
  useEffect(() => {
    if (users.length >= 0) {
      localStorage.setItem('adminpro_users', JSON.stringify(users));
    }
  }, [users]);

  // Load payments from localStorage on mount
  useEffect(() => {
    const storedPayments = localStorage.getItem('adminpro_payments');
    if (storedPayments) {
      try {
        setPayments(JSON.parse(storedPayments));
      } catch (error) {
        console.error('Error loading payments:', error);
      }
    }
  }, []);

  // Save payments to localStorage whenever they change
  useEffect(() => {
    if (payments.length >= 0) {
      localStorage.setItem('adminpro_payments', JSON.stringify(payments));
    }
  }, [payments]);

  const handleSectionChange = (section: DashboardSection) => {
    setActiveSection(section);
    setIsSidebarOpen(false);
  };

  const handleCreateUser = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  const handleCreatePayment = (newPayment: Payment) => {
    setPayments([...payments, newPayment]);
  };

  const getSectionTitle = () => {
    switch (activeSection) {
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

  const renderContent = () => {
    switch (activeSection) {
      case 'users':
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-slate-900 mb-2">User Management</h2>
                <p className="text-slate-600">Manage and monitor all users</p>
              </div>
              {users.length > 0 && (
                <button
                  onClick={() => setIsUserModalOpen(true)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Create New User
                </button>
              )}
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6">
              {users.length > 0 && <SearchBar value={searchQuery} onChange={setSearchQuery} />}
              <UsersTable searchQuery={searchQuery} users={users} onAddUser={() => setIsUserModalOpen(true)} />
            </div>
          </div>
        );
      case 'analytics':
        return <AnalyticsPage />;
      case 'payments':
        return <PaymentsPage payments={payments} onCreatePayment={() => setIsPaymentModalOpen(true)} />;
      case 'notifications':
        return <NotificationsPage />;
      case 'settings':
        return <SettingsPage />;
      case 'help':
        return <HelpSupportPage />;
      case 'dashboard':
      default:
        return (
          <>
            <StatsCards userCount={users.length} payments={payments} />
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-slate-900 mb-1">User Management</h2>
                  <p className="text-slate-600 text-sm">Manage and monitor all users</p>
                </div>
                {users.length > 0 && (
                  <button
                    onClick={() => setIsUserModalOpen(true)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Create New User
                  </button>
                )}
              </div>
              {users.length > 0 && <SearchBar value={searchQuery} onChange={setSearchQuery} />}
              <UsersTable searchQuery={searchQuery} users={users} onAddUser={() => setIsUserModalOpen(true)} />
            </div>
          </>
        );
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
        activeSection={activeSection}
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
          <div className="max-w-7xl mx-auto space-y-6">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* Create User Modal */}
      <CreateUserModal isOpen={isUserModalOpen} onClose={() => setIsUserModalOpen(false)} onCreateUser={handleCreateUser} />
      {/* Create Payment Modal */}
      <CreatePaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)} 
        onCreatePayment={handleCreatePayment}
        users={users}
      />
    </div>
  );
}