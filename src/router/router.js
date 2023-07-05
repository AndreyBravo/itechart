import { createBrowserRouter } from "react-router-dom";

import Login from "../components/Login";
import Singup from "../components/Singup";
import NotFoundPage from "../pages/NotFoundPage";
import App from "../pages/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/singup",
    element: <Singup />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export { router };
