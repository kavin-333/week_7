import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

export type Payment = {
  id: number;
  amount: number;
  status: string;
};

interface StatsCardsProps {
  userCount: number;
  payments?: Payment[];
}

export function StatsCards({ userCount, payments = [] }: StatsCardsProps) {
  // Calculate revenue from completed payments
  const revenue = payments
    .filter(p => p.status === 'Completed')
    .reduce((sum, p) => sum + p.amount, 0);
  
  const orderCount = payments.filter(p => p.status === 'Completed').length;

  const stats = [
    {
      icon: Users,
      label: 'Total Users',
      value: userCount.toString(),
      change: '+0%',
      changeType: 'increase' as const,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: DollarSign,
      label: 'Revenue',
      value: `$${revenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: '+0%',
      changeType: 'increase' as const,
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: ShoppingCart,
      label: 'Orders',
      value: orderCount.toString(),
      change: '+0%',
      changeType: 'increase' as const,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: TrendingUp,
      label: 'Growth',
      value: '0%',
      change: '+0%',
      changeType: 'increase' as const,
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <span
              className={`text-sm ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stat.change}
            </span>
          </div>
          <p className="text-slate-600 text-sm mb-1">{stat.label}</p>
          <p className="text-slate-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}