import { LayoutDashboard, Users, BarChart3, Settings, CreditCard, Bell, HelpCircle, LogOut, X, Home } from 'lucide-react';

type DashboardSection = 'dashboard' | 'users' | 'analytics' | 'payments' | 'notifications' | 'settings' | 'help';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: DashboardSection;
  onSectionChange: (section: DashboardSection) => void;
  onLogout: () => void;
}

const navItems: { icon: any; label: string; id: DashboardSection }[] = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: Users, label: 'Users', id: 'users' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics' },
  { icon: CreditCard, label: 'Payments', id: 'payments' },
  { icon: Bell, label: 'Notifications', id: 'notifications' },
  { icon: Settings, label: 'Settings', id: 'settings' },
  { icon: HelpCircle, label: 'Help & Support', id: 'help' },
];

export function Sidebar({ isOpen, onClose, activeSection, onSectionChange, onLogout }: SidebarProps) {
  const handleBackToHome = () => {
    window.location.reload();
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-slate-200 z-40">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-8 h-8 text-indigo-600" />
            <span className="text-slate-900">AdminPro</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200 space-y-1">
          <button 
            onClick={handleBackToHome}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-slate-200 z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-8 h-8 text-indigo-600" />
            <span className="text-slate-900">AdminPro</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg">
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200 space-y-1">
          <button 
            onClick={handleBackToHome}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}