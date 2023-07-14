import { createBrowserRouter } from "react-router-dom";

import Login from "../components/Login";
import Singup from "../components/Singup";
import NotFoundPage from "../pages/NotFoundPage";
import App from "../pages/App";
import PokemonByName from "../pages/PokemonByName";
import FavoritesPage from "../pages/FavoritesPage";

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
    path: "/favorites",
    element: <FavoritesPage />,
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
