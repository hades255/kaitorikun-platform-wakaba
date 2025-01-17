import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // const auth = useSelector((state) => state.auth);
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("userdata");

        if (token) {
            setAuth(JSON.parse(token));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
