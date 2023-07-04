import { createBrowserRouter } from "react-router-dom";

import Login from "../components/Login";
import Singup from "../components/Singup";
import NotFoundPage from "../pages/NotFoundPage";

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
    path: "*",
    element: <NotFoundPage />,
  },
]);

export { router };
