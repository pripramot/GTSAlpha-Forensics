import { useState } from 'react';
import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/Dashboard';
import Capabilities from './pages/Capabilities';
import Tools from './pages/Tools';
import Docs from './pages/Docs';
import Reports from './pages/Reports';
import Support from './pages/Support';

const PAGES = {
  dashboard: Dashboard,
  capabilities: Capabilities,
  tools: Tools,
  docs: Docs,
  reports: Reports,
  support: Support,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const PageComponent = PAGES[currentPage] ?? Dashboard;

  return (
    <AppLayout currentPage={currentPage} onSelectPage={setCurrentPage}>
      <PageComponent />
    </AppLayout>
  );
}
