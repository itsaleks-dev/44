import { useContext } from "react";

import { AppContext } from "../context/AppContext";
import UserProfile from "./UserProfile";

export default function UserList() {
    const { users } = useContext(AppContext);

    return (
        <div>
            <h2>User List</h2>
            {users.map((u) => (
                <UserProfile key={u.id} user={u} />
            ))}
        </div>
    );
}
