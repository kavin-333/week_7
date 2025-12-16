import { LayoutDashboard } from 'lucide-react';

interface HeaderProps {
  onNavigate: () => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export function Header({ onLoginClick, onSignupClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayoutDashboard className="w-8 h-8 text-indigo-600" />
          <span className="text-slate-900">AdminPro Dashboard</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-slate-600 hover:text-indigo-600 transition-colors">
            Features
          </a>
          <a href="#sections" className="text-slate-600 hover:text-indigo-600 transition-colors">
            Sections
          </a>
          <a href="#faq" className="text-slate-600 hover:text-indigo-600 transition-colors">
            FAQ
          </a>
          <button 
            onClick={onLoginClick}
            className="text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Login
          </button>
          <button 
            onClick={onSignupClick}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}