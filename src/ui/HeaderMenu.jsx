import { HiOutlineUser } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <ul className="flex gap-2">
      <li>
        <button
          className="rounded-md p-3 text-emerald-700 transition-all duration-200 hover:bg-gray-100"
          onClick={() => navigate('/account')}
        >
          <HiOutlineUser className="h-9 w-9" />
        </button>
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
