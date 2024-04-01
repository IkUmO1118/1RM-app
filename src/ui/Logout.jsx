import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from '../features/authentication/useLogout';
import SpinnerMini from './SpinnerMini';

// useLogoutのisLoadingが作動しない
function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <button
      disabled={isLoading}
      onClick={logout}
      className="rounded-md p-3 text-gray-800 transition-all duration-200 hover:bg-gray-100 hover:text-gray-950"
    >
      {!isLoading ? (
        <HiArrowRightOnRectangle className="h-8 w-8" />
      ) : (
        <SpinnerMini />
      )}
    </button>
  );
}

export default Logout;
