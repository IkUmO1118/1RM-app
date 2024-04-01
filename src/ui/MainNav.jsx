import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        <li>
          <NavLink
            to="/dashboard"
            className="flex items-center gap-5 rounded-md px-10 py-5 text-xl font-semibold text-gray-500 transition-all duration-300 hover:bg-gray-100 hover:text-gray-600 [&.active]:bg-emerald-50 [&.active]:text-emerald-700"
          >
            <HomeOutlinedIcon
              edge="start"
              color="green"
              sx={{
                width: '2.2rem',
                height: '2.2rem',
              }}
            />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/students"
            className="flex items-center gap-5 rounded-md px-10 py-5 text-xl font-semibold text-gray-500 transition-all duration-300 hover:bg-gray-100 hover:text-gray-600 [&.active]:bg-emerald-50 [&.active]:text-emerald-700"
          >
            <PeopleAltOutlinedIcon
              edge="start"
              color="green"
              sx={{
                width: '2.2rem',
                height: '2.2rem',
              }}
            />
            <span>Students</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/workouts"
            className="flex items-center gap-5 rounded-md px-10 py-5 text-xl font-semibold text-gray-500 transition-all duration-300 hover:bg-gray-100 hover:text-gray-600 [&.active]:bg-emerald-50 [&.active]:text-emerald-700"
          >
            <AssignmentOutlinedIcon
              edge="start"
              color="green"
              sx={{
                width: '2.2rem',
                height: '2.2rem',
              }}
            />

            <span>Workouts</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className="flex items-center gap-5 rounded-md px-10 py-5 text-xl font-semibold text-gray-500 transition-all duration-300 hover:bg-gray-100 hover:text-gray-600 [&.active]:bg-emerald-50 [&.active]:text-emerald-700"
          >
            <PersonAddAltOutlinedIcon
              edge="start"
              color="green"
              sx={{
                width: '2.2rem',
                height: '2.2rem',
              }}
            />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className="flex items-center gap-5 rounded-md px-10 py-5 text-xl font-semibold text-gray-500 transition-all duration-300 hover:bg-gray-100 hover:text-gray-600 [&.active]:bg-emerald-50 [&.active]:text-emerald-700"
          >
            <SettingsOutlinedIcon
              edge="start"
              color="green"
              sx={{
                width: '2.2rem',
                height: '2.2rem',
              }}
            />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
