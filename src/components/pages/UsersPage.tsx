import { SearchBar } from '../dashboard/SearchBar';
import { UsersTable } from '../dashboard/UsersTable';
import { CreateUserModal, type User } from '../dashboard/CreateUserModal';
import { useState } from 'react';

export function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-slate-900 mb-2">User Management</h1>
          <p className="text-slate-600">Manage and monitor all users</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Create New User
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <UsersTable searchQuery={searchQuery} users={[]} />
      </div>

      <CreateUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCreateUser={function (_user: User): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
}
