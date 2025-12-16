import { TrendingUp, DollarSign, ShoppingCart, ArrowUp, ArrowDown } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

const revenueData = [
  { month: 'Jan', revenue: 45000 },
  { month: 'Feb', revenue: 52000 },
  { month: 'Mar', revenue: 48000 },
  { month: 'Apr', revenue: 61000 },
  { month: 'May', revenue: 72000 },
  { month: 'Jun', revenue: 68000 },
  { month: 'Jul', revenue: 85000 },
];

const weeklyActivityData = [
  { day: 'Mon', users: 420 },
  { day: 'Tue', users: 380 },
  { day: 'Wed', users: 510 },
  { day: 'Thu', users: 460 },
  { day: 'Fri', users: 550 },
  { day: 'Sat', users: 320 },
  { day: 'Sun', users: 280 },
];

const paymentMethodData = [
  { name: 'Credit Card', value: 45, color: '#6366f1' },
  { name: 'PayPal', value: 30, color: '#8b5cf6' },
  { name: 'Bank Transfer', value: 15, color: '#ec4899' },
  { name: 'Other', value: 10, color: '#f59e0b' },
];


export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-slate-900 mb-2">Analytics Overview</h1>
        <p className="text-slate-600">Track your business performance and key metrics</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Trend Chart */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-slate-900 mb-4">Revenue Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                formatter={(value: number) => [`${value.toLocaleString()}`, 'Revenue']}
              />
              <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} dot={{ fill: '#6366f1', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Activity Chart */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-slate-900 mb-4">Weekly Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyActivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="day" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                formatter={(value: number) => [`${value}`, 'Users']}
              />
              <Bar dataKey="users" fill="#6366f1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Payment Methods Chart */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-slate-900 mb-4">Payment Methods</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={paymentMethodData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {paymentMethodData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => [`${value}%`, 'Share']} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}