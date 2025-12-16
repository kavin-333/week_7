import { Bell, CheckCircle, AlertCircle, Info, TrendingUp } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'success',
    icon: CheckCircle,
    title: 'Payment Received',
    message: 'New payment of $250 from John Doe has been processed successfully.',
    time: '5 minutes ago',
    read: false,
  },
  {
    id: 2,
    type: 'info',
    icon: Info,
    title: 'New User Registration',
    message: 'Sarah Johnson has created a new account.',
    time: '15 minutes ago',
    read: false,
  },
  {
    id: 3,
    type: 'warning',
    icon: AlertCircle,
    title: 'Low Stock Alert',
    message: 'Product "Premium Widget" is running low on stock (5 remaining).',
    time: '1 hour ago',
    read: true,
  },
  {
    id: 4,
    type: 'success',
    icon: TrendingUp,
    title: 'Sales Milestone',
    message: 'Congratulations! You\'ve reached 1000 total sales.',
    time: '2 hours ago',
    read: true,
  },
  {
    id: 5,
    type: 'info',
    icon: Bell,
    title: 'System Update',
    message: 'A new system update is available. Update now for latest features.',
    time: '3 hours ago',
    read: true,
  },
];

const getNotificationColor = (type: string) => {
  switch (type) {
    case 'success':
      return 'bg-green-100 text-green-600';
    case 'warning':
      return 'bg-yellow-100 text-yellow-600';
    case 'info':
      return 'bg-blue-100 text-blue-600';
    default:
      return 'bg-slate-100 text-slate-600';
  }
};

export function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900 mb-2">Notifications</h1>
          <p className="text-slate-600">Stay updated with your latest activities</p>
        </div>
        <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
          Mark all as read
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200">
        <div className="divide-y divide-slate-100">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-6 hover:bg-slate-50 transition-colors cursor-pointer ${
                !notification.read ? 'bg-indigo-50/30' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 ${getNotificationColor(
                    notification.type
                  )} rounded-lg flex items-center justify-center shrink-0`}
                >
                  <notification.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="text-slate-900">
                      {notification.title}
                      {!notification.read && (
                        <span className="ml-2 w-2 h-2 bg-indigo-600 rounded-full inline-block" />
                      )}
                    </h3>
                    <span className="text-slate-500 text-sm whitespace-nowrap">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">{notification.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-slate-900 mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="text-slate-900">Email Notifications</p>
              <p className="text-slate-600 text-sm">Receive notifications via email</p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="text-slate-900">Push Notifications</p>
              <p className="text-slate-600 text-sm">Receive push notifications on your device</p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="text-slate-900">Weekly Summary</p>
              <p className="text-slate-600 text-sm">Get a weekly summary of your activities</p>
            </div>
            <input type="checkbox" className="w-5 h-5 rounded" />
          </label>
        </div>
      </div>
    </div>
  );
}
