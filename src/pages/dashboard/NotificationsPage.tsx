import { Bell, Check, AlertCircle, Info } from 'lucide-react';

export function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: 'info',
      title: 'Welcome to AdminPro Dashboard',
      message: 'Start by creating your first user to get started.',
      time: 'Just now',
      read: false,
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <Check className="w-5 h-5" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5" />;
      case 'info':
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-600';
      case 'warning':
        return 'bg-yellow-100 text-yellow-600';
      case 'info':
      default:
        return 'bg-blue-100 text-blue-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-900 mb-2">Notifications</h2>
          <p className="text-slate-600">Stay updated with your latest activities</p>
        </div>
        <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
          Mark all as read
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-200">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-6 hover:bg-slate-50 transition-colors ${
              !notification.read ? 'bg-blue-50/50' : ''
            }`}
          >
            <div className="flex gap-4">
              <div className={`w-10 h-10 ${getColor(notification.type)} rounded-lg flex items-center justify-center shrink-0`}>
                {getIcon(notification.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h4 className="text-slate-900">{notification.title}</h4>
                  <span className="text-slate-500 text-sm whitespace-nowrap">{notification.time}</span>
                </div>
                <p className="text-slate-600 text-sm">{notification.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bell className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-slate-900 mb-2">No Notifications</h3>
          <p className="text-slate-600">You're all caught up! Check back later for updates.</p>
        </div>
      )}
    </div>
  );
}
