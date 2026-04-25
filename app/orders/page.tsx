const orders = [
  { id: '#ORD-001', customer: 'Alice Johnson', date: '2026-04-18', status: 'Completed', amount: '$120.00' },
  { id: '#ORD-002', customer: 'Bob Smith', date: '2026-04-19', status: 'Processing', amount: '$85.50' },
  { id: '#ORD-003', customer: 'Carol White', date: '2026-04-20', status: 'Pending', amount: '$200.00' },
  { id: '#ORD-004', customer: 'David Brown', date: '2026-04-21', status: 'Completed', amount: '$45.00' },
  { id: '#ORD-005', customer: 'Eve Davis', date: '2026-04-22', status: 'Cancelled', amount: '$310.75' },
  { id: '#ORD-006', customer: 'Frank Wilson', date: '2026-04-23', status: 'Processing', amount: '$175.25' },
  { id: '#ORD-007', customer: 'Grace Lee', date: '2026-04-24', status: 'Completed', amount: '$95.00' },
  { id: '#ORD-008', customer: 'Henry Martinez', date: '2026-04-25', status: 'Pending', amount: '$430.00' },
];

const statusColors: Record<string, string> = {
  Completed: 'bg-green-100 text-green-800',
  Processing: 'bg-blue-100 text-blue-800',
  Pending: 'bg-yellow-100 text-yellow-800',
  Cancelled: 'bg-red-100 text-red-800',
};

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Orders</h1>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-gray-500 font-medium">Order ID</th>
                <th className="px-6 py-4 text-gray-500 font-medium">Customer</th>
                <th className="px-6 py-4 text-gray-500 font-medium">Date</th>
                <th className="px-6 py-4 text-gray-500 font-medium">Status</th>
                <th className="px-6 py-4 text-gray-500 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">{order.id}</td>
                  <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
