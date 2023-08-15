import React from 'react';
import './App.css';
import Home from './pages/Home';
import Banner from './components/Banner';

import Header from './components/Header';
import Footer from './components/Footer';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header className="fixed top-0 left-0 w-full z-50 bg-white" /> {/* Apply Tailwind classes here */}
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
