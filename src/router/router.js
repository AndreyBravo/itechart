import { createBrowserRouter } from "react-router-dom";

import Login from "../components/Login";
import Singup from "../components/Singup";
import NotFoundPage from "../pages/NotFoundPage";
import App from "../pages/App";
import PokemonByName from "../pages/PokemonByName";

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
    path: "/app/:name",
    element: <PokemonByName />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export { router };
