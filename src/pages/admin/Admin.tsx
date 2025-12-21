import { useAuth } from "../../contexts/AuthContext";

export default function Admin(){
   
    const {isAuthenticated , logout} = useAuth();

    return (
    <div>
    <h1>Admin</h1>
    <p>Authenticated: {String(isAuthenticated)}</p>
    <button onClick={logout}>Log out</button>
    </div>
)
}