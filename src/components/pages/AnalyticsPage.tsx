import { TrendingUp, DollarSign, Users, ShoppingCart, ArrowUp, ArrowDown } from 'lucide-react';

const metrics = [
  {
    title: 'Total Revenue',
    value: '$124,563',
    change: '+12.5%',
    trend: 'up' as const,
    icon: DollarSign,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Active Users',
    value: '8,234',
    change: '+8.1%',
    trend: 'up' as const,
    icon: Users,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    change: '-2.4%',
    trend: 'down' as const,
    icon: TrendingUp,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Total Orders',
    value: '1,563',
    change: '+15.3%',
    trend: 'up' as const,
    icon: ShoppingCart,
    color: 'bg-orange-100 text-orange-600',
  },
];

const recentActivity = [
  { time: '2 min ago', action: 'New user registration', user: 'Sarah Johnson' },
  { time: '15 min ago', action: 'Order completed', user: 'Michael Chen' },
  { time: '1 hour ago', action: 'Payment received', user: 'Emma Williams' },
  { time: '2 hours ago', action: 'New user registration', user: 'James Brown' },
  { time: '3 hours ago', action: 'Order completed', user: 'Lisa Anderson' },
];

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-slate-900 mb-2">Analytics Overview</h1>
        <p className="text-slate-600">Track your business performance and key metrics</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center`}>
                <metric.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? (
                  <ArrowUp className="w-4 h-4" />
                ) : (
                  <ArrowDown className="w-4 h-4" />
                )}
                {metric.change}
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-1">{metric.title}</p>
            <p className="text-slate-900">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Chart Placeholder */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-slate-900 mb-4">Revenue Trend</h3>
          <div className="h-64 bg-linear-to-br from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center">
            <p className="text-slate-500">Chart visualization would go here</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-slate-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-slate-900 text-sm">{activity.action}</p>
                  <p className="text-slate-600 text-sm">{activity.user}</p>
                </div>
                <span className="text-slate-500 text-sm">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
