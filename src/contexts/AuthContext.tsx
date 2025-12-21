import React, { createContext, useContext, useState } from "react";
import type { AuthContextType } from "../types";

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({children}: {children : React.ReactNode}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function login(){
        setIsAuthenticated(true);
    }

    function logout(){
        setIsAuthenticated(false);

    }
    return (
        <AuthContext.Provider value = {{ isAuthenticated , login , logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    if (!context){
        throw new Error("Authentication")
    }
    return context;
}