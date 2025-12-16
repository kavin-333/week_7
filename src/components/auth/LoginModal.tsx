import { X } from 'lucide-react';
import { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (name: string, email: string, password: string) => void;
  onSwitchToSignup: () => void;
}

export function LoginModal({ isOpen, onClose, onLogin, onSwitchToSignup }: LoginModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(formData.name, formData.email, formData.password);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full p-8 z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        <div className="mb-8">
          <h2 className="text-slate-900 mb-2">Welcome Back</h2>
          <p className="text-slate-600">Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="login-name" className="block text-slate-700 text-sm mb-2">
              Name
            </label>
            <input
              id="login-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="login-email" className="block text-slate-700 text-sm mb-2">
              Email Address
            </label>
            <input
              id="login-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="login-password" className="block text-slate-700 text-sm mb-2">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-slate-600">Remember me</span>
            </label>
            <button type="button" className="text-indigo-600 hover:text-indigo-700">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-slate-600 text-sm">
            Don&apos;t have an account?{' '}
            <button
              onClick={onSwitchToSignup}
              className="text-indigo-600 hover:text-indigo-700"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}