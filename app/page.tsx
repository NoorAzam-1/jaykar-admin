const stats = [
  { label: 'Total Users', value: '1,284', icon: '👥', color: 'bg-blue-500' },
  { label: 'Total Orders', value: '456', icon: '📦', color: 'bg-green-500' },
  { label: 'Revenue', value: '$52,340', icon: '💰', color: 'bg-yellow-500' },
  { label: 'Products', value: '89', icon: '🛍️', color: 'bg-purple-500' },
];

const recentOrders = [
  { id: '#ORD-001', customer: 'Alice Johnson', date: '2026-04-21', status: 'Completed', amount: '$120.00' },
  { id: '#ORD-002', customer: 'Bob Smith', date: '2026-04-22', status: 'Processing', amount: '$85.50' },
  { id: '#ORD-003', customer: 'Carol White', date: '2026-04-23', status: 'Pending', amount: '$200.00' },
  { id: '#ORD-004', customer: 'David Brown', date: '2026-04-23', status: 'Completed', amount: '$45.00' },
  { id: '#ORD-005', customer: 'Eve Davis', date: '2026-04-24', status: 'Cancelled', amount: '$310.75' },
];

const statusColors: Record<string, string> = {
  Completed: 'bg-green-100 text-green-800',
  Processing: 'bg-blue-100 text-blue-800',
  Pending: 'bg-yellow-100 text-yellow-800',
  Cancelled: 'bg-red-100 text-red-800',
};

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-4">
            <div className={`${stat.color} text-white rounded-full w-12 h-12 flex items-center justify-center text-xl`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 text-gray-500 font-medium">Order ID</th>
                <th className="pb-3 text-gray-500 font-medium">Customer</th>
                <th className="pb-3 text-gray-500 font-medium">Date</th>
                <th className="pb-3 text-gray-500 font-medium">Status</th>
                <th className="pb-3 text-gray-500 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 font-medium text-gray-800">{order.id}</td>
                  <td className="py-3 text-gray-600">{order.customer}</td>
                  <td className="py-3 text-gray-600">{order.date}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 text-gray-800 font-medium">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
