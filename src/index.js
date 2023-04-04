import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

import "./index.css";

import Root from "./routes/Root.js"
import FrontPage from "./routes/FrontPage.js"
import About from "./routes/About.js"
import Details from "./routes/Details";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        {
            path: "/",
            element: <FrontPage />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/details/:name",
            element: <Details />,
        },

    ],
},

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />) 