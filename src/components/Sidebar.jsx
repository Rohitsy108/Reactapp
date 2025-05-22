import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">My App</h2>
      <nav className="space-y-2">
        <Link to="/" className="block text-blue-600">Dashboard</Link>
        <Link to="/settings" className="block text-gray-600">Settings</Link>
      </nav>
    </aside>
  );
}
