import Home from "../containers/Home.jsx";
import Login from "../containers/Login.jsx";
import Register from "../containers/Register.jsx";
import NotFound from "../containers/NotFound.jsx";
import Player from "../containers/Player.jsx";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/login",
    component: Login,
  },
  {
    exact: true,
    path: "/register",
    component: Register,
  },
  {
    name: "NotFound",
    component: NotFound,
  },
  {
    exact: true,
    path: "/player/:id",
    component: Player,
  },
];

export default routes;
