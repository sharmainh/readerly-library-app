import Home from "../pages/Home"
import Library from "../pages/Library"

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/library",
      component: Library,
      name: "Library",
    }
];

export default routes