import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import Signup from "./components/Login/Signup/Signup.tsx";
import Login from "./components/Login/Login.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "signup",
        element: <Signup/>,
    },
    
    {
        path: "home",
        element: <Home/>,
    },
    
    {
        path: "login",
        element: <Login/>,
    },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
