import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoutes({ roles, children, isPublic } : any) {
    const { isAuthenticated, roles: userRoles } = useAuth();

    if (isPublic) return children;

    if (!isAuthenticated) return <>Login</>

    if (roles?.length && !roles.some((r: string) => userRoles.includes(r))) return <Navigate to="/unauthorised" />;

    return children;
}