import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import Login from "./components/Login/Login.tsx";
import SignUp from "./components/Login/Signup/Signup.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    
    {
        path: "home",
        element: <Home/>,
    },
    {
        path: "signup",
        element: <SignUp/>,
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
