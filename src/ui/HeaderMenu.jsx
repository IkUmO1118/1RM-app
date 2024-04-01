import { HiOutlineUser } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <ul className="flex gap-2">
      <li>
        <button
          className="rounded-md p-3 text-gray-800 transition-all duration-200 hover:bg-gray-100 hover:text-gray-950"
          onClick={() => navigate('/account')}
        >
          <HiOutlineUser className="h-8 w-8" />
        </button>
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
