import {RouterProvider,createBrowserRouter, } from "react-router-dom";
import React from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import Login from "./component/Login/Login";
import SignUp from "./component/signup&Verify/SignUp";
import InterestsForm from './page'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      // {
      //   path: "verify",
      //   element: <SignUp_Verify />,
      // },
      {
        path: "interests",
        element: <InterestsForm />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  );
}

export default App;
