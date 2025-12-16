import { LayoutDashboard, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <LayoutDashboard className="w-6 h-6 text-indigo-600" />
              <span className="text-slate-900">AdminPro Dashboard</span>
            </div>
            <p className="text-slate-600 text-sm">
              A powerful admin dashboard solution for modern businesses. Manage users, track analytics, and grow your business efficiently.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-slate-600 hover:text-indigo-600 text-sm transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#sections" className="text-slate-600 hover:text-indigo-600 text-sm transition-colors">
                  Sections
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-600 hover:text-indigo-600 text-sm transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-600 hover:text-indigo-600 text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-indigo-600 text-sm transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-indigo-600 text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2025 AdminPro Dashboard. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for businesses
          </p>
        </div>
      </div>
    </footer>
  );
}