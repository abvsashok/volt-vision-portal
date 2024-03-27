import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import PublicLayout from 'layout/PublicLayout/index';
import Home from 'pages/home/index';
import MainLayout from 'layout/MainLayout/index';
import DashboardDefault from 'pages/dashboard/index';
import SamplePage from 'pages/extra-pages/SamplePage';
import Landing from 'pages/landing/index';
import Tests from 'pages/tests/index';
import Projects from 'pages/projects/index';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <PublicLayout />,
  children: [
    {
      path: '/',
      element: <AuthLogin />
    },
    {
      path: 'auth',
      element: <MinimalLayout />,
      children: [
        {
          path: 'login',
          element: <AuthLogin />
        },
        {
          path: 'register',
          element: <AuthRegister />
        }
      ]
    },
    {
      path: 'admin',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Projects />
        },
        {
          path: 'tests',
          element: <Tests />
        },
        {
          path: 'project-view',
          element: <Landing />
        },
        {
          path: 'projects',
          element: <Projects />
        },
        {
          path: 'dashboard',
          children: [
            {
              path: 'default',
              element: <DashboardDefault />
            }
          ]
        },
        {
          path: 'sample-page',
          element: <SamplePage />
        },
      ]
    }
  ]
};

export default LoginRoutes;
