import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UrlPath from './utils/UrlPath';
import Loading from './pages/Loading';

const AppLayout = React.lazy(() => import("./layout/AppLayout"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Login = React.lazy(() => import("./pages/Login"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Search = React.lazy(() => import("./pages/Search"));
const Details = React.lazy(() => import("./pages/Details"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Addresses = React.lazy(() => import("./pages/Addresses"));

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <React.Suspense fallback={<div><Loading/></div>}><Dashboard /></React.Suspense>
      },
      {
        path: UrlPath.DASH,
        element: <React.Suspense fallback={<div><Loading/></div>}><Dashboard /></React.Suspense>
      },
      {
        path: UrlPath.LOGIN,
        element: <React.Suspense fallback={<div><Loading/></div>}><Login /></React.Suspense>
      },
      {
        path: UrlPath.SIGNUP,
        element: <React.Suspense fallback={<div><Loading/></div>}><Signup /></React.Suspense>
      },
      {
        path: UrlPath.SEARCH,
        element: <React.Suspense fallback={<div><Loading/></div>}><Search /></React.Suspense>
      },
      {
        path: UrlPath.CART,
        element: <React.Suspense fallback={<div><Loading/></div>}><Cart /></React.Suspense>
      },
      {

        element: <React.Suspense fallback={<div><Loading/></div>}><Details /></React.Suspense>,
        children: [
         
          {
            path: UrlPath.PROFILE,
            element: <React.Suspense fallback={<div><Loading/></div>}><Profile /></React.Suspense>
          },
          {
            path: UrlPath.ORDERS,
            element: <React.Suspense fallback={<div><Loading/></div>}><Orders /></React.Suspense>
          },
          {
            path: UrlPath.ADDRESSES,
            element: <React.Suspense fallback={<div><Loading/></div>}><Addresses /></React.Suspense>
          }
        ]
      }
    ]
  }
]);
const App = () => {
  return <RouterProvider router={routes} />;
}

export default App