import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[26rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <main className="bg-gray-50 px-20 pb-24 pt-16">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
