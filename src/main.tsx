import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { Provider } from "react-redux";
import "normalize.css";
import { store } from "./store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserProfile from "./components/UserProfile/index.js";
import SearchMovie from "./components/SearchMovie/index.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <SearchMovie />
            },
            {
                path: "profile",
                element: <UserProfile />,
            }
        ]
    },
    {
        
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
