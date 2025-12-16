import { useState, useEffect } from 'react';
import { SearchBar } from '../../components/dashboard/SearchBar';
import { UsersTable } from '../../components/dashboard/UsersTable';
import { CreateUserModal } from '../../components/dashboard/CreateUserModal';

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  avatar: string;
};

export function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-slate-900 mb-2">User Management</h2>
          <p className="text-slate-600">Manage and monitor all users</p>
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

      <div className="bg-white rounded-xl border border-slate-200 p-6">
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
