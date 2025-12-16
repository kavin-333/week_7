import { CreditCard, CheckCircle, Clock, XCircle, DollarSign, Plus } from 'lucide-react';

export type Payment = {
  id: number;
  userId: number;
  userName: string;
  amount: number;
  description: string;
  status: 'Pending' | 'Completed' | 'Failed';
  method: string;
  date: string;
};

interface PaymentsPageProps {
  payments: Payment[];
  onCreatePayment: () => void;
}

export function PaymentsPage({ payments = [], onCreatePayment }: PaymentsPageProps) {
  // Calculate stats from actual payment data
  const totalRevenue = payments
    .filter(p => p.status === 'Completed')
    .reduce((sum, p) => sum + p.amount, 0);
  
  const completedCount = payments.filter(p => p.status === 'Completed').length;
  const pendingCount = payments.filter(p => p.status === 'Pending').length;
  const failedCount = payments.filter(p => p.status === 'Failed').length;

  const paymentStats = [
    {
      label: 'Total Revenue',
      value: `$${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: CreditCard,
      color: 'bg-green-100 text-green-600',
    },
    {
      label: 'Completed',
      value: completedCount.toString(),
      icon: CheckCircle,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      label: 'Pending',
      value: pendingCount.toString(),
      icon: Clock,
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      label: 'Failed',
      value: failedCount.toString(),
      icon: XCircle,
      color: 'bg-red-100 text-red-600',
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  if (payments.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-slate-900 mb-2">Payment Tracking</h2>
            <p className="text-slate-600">Monitor all transactions and payment activities</p>
          </div>
        </div>

        <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-slate-900 mb-2">No Payments Yet</h3>
          <p className="text-slate-600 mb-6 max-w-sm mx-auto">
            Start tracking payments by creating your first payment transaction.
          </p>
          <button 
            onClick={onCreatePayment}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create Payment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-slate-900 mb-2">Payment Tracking</h2>
          <p className="text-slate-600">Monitor all transactions and payment activities</p>
        </div>
        <button
          onClick={onCreatePayment}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Create Payment
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paymentStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <p className="text-slate-600 text-sm mb-1">{stat.label}</p>
            <p className="text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-slate-900 mb-6">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-slate-600 text-sm">Customer</th>
                <th className="text-left py-3 px-4 text-slate-600 text-sm">Description</th>
                <th className="text-left py-3 px-4 text-slate-600 text-sm">Amount</th>
                <th className="text-left py-3 px-4 text-slate-600 text-sm hidden md:table-cell">Method</th>
                <th className="text-left py-3 px-4 text-slate-600 text-sm hidden lg:table-cell">Date</th>
                <th className="text-left py-3 px-4 text-slate-600 text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-4 px-4 text-slate-900">{payment.userName}</td>
                  <td className="py-4 px-4 text-slate-600">{payment.description}</td>
                  <td className="py-4 px-4 text-slate-900">
                    ${payment.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="py-4 px-4 text-slate-600 hidden md:table-cell">{payment.method}</td>
                  <td className="py-4 px-4 text-slate-600 hidden lg:table-cell">{formatDate(payment.date)}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex px-2 py-1 rounded text-sm ${
                        payment.status === 'Completed'
                          ? 'bg-green-100 text-green-700'
                          : payment.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
