import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Student from './pages/Student';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Account from './pages/Account';
import PageNotFonnd from './pages/PageNotFound';

import AppLayout from './ui/AppLayout';
import Workouts from './pages/Workouts';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

function App() {
  // Material UIのtheme colors customize
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#0d9488', // teal-600
        light: '#5eead4', // teal-300
        dark: '#115e59', // teal-800
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="students" element={<Students />} />
              <Route path="students/:studentsId" element={<Student />} />
              <Route path="Users" element={<Users />} />
              <Route path="workouts" element={<Workouts />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFonnd />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
