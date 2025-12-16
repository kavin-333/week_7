import { User, Bell, Shield, Globe } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-slate-900 mb-2">Settings</h2>
        <p className="text-slate-600">Manage your account and preferences</p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-slate-900">Profile Settings</h3>
            <p className="text-slate-600 text-sm">Update your personal information</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-slate-700 text-sm mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-slate-700 text-sm mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-slate-900">Notifications</h3>
            <p className="text-slate-600 text-sm">Manage your notification preferences</p>
          </div>
        </div>
        <div className="space-y-4">
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-slate-700">Email notifications</span>
            <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded" defaultChecked />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-slate-700">Push notifications</span>
            <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded" defaultChecked />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-slate-700">SMS notifications</span>
            <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded" />
          </label>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-slate-900">Security</h3>
            <p className="text-slate-600 text-sm">Manage your security preferences</p>
          </div>
        </div>
        <div className="space-y-4">
          <button className="w-full px-4 py-2 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-left">
            Change Password
          </button>
          <button className="w-full px-4 py-2 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-left">
            Enable Two-Factor Authentication
          </button>
          <button className="w-full px-4 py-2 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-left">
            View Login Activity
          </button>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-slate-900">Preferences</h3>
            <p className="text-slate-600 text-sm">Customize your experience</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="language" className="block text-slate-700 text-sm mb-2">
              Language
            </label>
            <select
              id="language"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
          <div>
            <label htmlFor="timezone" className="block text-slate-700 text-sm mb-2">
              Timezone
            </label>
            <select
              id="timezone"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option>UTC-8:00 Pacific Time</option>
              <option>UTC-5:00 Eastern Time</option>
              <option>UTC+0:00 GMT</option>
              <option>UTC+1:00 CET</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
