import Home from "../pages/Home"
import Library from "../pages/Library"
import LibraryHub from "../pages/LibraryHub"

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/libraryhub",
      component: LibraryHub,
      name: "Library Hub",
    },
    {
      path: "/library",
      component: Library,
      name: "Library",
    }
];

export default routes