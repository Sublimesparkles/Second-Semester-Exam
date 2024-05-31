import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './error/NotFound';
import HomePage from './components/Homepage';
import SingleRepoPage from './components/SingleRepo';


function App() {

  // Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/repos/:repoName",
    element: <SingleRepoPage/>,
    errorElement: <NotFoundPage/>
  },
]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
