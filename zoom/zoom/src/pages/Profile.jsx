import DashboardLayout from '../layouts/DashboardLayout';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <DashboardLayout>
      <div className="py-8 max-w-[800px] mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-8 tracking-tight">
          User Profile
        </h1>
        
        <div className="bg-[#1C1F2E] rounded-3xl p-8 border border-white/5 relative overflow-hidden flex flex-col gap-8 shadow-lg">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full border-2 border-[#00e5ff] flex items-center justify-center bg-[#171923] text-[#00e5ff] font-bold text-4xl shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              {user?.name?.charAt(0) || 'U'}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">{user?.name || 'Guest User'}</h2>
              <p className="text-lg text-[#8c92a4]">{user?.email || 'No email provided'}</p>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8">
            <h3 className="text-xl font-bold text-white mb-4">Account Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#171923] rounded-xl p-6 border border-white/5">
                <p className="text-sm text-[#8c92a4] mb-1 font-semibold uppercase tracking-wider">Account Status</p>
                <p className="text-lg text-[#10b981] font-bold">Active & Verified</p>
              </div>
              <div className="bg-[#171923] rounded-xl p-6 border border-white/5">
                <p className="text-sm text-[#8c92a4] mb-1 font-semibold uppercase tracking-wider">Membership Level</p>
                <p className="text-lg text-white font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00e5ff]"></span>
                  Pro Tier
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex justify-end">
            <button 
              onClick={handleLogout}
              className="px-6 py-3 bg-red-500/10 text-red-500 hover:bg-red-500/20 font-bold rounded-xl transition-colors border border-red-500/20"
            >
              Log Out Securely
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
