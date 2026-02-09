import { createContext, useContext } from "react";

type AuthContextType = {
    isAuthenticated: boolean;
    roles: string[];
}

type AuthProviderProps = {
    children: React.ReactNode;
}

const defaultValues = {
    isAuthenticated: false,
    roles: [""]
}

const AuthContext = createContext<AuthContextType>(defaultValues);

export const AuthProvider = ({ children } : AuthProviderProps) => {
    // mock user: TODO Auth Integration
    const user = {
        isAuthenticated: true,
        roles: ["ADMIN"]
    };

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);