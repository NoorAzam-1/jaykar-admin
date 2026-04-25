const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Manager', status: 'Active' },
  { id: 4, name: 'David Brown', email: 'david@example.com', role: 'User', status: 'Inactive' },
  { id: 5, name: 'Eve Davis', email: 'eve@example.com', role: 'User', status: 'Active' },
  { id: 6, name: 'Frank Wilson', email: 'frank@example.com', role: 'Manager', status: 'Active' },
  { id: 7, name: 'Grace Lee', email: 'grace@example.com', role: 'User', status: 'Inactive' },
  { id: 8, name: 'Henry Martinez', email: 'henry@example.com', role: 'Admin', status: 'Active' },
];

const roleColors: Record<string, string> = {
  Admin: 'bg-purple-100 text-purple-800',
  Manager: 'bg-blue-100 text-blue-800',
  User: 'bg-gray-100 text-gray-800',
};

const statusColors: Record<string, string> = {
  Active: 'bg-green-100 text-green-800',
  Inactive: 'bg-red-100 text-red-800',
};

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Users</h1>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-gray-500 font-medium">ID</th>
                <th className="px-6 py-4 text-gray-500 font-medium">Name</th>
                <th className="px-6 py-4 text-gray-500 font-medium">Email</th>
                <th className="px-6 py-4 text-gray-500 font-medium">Role</th>
                <th className="px-6 py-4 text-gray-500 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-500">#{user.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">{user.name}</td>
                  <td className="px-6 py-4 text-gray-600">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${roleColors[user.role]}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[user.status]}`}>
                      {user.status}
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
