import { useState, useEffect } from 'react';
import { StatsCards } from '../../components/dashboard/StatsCards';
import { UsersTable } from '../../components/dashboard/UsersTable';
import { SearchBar } from '../../components/dashboard/SearchBar';
import { CreateUserModal } from '../../components/dashboard/CreateUserModal';
import type { Payment } from '../../components/dashboard/CreatePaymentModal';

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  avatar: string;
};

export function DashboardOverview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);

  // Load users from localStorage
  useEffect(() => {
    const storedUsers = localStorage.getItem('adminpro_users');
    if (storedUsers) {
      try {
        setUsers(JSON.parse(storedUsers));
      } catch (error) {
        console.error('Error loading users:', error);
      }
    }
  }, []);

  // Load payments from localStorage
  useEffect(() => {
    const storedPayments = localStorage.getItem('adminpro_payments');
    if (storedPayments) {
      try {
        setPayments(JSON.parse(storedPayments));
      } catch (error) {
        console.error('Error loading payments:', error);
      }
    }
  }, []);

  // Save users to localStorage
  useEffect(() => {
    if (users.length >= 0) {
      localStorage.setItem('adminpro_users', JSON.stringify(users));
    }
  }, [users]);

  const handleCreateUser = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="space-y-6">
      <StatsCards userCount={users.length} payments={payments} />
      
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-slate-900 mb-1">User Management</h2>
            <p className="text-slate-600 text-sm">Manage and monitor all users</p>
          </div>
          {users.length > 0 && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Create New User
            </button>
          )}
        </div>
        {users.length > 0 && <SearchBar value={searchQuery} onChange={setSearchQuery} />}
        <UsersTable searchQuery={searchQuery} users={users} onAddUser={() => setIsModalOpen(true)} />
      </div>

      <CreateUserModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onCreateUser={handleCreateUser} 
      />
    </div>
  );
}
