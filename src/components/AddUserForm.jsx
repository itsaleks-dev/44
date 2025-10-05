import { useContext, useState } from "react";

import { AppContext } from "../context/AppContext";

export default function AddUserForm() {
    const { addUser } = useContext(AppContext);
    const [name, setName] = useState("");
    const [role, setRole] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !role.trim()) return;
        addUser({ id: Date.now(), name, role });
        setName("");
        setRole("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add User</h3>
            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            />
            <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Role"
            />
            <button type="submit">Add</button>
        </form>
    );
}
