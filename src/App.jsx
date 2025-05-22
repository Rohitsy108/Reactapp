import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 bg-gray-50">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;