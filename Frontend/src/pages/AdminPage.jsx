import React from 'react';
import { useApp } from '../Context/AppContext';
import { AdminPanel } from '../components/admin/AdminPanel';

export const AdminPage = () => {
  const { setIsAdminOpen } = useApp();

  React.useEffect(() => {
    setIsAdminOpen(true);
  }, [setIsAdminOpen]);

  return (
    <div className="py-24 px-4 max-w-7xl mx-auto text-center space-y-4">
      <h2 className="text-2xl font-bold text-white">SKz LAB Admin Management Portal</h2>
      <p className="text-sm text-neutral-400">
        The admin control plane has been opened in the interactive modal console.
      </p>
      <button
        onClick={() => setIsAdminOpen(true)}
        className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-xs font-semibold cursor-pointer"
      >
        Re-Open Admin Drawer
      </button>
    </div>
  );
};

export default AdminPage;
