import UserList from "./components/UserList";
import AddUserForm from "./components/AddUserForm";

function App() {
    return (
        <div style={{ margin: "2rem auto", maxWidth: "600px "}}>
            <h1>React Context Demo</h1>
            <AddUserForm />
            <UserList />
        </div>
    );
}

export default App;
