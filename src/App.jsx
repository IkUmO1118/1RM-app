import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  // Material UIのtheme colors customize
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#022c22', // emerald-950
        // light: '#5eead4', // teal-300
        // dark: '#115e59', // teal-800
      },
    },
    typography: {
      h6: {
        fontSize: 11,
        fontWeight: 500,
      },
      fontFamily: ['Geologica'].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
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
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
