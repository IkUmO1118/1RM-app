import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { Suspense, lazy } from 'react';

import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Student from './pages/Student';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Account from './pages/Account';
import PageNotFound from './pages/PageNotFound';
import Workouts from './pages/Workouts';
import Sessions from './pages/Sessions';
import AppLayout from './ui/AppLayout';
import ProtectedRoute from './ui/ProtectedRoute';
import Spinner from './ui/Spinner';

// const Dashboard = lazy(() => import('./pages/Dashboard'));
// const Students = lazy(() => import('./pages/Students'));
// // const Student = lazy(() => import('./pages/Student'));
// const Users = lazy(() => import('./pages/Users'));
// const Settings = lazy(() => import('./pages/Settings'));
// const Login = lazy(() => import('./pages/Login'));
// const Account = lazy(() => import('./pages/Account'));
// const PageNotFound = lazy(() => import('./pages/PageNotFound'));
// const Workouts = lazy(() => import('./pages/Workouts'));
// const Sessions = lazy(() => import('./pages/Sessions'));
// const AppLayout = lazy(() => import('./ui/AppLayout'));
// const ProtectedRoute = lazy(() => import('./ui/ProtectedRoute'));
// const Spinner = lazy(() => import('./ui/Spinner'));

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
        // main: '#022c22', // emerald-950
        main: '#059669', // emerald-600
        light: '#34d399', //emerald-400
        dark: '#065f46', // emerald-800
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
          {/* <Suspense fallback={<Spinner />}> */}
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="students" element={<Students />} />
              <Route path="students/:studentId" element={<Student />} />
              <Route
                path="students/:studentId/part/:partId"
                element={<Sessions />}
              />
              <Route path="Users" element={<Users />} />
              <Route path="workouts" element={<Workouts />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          {/* </Suspense> */}
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: '#f9fafb',
              color: '#374151',
            },
          }}
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
