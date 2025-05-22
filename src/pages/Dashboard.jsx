import Sidebar from "../components/Sidebar";
import DataTable from "../components/DataTable";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <DataTable />
      </main>
    </div>
  );
}
