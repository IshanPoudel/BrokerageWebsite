import React from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import PropertyDetails from './pages/PropertyDetails';
// Import the necessary components for your routes
import Agents from './pages/Agents';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Services from './pages/Services';
import AgentDetails from './pages/AgentDetails'; // Import AgentDetails component
import Contact from './pages/Contact';
import Property from './pages/Property';

const Layout = () => {
  return (
    <div>
      <Header className="fixed top-0 left-0 w-full z-50 bg-white" />
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
      {
        path: "/agents",
        element: <Agents />,
      },
      {
        path: "/buy",
        element: <Buy />,
      },
      {
        path: "/sell",
        element: <Sell />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/agent/:agentId", // Dynamic route for agent details
        element: <AgentDetails />,
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path: "/listings",
        element:<Property/>
      },
      {
        path: "/property/:slug", // Dynamic route for property details
        element: <PropertyDetails />,
      }
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
