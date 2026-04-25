'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Dashboard', icon: '🏠' },
  { href: '/users', label: 'Users', icon: '👥' },
  { href: '/orders', label: 'Orders', icon: '📦' },
  { href: '/products', label: 'Products', icon: '🛍️' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-xl font-bold text-white">Jaykar Admin</h1>
        <p className="text-gray-400 text-sm mt-1">Management Panel</p>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="font-medium">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <p className="text-gray-500 text-xs text-center">© 2024 Jaykar Admin</p>
      </div>
    </aside>
  );
}
