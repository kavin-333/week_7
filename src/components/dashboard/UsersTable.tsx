import { MoreVertical, Mail, Phone, UserPlus } from 'lucide-react';

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  avatar: string;
};

interface UsersTableProps {
  searchQuery: string;
  users: User[];
  onAddUser?: () => void;
}

export function UsersTable({ searchQuery, users = [], onAddUser }: UsersTableProps) {
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!users || users.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <UserPlus className="w-8 h-8 text-slate-400" />
        </div>
        <h3 className="text-slate-900 mb-2">No Users Yet</h3>
        <p className="text-slate-600 mb-6 max-w-sm mx-auto">
          Get started by adding your first user to the dashboard. Click the button below to create a new user.
        </p>
        {onAddUser && (
          <button 
            onClick={onAddUser}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
          >
            <UserPlus className="w-5 h-5" />
            Add New User
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-3 px-4 text-slate-600 text-sm">User</th>
            <th className="text-left py-3 px-4 text-slate-600 text-sm hidden md:table-cell">
              Contact
            </th>
            <th className="text-left py-3 px-4 text-slate-600 text-sm">Role</th>
            <th className="text-left py-3 px-4 text-slate-600 text-sm">Status</th>
            <th className="text-left py-3 px-4 text-slate-600 text-sm"></th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="border-b border-slate-100 hover:bg-slate-50">
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-sm">{user.avatar}</span>
                  </div>
                  <div>
                    <p className="text-slate-900">{user.name}</p>
                    <p className="text-slate-600 text-sm md:hidden">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 hidden md:table-cell">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Mail className="w-4 h-4" />
                    {user.email}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Phone className="w-4 h-4" />
                    {user.phone}
                  </div>
                </div>
              </td>
              <td className="py-4 px-4">
                <span className="inline-flex px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">
                  {user.role}
                </span>
              </td>
              <td className="py-4 px-4">
                <span
                  className={`inline-flex px-2 py-1 rounded text-sm ${
                    user.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="py-4 px-4">
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5 text-slate-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredUsers.length === 0 && users.length > 0 && (
        <div className="text-center py-12">
          <p className="text-slate-600">No users found matching your search.</p>
        </div>
      )}
    </div>
  );
}