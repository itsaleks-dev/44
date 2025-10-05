export default function UserProfile({ user }) {
    return (
        <div style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
            <p>
                <strong>{user.name}</strong> - {user.role}
            </p>
        </div>
    );
}
