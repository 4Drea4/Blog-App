import { useAuth } from "../../contexts/AuthContext"

export default function Login(){
     const {login} = useAuth();


    return(
    <div>
        <h1>Login</h1>
        <button onClick={login}>Login </button>
    </div>
    ) 
}