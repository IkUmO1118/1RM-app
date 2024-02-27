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
            className="flex items-center gap-5 rounded-md px-10 py-5 text-xl font-semibold text-zinc-400 transition-all duration-300 hover:bg-emerald-900  active:bg-emerald-900 active:text-zinc-400"
          >
            <HiOutlineHome className="h-8 w-8 text-zinc-400" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/students"
            className="flex items-center gap-5 rounded-md px-10 py-5 text-xl font-semibold text-zinc-400 transition-all duration-300 hover:bg-emerald-900 "
          >
            <HiOutlineUserGroup className="h-8 w-8 text-zinc-400" />
            <span>Students</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/workouts"
            className="flex items-center gap-5 rounded-md px-10 py-5 text-xl font-semibold text-zinc-400 transition-all duration-300 hover:bg-emerald-900 "
          >
            <HiOutlineClipboardDocumentList className="h-8 w-8 text-zinc-400" />
            <span>Workouts</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className="flex items-center gap-5 rounded-md px-10 py-5 text-xl font-semibold text-zinc-400 transition-all duration-300 hover:bg-emerald-900 "
          >
            <HiOutlineUserPlus className="h-8 w-8 text-zinc-400" />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className="flex items-center gap-5 rounded-md px-10 py-5 text-xl font-semibold text-zinc-400 transition-all duration-300 hover:bg-emerald-900 "
          >
            <HiOutlineCog6Tooth className="h-8 w-8 text-zinc-400" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
