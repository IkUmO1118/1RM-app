import { NavLink } from 'react-router-dom';
import {
  HiOutlineClipboardDocumentList,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineUserPlus,
} from 'react-icons/hi2';

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        <li>
          <NavLink
            to="/dashboard"
            className="flex items-center gap-5 rounded-md px-10 py-5 text-xl font-semibold text-teal-50 transition-all duration-300 hover:bg-teal-500 hover:text-teal-100 active:bg-teal-500 active:text-teal-100"
          >
            <HiOutlineHome className="h-8 w-8 text-teal-50" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/students"
            className="flex items-center gap-5 rounded-md px-10 py-5 text-xl font-semibold text-teal-50 transition-all duration-300 hover:bg-teal-500 hover:text-teal-100"
          >
            <HiOutlineUserGroup className="h-8 w-8 text-teal-50" />
            <span>Students</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/workouts"
            className="flex items-center gap-5 rounded-md px-10 py-5 text-xl font-semibold text-teal-50 transition-all duration-300 hover:bg-teal-500 hover:text-teal-100"
          >
            <HiOutlineClipboardDocumentList className="h-8 w-8 text-teal-50" />
            <span>Workouts</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className="flex items-center gap-5 rounded-md px-10 py-5 text-xl font-semibold text-teal-50 transition-all duration-300 hover:bg-teal-500 hover:text-teal-100"
          >
            <HiOutlineUserPlus className="h-8 w-8 text-teal-50" />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className="flex items-center gap-5 rounded-md px-10 py-5 text-xl font-semibold text-teal-50 transition-all duration-300 hover:bg-teal-500 hover:text-teal-100"
          >
            <HiOutlineCog6Tooth className="h-8 w-8 text-teal-50" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
