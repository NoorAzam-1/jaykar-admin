const products = [
  { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: '$79.99', stock: 145 },
  { id: 2, name: 'Running Shoes', category: 'Footwear', price: '$129.99', stock: 89 },
  { id: 3, name: 'Coffee Maker', category: 'Appliances', price: '$59.99', stock: 32 },
  { id: 4, name: 'Yoga Mat', category: 'Sports', price: '$35.00', stock: 210 },
  { id: 5, name: 'Desk Lamp', category: 'Furniture', price: '$45.00', stock: 67 },
  { id: 6, name: 'Backpack', category: 'Accessories', price: '$55.00', stock: 124 },
  { id: 7, name: 'Smart Watch', category: 'Electronics', price: '$199.99', stock: 18 },
  { id: 8, name: 'Water Bottle', category: 'Sports', price: '$25.00', stock: 305 },
];

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Products</h1>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-gray-500 font-medium">ID</th>
                <th className="px-6 py-4 text-gray-500 font-medium">Name</th>
                <th className="px-6 py-4 text-gray-500 font-medium">Category</th>
                <th className="px-6 py-4 text-gray-500 font-medium">Price</th>
                <th className="px-6 py-4 text-gray-500 font-medium">Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-500">#{product.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">{product.name}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">{product.price}</td>
                  <td className="px-6 py-4">
                    <span className={`font-medium ${product.stock < 50 ? 'text-red-600' : 'text-green-600'}`}>
                      {product.stock}
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
