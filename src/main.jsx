import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Avatar from "./routes/avatar"; 
import ChoiceAvatar from "./routes/choice-avatar.jsx";
import Questions from "./routes/questions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/avatar",
    element: <Avatar />,
  },
  {
    path: "/choice-avatar",
    element: <ChoiceAvatar />,
  },
  {
    path: "/questions/:idavatar",
    element: <Questions />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);