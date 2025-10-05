import { createContext, useState } from "react";

export const AppContext = createContext({
    users: [],
    addUser: () => {},
});

export function AppProvider({ children }) {
    const [users, setUsers] = useState([
        { id: 1, name: "Alice", role: "Desinger" },
        { id: 2, name: "Aleks", role: "Developer" },
    ]);

    const addUser = (user) => setUsers((prev) => [...prev, user]);

    return (
        <AppContext.Provider value={{ users, addUser }}>
            {children}
        </AppContext.Provider>
    );
}