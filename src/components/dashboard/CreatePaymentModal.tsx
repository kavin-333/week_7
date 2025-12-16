import { X } from 'lucide-react';
import { useState } from 'react';

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

export type User = {
  id: number;
  name: string;
  email: string;
};

interface CreatePaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreatePayment: (payment: Payment) => void;
  users: User[];
}

export function CreatePaymentModal({ isOpen, onClose, onCreatePayment, users }: CreatePaymentModalProps) {
  const [formData, setFormData] = useState({
    userId: '',
    amount: '',
    description: '',
    method: 'Credit Card',
    status: 'Pending' as 'Pending' | 'Completed' | 'Failed',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedUser = users.find(u => u.id === Number(formData.userId));
    if (!selectedUser) return;
    
    const newPayment: Payment = {
      id: Date.now(),
      userId: Number(formData.userId),
      userName: selectedUser.name,
      amount: Number(formData.amount),
      description: formData.description,
      status: formData.status,
      method: formData.method,
      date: new Date().toISOString(),
    };
    
    onCreatePayment(newPayment);
    onClose();
    setFormData({
      userId: '',
      amount: '',
      description: '',
      method: 'Credit Card',
      status: 'Pending',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full p-6 z-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-slate-900">Create New Payment</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="user" className="block text-slate-700 text-sm mb-2">
              Select User
            </label>
            <select
              id="user"
              required
              value={formData.userId}
              onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">Choose a user...</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} - {user.email}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="amount" className="block text-slate-700 text-sm mb-2">
              Amount ($)
            </label>
            <input
              id="amount"
              type="number"
              step="0.01"
              min="0"
              required
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="100.00"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-slate-700 text-sm mb-2">
              Description
            </label>
            <input
              id="description"
              type="text"
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Monthly subscription"
            />
          </div>

          <div>
            <label htmlFor="method" className="block text-slate-700 text-sm mb-2">
              Payment Method
            </label>
            <select
              id="method"
              value={formData.method}
              onChange={(e) => setFormData({ ...formData, method: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Crypto">Crypto</option>
            </select>
          </div>

          <div>
            <label htmlFor="status" className="block text-slate-700 text-sm mb-2">
              Status
            </label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as 'Pending' | 'Completed' | 'Failed' })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Failed">Failed</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Create Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
