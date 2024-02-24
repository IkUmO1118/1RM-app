import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Student from './pages/Student';
import Users from './pages/Users';
import TrainingMenus from './pages/TrainingMenus';
import TrainingMenu from './pages/TrainingMenu';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Account from './pages/Account';
import PageNotFonnd from './pages/PageNotFound';

import AppLayout from './ui/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="students/:studentsId" element={<Student />} />
          <Route path="Users" element={<Users />} />
          <Route path="trainingMenus" element={<TrainingMenus />} />
          <Route
            path="trainingMenus/:trainingMenusId"
            element={<TrainingMenu />}
          />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFonnd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
