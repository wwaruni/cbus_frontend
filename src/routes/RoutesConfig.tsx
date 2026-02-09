import Dashboard from "../pages/Dashboard";

export const routesConfig = [
    {
        path: "/",
        element: Dashboard,
        roles: ["ADMIN"],
        isPublic: false
    }
];